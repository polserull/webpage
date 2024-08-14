document.addEventListener('DOMContentLoaded', function () {
    const RSS_URL = 'https://www.metoffice.gov.uk/public/data/PWSCache/WarningsRSS/Region/UK';
    const carousel = document.getElementById('rssCarousel');
    const carouselInner = document.getElementById('rssItems');
    const wxWarningText = document.getElementById('wx-warning-text');
    let currentIndex = 0;

    async function fetchRSSFeed() {
        try {
            const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const data = await response.json();
            if (!data.items || data.items.length === 0) {
                wxWarningText.innerText = "No Weather Warnings in effect for the UK.";
            } else {
                wxWarningText.innerText = "Weather Warnings in effect for the UK.";
                data.items.forEach((item, index) => {
                    const activeClass = index === 0 ? 'active' : '';
                    const carouselItem = document.createElement('div');
                    carouselItem.className = `item ${activeClass}`;
                    carouselItem.innerHTML = `
                        <div class="carousel-caption">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                        </div>
                    `;
                    carouselInner.appendChild(carouselItem);
                });
            }
        } catch (error) {
            console.error('Error fetching RSS feed:', error);
        }
    }

    fetchRSSFeed();
});


// calc(100vw - 1206px);
document.addEventListener('DOMContentLoaded', function () {
    const RSS_URL = 'https://www.metoffice.gov.uk/public/data/PWSCache/WarningsRSS/Region/UK';
    const carousel = document.getElementById('carousel');
    let currentIndex = 0;

    async function fetchRSSFeed() {
        try {
            const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`);
            const data = await response.json();
            displayRSSItems(data.items);
        } catch (error) {
            console.error('Error fetching RSS feed:', error);
        }
    }

    function displayRSSItems(items) {
        items.forEach(item => {
            const carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-item';
            
            let content = `
                <div class="item-content">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                    <a href="${item.link}" target="_blank"><button class="button" style="background-color: #ffe915; color: black;">View on MET Office</button></a>
                </div>
            `;
            
            if (item.enclosure && item.enclosure.link) {
                content = `<img src="${item.enclosure.link}" alt="${item.title}" class="item-image">` + content;
            }
            
            carouselItem.innerHTML = content;
            carousel.appendChild(carouselItem);
        });
        updateCarousel();
    }

    function updateCarousel() {
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;
        const containerWidth = document.querySelector('.carousel-container').offsetWidth;
        carousel.style.transform = `translateX(${-currentIndex * containerWidth}px)`;
        
        document.getElementById('prevButton').disabled = currentIndex === 0;
        document.getElementById('nextButton').disabled = currentIndex === totalItems - 1;
    }   

    document.getElementById('prevButton').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    document.getElementById('nextButton').addEventListener('click', () => {
        if (currentIndex < document.querySelectorAll('.carousel-item').length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    fetchRSSFeed();
});
document.addEventListener('DOMContentLoaded', function () {
    const RSS_URL = 'https://www.metoffice.gov.uk/public/data/PWSCache/WarningsRSS/Region/UK';
    const carousel = document.getElementById('carousel');
    let currentIndex = 0;

    async function fetchRSSFeed() {
        try {
            const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const data = await response.json();
            if (!data.items || data.items.length === 0) { 
				document.getElementById("wx-warning-text").innerText = " No Weather Warnings in affect for the UK. ";
            } else {
				document.getElementById("wx-warning-text").innerText = " Weather Warnings in affect for the UK. ";
            }
        } catch (error) {
            console.error('Error fetching RSS feed:', error);
        }
    }
    fetchRSSFeed();
});
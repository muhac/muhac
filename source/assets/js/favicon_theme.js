function updateFavicon() {
    const favicon32 = document.getElementById('favicon-32');
    const favicon64 = document.getElementById('favicon-64');

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Dark mode
        favicon32.href = '/images/tag_32_dark.png';
        favicon64.href = '/images/tag_64_dark.png';
    } else {
        // Light mode
        favicon32.href = '/images/tag_32_light.png';
        favicon64.href = '/images/tag_64_light.png';
    }
}

updateFavicon();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);

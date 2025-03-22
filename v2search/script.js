document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-bar');
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.google-search-btn');
    const luckyButton = document.querySelector('.lucky-btn');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (searchInput.value.trim() !== '') {
            handleSearch(searchInput.value);
        }
    });

    searchButton.addEventListener('click', () => {
        if (searchInput.value.trim() !== '') {
            handleSearch(searchInput.value);
        }
    });

    luckyButton.addEventListener('click', () => {
        if (searchInput.value.trim() !== '') {
            window.location.href = `/active/embed.html?url=${encodeURIComponent(`https://${searchInput.value}`)}&btnI=I%27m+Feeling+Lucky`;
        } else {
            window.location.href = 'elasticman.html';
        }
    });

    function handleSearch(input) {
        if (isValidUrl(input)) {
            const url = input.startsWith('http') ? input : `https://${input}`;
            window.location.href = `/active/embed.html?url=${encodeURIComponent(url)}`;
        } else {
            const queryUrl = `https://www.bing.com/search?q=${encodeURIComponent(input)}`;
            window.location.href = `/active/embed.html?url=${encodeURIComponent(queryUrl)}`;
        }
    }

    function isValidUrl(input) {
        const urlPattern = /\./;
        return urlPattern.test(input);
    }

    const voiceSearch = document.querySelector('.voice-search');
    voiceSearch.addEventListener('click', () => {
        alert('It may or may not happen...');
    });

    const imageSearch = document.querySelector('.image-search');
    imageSearch.addEventListener('click', () => {
        alert('Coming later in life...');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (searchInput.value.trim() !== '') {
                handleSearch(searchInput.value);
            }
        }
    });
});

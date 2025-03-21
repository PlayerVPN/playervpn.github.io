document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-bar');
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.google-search-btn');
    const luckyButton = document.querySelector('.lucky-btn');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (searchInput.value.trim() !== '') {
            performSearch(searchInput.value);
        }
    });

    searchButton.addEventListener('click', () => {
        if (searchInput.value.trim() !== '') {
            performSearch(searchInput.value);
        }
    });

    luckyButton.addEventListener('click', () => {
        if (searchInput.value.trim() !== '') {
            window.location.href = `/active/embed.html?url=${encodeURIComponent(searchInput.value)}&btnI=I%27m+Feeling+Lucky`;
        } else {
            window.location.href = 'file:///home/chronos/u-7efbfa05ab6bcac08130899e6b210cda8682c9cd/MyFiles/Downloads/V2Orbit/G/stretchyman.html';
        }
    });

    function performSearch(query) {
        window.location.href = `/active/embed.html?url=${encodeURIComponent(query)}`;
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
                performSearch(searchInput.value);
            }
        }
    });
});
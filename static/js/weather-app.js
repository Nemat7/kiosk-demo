// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Weather Map...');

    const weatherMap = new WeatherMap();

    // Обработчики кнопок навигации
    document.getElementById('weather-back-btn').addEventListener('click', () => {
        console.log('Back button clicked');
        weatherMap.goBack();
    });

    document.getElementById('weather-zoom-in').addEventListener('click', () => {
        console.log('Zoom in clicked');
        weatherMap.zoomIn();
    });

    document.getElementById('weather-zoom-out').addEventListener('click', () => {
        console.log('Zoom out clicked');
        weatherMap.zoomOut();
    });

    // Обработчик поиска
    const searchInput = document.getElementById('weather-search-input');
    const searchResults = document.getElementById('weather-search-results');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        // Поиск по всем уровням
        const results = Object.entries(mapRegistry)
            .filter(([id, data]) =>
                data.name.toLowerCase().includes(query)
            )
            .slice(0, 8);

        if (results.length > 0) {
            searchResults.innerHTML = results.map(([id, data]) => `
                <div class="weather-search-result" data-map-id="${id}">
                    ${data.name} (${getTypeLabel(data.type)})
                </div>
            `).join('');

            searchResults.style.display = 'block';

            // Добавляем обработчики для результатов поиска
            searchResults.querySelectorAll('.weather-search-result').forEach(result => {
                result.addEventListener('click', () => {
                    const mapId = result.dataset.mapId;
                    console.log('Search result clicked:', mapId);
                    weatherMap.navigateTo(mapId);
                    searchResults.style.display = 'none';
                    searchInput.value = '';
                });
            });
        } else {
            searchResults.style.display = 'none';
        }
    });

    // Скрываем результаты поиска при клике вне поиска
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });

    // Вспомогательная функция для меток типов
    function getTypeLabel(type) {
        const labels = {
            'country': 'Страна',
            'region': 'Область',
            'city': 'Город',
            'district': 'Район'
        };
        return labels[type] || type;
    }

    // Инициализируем начальную карту
    console.log('Starting navigation to tajikistan...');
    weatherMap.navigateTo('tajikistan');

    console.log('Weather Map initialized successfully');
});
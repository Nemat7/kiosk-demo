class WeatherMap {
    constructor() {
        this.currentMap = 'tajikistan';
        this.history = [];
        this.imageCache = new Map();
        this.zoomLevel = 1;
        this.weatherCache = new Map();
        this.CACHE_DURATION = 15 * 60 * 1000; // 15 минут
        this.isLoading = false;
    }

    // Загрузка карты с кэшированием
    async loadMap(mapId) {
        if (this.imageCache.has(mapId)) {
            return this.imageCache.get(mapId);
        }

        const mapInfo = mapRegistry[mapId];
        if (!mapInfo) {
            console.error(`Карта не найдена: ${mapId}`);
            return null;
        }

        return new Promise((resolve) => {
            const img = new Image();
            img.src = mapInfo.image;
            img.alt = mapInfo.name;

            img.onload = () => {
                this.imageCache.set(mapId, img);
                resolve(img);
            };

            img.onerror = () => {
                console.error(`Не удалось загрузить карту: ${mapInfo.image}`);
                // Загружаем заглушку
                const fallbackImg = new Image();
                fallbackImg.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjhGQUZDIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTRBMDhCIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPk5vIGltYWdlIGZvdW5kPC90ZXh0Pgo8L3N2Zz4K';
                resolve(fallbackImg);
            };
        });
    }

    // Переход к карте региона/города
    async navigateTo(mapId) {
        if (this.isLoading) return;

        console.log('Навигация к:', mapId);
        const mapInfo = mapRegistry[mapId];
        if (!mapInfo) {
            console.error(`Местоположение не найдено: ${mapId}`);
            this.showToast('Локация не найдена', 'error');
            return;
        }

        // Сохраняем в историю
        this.history.push(this.currentMap);
        this.currentMap = mapId;

        // Загружаем и отображаем карту
        const img = await this.loadMap(mapId);
        if (img) {
            const mapImage = document.getElementById('weather-current-map');
            mapImage.src = img.src;
            mapImage.alt = mapInfo.name;

            this.updateBreadcrumbs();
            this.updateNavigation();
            this.updateUIForLevel();

            // Загружаем погоду ТОЛЬКО для регионов, городов и районов
            if (mapInfo.type !== 'country') {
                this.showLoading();

                try {
                    await this.loadWeatherData(mapInfo, mapId);
                } catch (error) {
                    console.error('Ошибка загрузки погоды:', error);
                    this.showFallbackWeather(mapInfo);
                    this.showToast('Не удалось загрузить данные погоды', 'error');
                }

                this.hideLoading();
            } else {
                // Для страны показываем только общую информацию
                this.showGeneralWeatherInfo(mapInfo);
            }
        }
    }

    // Назад по навигации
    async goBack() {
        if (this.history.length > 0 && !this.isLoading) {
            const previousMap = this.history.pop();
            this.currentMap = previousMap;

            const img = await this.loadMap(previousMap);
            if (img) {
                const mapImage = document.getElementById('weather-current-map');
                mapImage.src = img.src;

                this.updateBreadcrumbs();
                this.updateNavigation();
                this.updateUIForLevel();

                const mapInfo = mapRegistry[previousMap];

                // Загружаем погоду ТОЛЬКО если не страна
                if (mapInfo.type !== 'country') {
                    this.showLoading();
                    await this.loadWeatherData(mapInfo, previousMap);
                    this.hideLoading();
                } else {
                    this.showGeneralWeatherInfo(mapInfo);
                }
            }
        }
    }

    // Обновление хлебных крошек
    updateBreadcrumbs() {
        const breadcrumbs = document.getElementById('weather-breadcrumbs');
        const current = mapRegistry[this.currentMap];

        let html = '';
        let currentItem = current;
        const path = [];

        // Строим путь от текущего элемента до корня
        while (currentItem) {
            path.unshift(currentItem);
            const parentKey = currentItem.parent;
            currentItem = parentKey ? mapRegistry[parentKey] : null;
        }

        // Генерируем хлебные крошки
        path.forEach((item, index) => {
            const isLast = index === path.length - 1;
            const mapId = Object.keys(mapRegistry).find(key => mapRegistry[key] === item);

            if (mapId) {
                html += `
                    <div class="weather-breadcrumb ${isLast ? 'active' : ''}"
                         data-map-id="${mapId}">
                        ${item.name}
                    </div>
                    ${!isLast ? '<div class="weather-breadcrumb-separator">/</div>' : ''}
                `;
            }
        });

        breadcrumbs.innerHTML = html;

        // Добавляем обработчики кликов
        breadcrumbs.querySelectorAll('.weather-breadcrumb:not(.active)').forEach(crumb => {
            crumb.addEventListener('click', () => {
                const mapId = crumb.dataset.mapId;
                this.navigateTo(mapId);
            });
        });
    }

    // Обновление состояния кнопки "Назад"
    updateNavigation() {
        const backBtn = document.getElementById('weather-back-btn');
        backBtn.disabled = this.history.length === 0;
    }

    // Обновление интерфейса в зависимости от уровня
    updateUIForLevel() {
        const mapType = this.getMapType(this.currentMap);
        const locationTitle = document.getElementById('weather-location-title');
        const current = mapRegistry[this.currentMap];
        const mapImage = document.getElementById('weather-current-map');

        // Убираем старые обработчики
        mapImage.onclick = null;

        switch(mapType) {
            case 'country':
                locationTitle.textContent = 'Выберите область';
                mapImage.style.cursor = 'pointer';
                mapImage.title = 'Кликните для выбора области';
                this.setupMapClickHandler();
                break;
            case 'region':
                locationTitle.textContent = `Выберите город в ${current.name}`;
                mapImage.style.cursor = 'pointer';
                mapImage.title = 'Кликните для выбора города';
                this.setupMapClickHandler();
                break;
            case 'city':
                locationTitle.textContent = `Выберите район в ${current.name}`;
                mapImage.style.cursor = 'pointer';
                mapImage.title = 'Кликните для выбора района';
                this.setupMapClickHandler();
                break;
            case 'district':
                locationTitle.textContent = `Погода в ${current.name}`;
                mapImage.style.cursor = 'default';
                mapImage.title = '';
                break;
        }
    }

    // Настройка обработчика клика по карте
    setupMapClickHandler() {
        const mapImage = document.getElementById('weather-current-map');
        const current = mapRegistry[this.currentMap];

        mapImage.addEventListener('click', (e) => {
            e.stopPropagation();
            this.handleMapClick(e, current);
        });
    }

    // Обработчик клика по карте
    handleMapClick(event, currentLocation) {
        console.log('Карта кликнута, текущая локация:', currentLocation);

        if (!currentLocation.children || currentLocation.children.length === 0) {
            console.log('Нет дочерних элементов');
            return;
        }

        // Если есть только один дочерний элемент, переходим к нему
        if (currentLocation.children.length === 1) {
            console.log('Один дочерний элемент, переход к:', currentLocation.children[0]);
            this.navigateTo(currentLocation.children[0]);
            return;
        }

        // Иначе показываем меню выбора
        console.log('Показываем меню для', currentLocation.children.length, 'дочерних элементов');
        this.showLocationSelectionMenu(event, currentLocation);
    }

    // Показывает меню выбора локаций
    showLocationSelectionMenu(event, currentLocation) {
        // Удаляем существующее меню
        const existingMenu = document.querySelector('.weather-location-menu');
        if (existingMenu) {
            existingMenu.remove();
        }

        // Создаем меню
        const menu = document.createElement('div');
        menu.className = 'weather-location-menu';
        menu.style.cssText = `
            position: fixed;
            left: ${event.clientX}px;
            top: ${event.clientY}px;
            background: white;
            border-radius: 0.75rem;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            padding: 1rem;
            z-index: 1000;
            max-width: 300px;
            max-height: 400px;
            overflow-y: auto;
            border: 1px solid #e2e8f0;
        `;

        // Добавляем варианты выбора
        const title = document.createElement('div');
        title.textContent = `Выберите ${this.getChildTypeLabel(currentLocation.type)}:`;
        title.style.cssText = 'font-weight: bold; margin-bottom: 0.5rem; color: var(--foreground);';
        menu.appendChild(title);

        currentLocation.children.forEach(childId => {
            const child = mapRegistry[childId];
            if (child) {
                const button = document.createElement('button');
                button.textContent = child.name;
                button.style.cssText = `
                    display: block;
                    width: 100%;
                    padding: 0.75rem;
                    margin: 0.25rem 0;
                    border: none;
                    background: #f8fafc;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    text-align: left;
                    transition: background-color 0.2s;
                    font-size: 14px;
                `;
                button.onmouseover = () => button.style.backgroundColor = '#e2e8f0';
                button.onmouseout = () => button.style.backgroundColor = '#f8fafc';
                button.onclick = (e) => {
                    e.stopPropagation();
                    console.log('Элемент меню выбран:', childId);
                    this.navigateTo(childId);
                    menu.remove();
                };
                menu.appendChild(button);
            }
        });

        // Добавляем меню на страницу
        document.body.appendChild(menu);

        // Закрываем меню при клике вне его
        const closeMenu = (e) => {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener('click', closeMenu);
            }
        };

        // Даем время для обработки текущего клика
        setTimeout(() => {
            document.addEventListener('click', closeMenu);
        }, 100);
    }

    getChildTypeLabel(parentType) {
        const labels = {
            'country': 'область',
            'region': 'город',
            'city': 'район'
        };
        return labels[parentType] || 'локацию';
    }

    getMapType(mapId) {
        const map = mapRegistry[mapId];
        return map ? map.type : 'unknown';
    }

    // Показ общей информации для стран/областей/городов
    showGeneralWeatherInfo(location) {
        document.getElementById('weather-temperature').textContent = '--°C';
        document.getElementById('weather-description').textContent = `Выберите ${this.getChildTypeLabel(location.type)} для просмотра погоды`;
        document.getElementById('weather-icon').className = 'fas fa-map-marker-alt';

        // Очищаем детальные данные
        /*document.getElementById('weather-humidity').textContent = '--%';
        document.getElementById('weather-wind').textContent = '-- м/с';
        document.getElementById('weather-pressure').textContent = '-- гПа';
        document.getElementById('weather-precipitation').textContent = '--%';*/

        // Очищаем прогноз
        this.clearDetailedForecast();
    }

    // Загрузка данных погоды из API
    async loadWeatherData(location, mapId) {
        console.log('Загрузка погоды для:', location.name, 'тип:', location.type);

        // Проверяем, что это не страна
        if (location.type === 'country') {
            console.log('Пропускаем загрузку погоды для страны');
            this.showGeneralWeatherInfo(location);
            return;
        }

        try {
            // Получаем название для API
            const areaName = this.getAreaNameForAPI(location);

            if (!areaName) {
                console.warn('Нет названия для API');
                this.showFallbackWeather(location);
                return;
            }

            console.log('Название для API:', areaName);

            const weatherData = await this.fetchWeatherData(areaName);
            console.log('Данные от API:', weatherData);

            // Обрабатываем данные API
            const processedData = this.processWeatherData(weatherData, location);

            // Обновляем UI с обработанными данными
            this.updateWeatherUI(location, processedData);

            // Обновляем прогноз
            this.updateForecastWithRealData(processedData.forecast);

            this.showToast(`Данные погоды для ${location.name} загружены`, 'success');

        } catch (error) {
            console.error('Ошибка загрузки погоды:', error);
            throw error;
        }
    }

    // Получение названия для API
    getAreaNameForAPI(location) {
        // Для страны не делаем запрос
        if (location.type === 'country') {
            console.warn('Запрос погоды для страны отключен');
            return null;
        }

        // Убираем префиксы "ҷ. ", "н. ", "ш. "
        const name = location.name
            .replace(/^[ҷнш]\.\s*/, '')
            .trim();

        return name;
    }

    // Запрос данных погоды с кэшированием
    async fetchWeatherData(areaName) {
        const cacheKey = `${areaName}-${this.getCurrentDate()}`;
        const cached = this.weatherCache.get(cacheKey);

        // Проверяем кэш
        if (cached && (Date.now() - cached.timestamp) < this.CACHE_DURATION) {
            console.log('Используем кэшированные данные для:', areaName);
            return cached.data;
        }

        try {
            // Формируем URL для API
            const apiUrl = `http://127.0.0.1:8001/forecast6h?area=${encodeURIComponent(areaName)}&date=${this.getCurrentDate()}`;
            console.log('Запрос к API:', apiUrl);

            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP ошибка! статус: ${response.status}`);
            }

            const data = await response.json();

            // Сохраняем в кэш
            this.weatherCache.set(cacheKey, {
                data: data,
                timestamp: Date.now()
            });

            return data;
        } catch (error) {
            console.error('Ошибка получения данных:', error);
            throw error;
        }
    }

    // Обработка данных API - УПРОЩЕННАЯ И ПРАВИЛЬНАЯ
   processWeatherData(apiData, location) {
    console.log('=== ПОКАЗЫВАЕМ ТОЛЬКО ДЕНЬ/НОЧЬ ===');
    console.log('Данные API:', apiData.data);

    if (!apiData.data || apiData.data.length === 0) {
        throw new Error('Нет данных от API');
    }

    // Группируем данные по дням
    const byDay = {};
    apiData.data.forEach(item => {
        if (!byDay[item.day]) byDay[item.day] = [];
        byDay[item.day].push(item);
    });

    console.log('Сгруппировано по дням:', byDay);

    // ТЕКУЩАЯ ПОГОДА (день 0 - сегодня)
    let currentTemp = '--°C';
    let currentIcon = 'fa-thermometer-half';
    let currentDesc = 'Нет данных';

    if (byDay[1] && byDay[1].length > 0) {
        // Для текущей погоды берем дневные данные
        const todayDaytime = byDay[1].find(item => item.timeofday === 2);
        const todayData = todayDaytime || byDay[1][0];

        if (todayData) {
            // Берем среднее между min и max для текущей температуры
            const avgTemp = (todayData.avg_Tmin + todayData.avg_Tmax) / 2;
            const temp = Math.round(avgTemp);
            currentTemp = `${temp > 0 ? '+' : ''}${temp}°C`;
            currentIcon = 'fa-thermometer-half';
            currentDesc = `Днем: ${Math.round(todayData.avg_Tmin)}°...${Math.round(todayData.avg_Tmax)}°`;

            console.log('Текущая погода (день 0):', todayData);
        }
    }

    // ПРОГНОЗ НА 5 ДНЕЙ (дни 1-5) - ТОЛЬКО ДЕНЬ/НОЧЬ
    const forecast = [];

    for (let dayNum = 1; dayNum <= 5; dayNum++) {
        const dayItems = byDay[dayNum];

        if (dayItems && dayItems.length > 0) {
            console.log(`\n--- День ${dayNum} ---`);
            console.log('Все записи:', dayItems);

            // Находим дневные данные (timeofday=2)
            const daytimeData = dayItems.find(item => item.timeofday === 2);
            // Находим ночные данные (timeofday=3)
            const nighttimeData = dayItems.find(item => item.timeofday === 3);

            console.log('Дневные данные:', daytimeData);
            console.log('Ночные данные:', nighttimeData);

            // Дневные данные
            const dayMin = daytimeData ? Math.round(daytimeData.avg_Tmin) : null;
            const dayMax = daytimeData ? Math.round(daytimeData.avg_Tmax) : null;
            const dayIcon = daytimeData ? daytimeData.icon : '';

            // Ночные данные
            const nightMin = nighttimeData ? Math.round(nighttimeData.avg_Tmin) : null;
            const nightMax = nighttimeData ? Math.round(nighttimeData.avg_Tmax) : null;
            const nightIcon = nighttimeData ? nighttimeData.icon : '';

            // Формируем отображаемые значения
            const dayTempDisplay = (dayMin !== null && dayMax !== null)
                ? `${dayMin > 0 ? '+' : ''}${dayMin}°...${dayMax > 0 ? '+' : ''}${dayMax}°`
                : '--°';

            const nightTempDisplay = (nightMin !== null && nightMax !== null)
                ? `${nightMin > 0 ? '+' : ''}${nightMin}°...${nightMax > 0 ? '+' : ''}${nightMax}°`
                : '--°';

            forecast.push({
                date: this.formatForecastDate(dayNum), // оставляем дату для отладки, но не показываем
                dayNumber: dayNum,
                // Дневные данные
                day_temp: dayTempDisplay,
                day_icon: dayIcon,
                // Ночные данные
                night_temp: nightTempDisplay,
                night_icon: nightIcon
            });

            console.log(`День ${dayNum} результат:`, {
                днем: dayTempDisplay,
                иконкаДень: dayIcon,
                ночью: nightTempDisplay,
                иконкаНочь: nightIcon
            });

        } else {
            // Нет данных для этого дня
            forecast.push({
                date: this.formatForecastDate(dayNum),
                dayNumber: dayNum,
                day_temp: '--°',
                day_icon: '',
                night_temp: '--°',
                night_icon: ''
            });
        }
    }

    console.log('\n=== ИТОГОВЫЙ ПРОГНОЗ ===');
    console.log(forecast);

    return {
        current: {
            temperature: currentTemp,
            description: currentDesc,
            icon: currentIcon,
           /* humidity: '--%',
            wind: '-- м/с',
            pressure: '-- гПа',
            precipitation: '--%'*/
        },
        forecast: forecast
    };
}

    formatDayOfWeek(dayOffset) {
    const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + dayOffset);
    return days[targetDate.getDay()];
}

formatForecastDate(apiDayNumber) {
    // API: 1 = сегодня, 2 = завтра, 3 = послезавтра и т.д.
    const dayOffset = apiDayNumber - 1; // Преобразуем в смещение от сегодня

    if (apiDayNumber === 1) return 'Сегодня';
    if (apiDayNumber === 2) return 'Завтра';

    const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + dayOffset);
    return days[targetDate.getDay()];
}

    // Обновление UI с данными погоды
    updateWeatherUI(location, weatherData) {
        const current = weatherData.current;

        console.log('Обновление UI с данными:', weatherData);

        // Обновляем основные данные
        document.getElementById('weather-temperature').textContent = current.temperature;
        document.getElementById('weather-description').textContent = current.description;
        document.getElementById('weather-icon').className = `fas ${current.icon}`;

        // Обновляем детали
        /*document.getElementById('weather-humidity').textContent = current.humidity;
        document.getElementById('weather-wind').textContent = current.wind;
        document.getElementById('weather-pressure').textContent = current.pressure;
        document.getElementById('weather-precipitation').textContent = current.precipitation;*/
    }

    // Обновление прогноза

// Обновление прогноза
updateForecastWithRealData(forecastData) {
    const forecastList = document.getElementById('weather-forecast-list');

    console.log('Обновление прогноза (только день/ночь):', forecastData);

    if (!forecastData || forecastData.length === 0) {
        this.clearDetailedForecast();
        return;
    }

    // Убедимся, что стили добавлены
    this.addForecastStyles();

    forecastList.innerHTML = forecastData.map(day => `
        <div class="weather-forecast-item">
            <!-- Дата сбоку слева -->
            <div class="weather-forecast-date-side">${this.formatForecastDate(day.dayNumber)}</div>

            <!-- Контент прогноза -->
            <div class="weather-forecast-content">
                <!-- ТОЛЬКО ДНЕВНЫЕ И НОЧНЫЕ ДАННЫЕ -->
                <div class="weather-forecast-details">
                    <!-- Дневные данные -->
                    <div class="weather-forecast-period">
                        <div class="weather-forecast-period-label">Днем</div>
                        <div class="weather-forecast-period-temp">
                            ${day.day_temp}
                        </div>
                        ${day.day_icon ? `<div class="weather-forecast-period-icon">
                            <img src="/static/images/weather-icons/${day.day_icon}" alt="Дневная иконка">
                        </div>` : '<div class="weather-forecast-period-icon"></div>'}
                    </div>

                    <!-- Ночные данные -->
                    <div class="weather-forecast-period">
                        <div class="weather-forecast-period-label">Ночью</div>
                        <div class="weather-forecast-period-temp">
                            ${day.night_temp}
                        </div>
                        ${day.night_icon ? `<div class="weather-forecast-period-icon">
                            <img src="/static/images/weather-icons/${day.night_icon}" alt="Ночная иконка">
                        </div>` : '<div class="weather-forecast-period-icon"></div>'}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Метод для добавления CSS стилей

addForecastStyles() {
    // Проверяем, не добавлены ли стили уже
    if (document.getElementById('weather-forecast-styles')) {
        return;
    }

    // Создаем элемент style
    const style = document.createElement('style');
    style.id = 'weather-forecast-styles';

    // Добавляем CSS
    style.textContent = `
        /* Базовые стили для десктопа */
        .weather-forecast-item {
            padding: 10px 12px;
            border-bottom: 1px solid #e5e7eb;
            display: flex;
            align-items: center;
            gap: 16px;
            min-height: 60px;
        }

        .weather-forecast-item:last-child {
            border-bottom: none;
        }

        /* Дата сбоку слева - компактнее */
        .weather-forecast-date-side {
            width: 70px;
            min-width: 70px;
            font-weight: 600;
            color: #111827;
            font-size: 13px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 0 4px;
            height: 100%;
        }

        /* Контент прогноза - более компактный */
        .weather-forecast-content {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
        }

        /* Дневной и ночной блоки в ряд */
        .weather-forecast-details {
            display: flex;
            gap: 20px;
            flex: 1;
            justify-content: space-around;
        }

        /* Каждый период (день/ночь) */
        .weather-forecast-period {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            min-width: 70px;
        }

        .weather-forecast-period-label {
            font-size: 11px;
            color: #6b7280;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .weather-forecast-period-temp {
            font-size: 13px;
            color: #111827;
            font-weight: 600;
            text-align: center;
            line-height: 1.2;
        }

        .weather-forecast-period-icon {
            width: 22px;
            height: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .weather-forecast-period-icon img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        /* Цвета для температур */
        .temp-min {
            color: #3b82f6;
        }

        .temp-max {
            color: #ef4444;
        }

        .temp-separator {
            color: #9ca3af;
            margin: 0 2px;
        }

        /* Планшеты (768px и меньше) */
        @media (max-width: 768px) {
            .weather-forecast-item {
                padding: 8px 10px;
                gap: 12px;
                min-height: 55px;
            }

            .weather-forecast-date-side {
                width: 60px;
                min-width: 60px;
                font-size: 12px;
                padding: 0;
            }

            .weather-forecast-details {
                gap: 16px;
            }

            .weather-forecast-period {
                min-width: 60px;
            }

            .weather-forecast-period-label {
                font-size: 10px;
            }

            .weather-forecast-period-temp {
                font-size: 12px;
            }

            .weather-forecast-period-icon {
                width: 20px;
                height: 20px;
            }
        }

        /* Мобильные устройства (480px и меньше) */
        @media (max-width: 480px) {
            .weather-forecast-item {
                padding: 8px;
                gap: 10px;
                min-height: 50px;
            }

            .weather-forecast-date-side {
                width: 50px;
                min-width: 50px;
                font-size: 11px;
            }

            .weather-forecast-details {
                gap: 12px;
            }

            .weather-forecast-period {
                min-width: 55px;
                gap: 2px;
            }

            .weather-forecast-period-label {
                font-size: 9px;
                letter-spacing: 0.3px;
            }

            .weather-forecast-period-temp {
                font-size: 11px;
            }

            .weather-forecast-period-icon {
                width: 18px;
                height: 18px;
            }
        }

        /* Очень маленькие экраны (360px и меньше) */
        @media (max-width: 360px) {
            .weather-forecast-item {
                padding: 6px 8px;
                gap: 8px;
            }

            .weather-forecast-date-side {
                width: 45px;
                min-width: 45px;
                font-size: 10px;
            }

            .weather-forecast-details {
                gap: 8px;
                justify-content: space-between;
            }

            .weather-forecast-period {
                min-width: 50px;
            }

            .weather-forecast-period-label {
                font-size: 8px;
            }

            .weather-forecast-period-temp {
                font-size: 10px;
            }

            .weather-forecast-period-icon {
                width: 16px;
                height: 16px;
            }
        }

        /* Горизонтальная ориентация на мобильных */
        @media (max-width: 768px) and (orientation: landscape) {
            .weather-forecast-item {
                min-height: 45px;
            }

            .weather-forecast-details {
                gap: 24px;
            }

            .weather-forecast-period-label {
                font-size: 9px;
            }
        }
    `;

    // Добавляем стили в head документа
    document.head.appendChild(style);
}

    // Резервные данные при ошибке API
    showFallbackWeather(location) {
        console.log('Используем резервные данные для:', location.name);

        document.getElementById('weather-temperature').textContent = '--°C';
        document.getElementById('weather-description').textContent = 'Данные временно недоступны';
        document.getElementById('weather-icon').className = 'fas fa-exclamation-triangle';
        /*document.getElementById('weather-humidity').textContent = '--%';
        document.getElementById('weather-wind').textContent = '-- м/с';
        document.getElementById('weather-pressure').textContent = '-- гПа';
        document.getElementById('weather-precipitation').textContent = '--%';*/

        this.clearDetailedForecast();
    }

    // Очистка детального прогноза
    clearDetailedForecast() {
        const forecastList = document.getElementById('weather-forecast-list');
        forecastList.innerHTML = `
            <div class="weather-forecast-item">
                <div class="weather-forecast-date">--</div>
                <div class="weather-forecast-icon"><i class="fas fa-info-circle"></i></div>
                <div class="weather-forecast-temp-range">
                    <span class="temp-max">--°</span>
                    <span class="temp-min">--°</span>
                </div>
                <div class="weather-forecast-avg">Средняя: --°</div>
                <div class="weather-forecast-description">Выберите локацию</div>
            </div>
        `;
    }

    // Управление масштабом
    zoomIn() {
        this.zoomLevel = Math.min(this.zoomLevel + 0.1, 2);
        this.applyZoom();
    }

    zoomOut() {
        this.zoomLevel = Math.max(this.zoomLevel - 0.1, 0.5);
        this.applyZoom();
    }

    applyZoom() {
        const mapImage = document.getElementById('weather-current-map');
        mapImage.style.transform = `scale(${this.zoomLevel})`;
    }

    // Получение текущей даты
    getCurrentDate() {
        const now = new Date();
        // Отнимаем 1 день для получения вчерашней даты
        now.setDate(now.getDate() - 1);
        return now.toISOString().split('T')[0];
    }

    // Показать загрузку
    showLoading() {
        this.isLoading = true;
        const icon = document.getElementById('weather-icon');
        icon.className = 'fas fa-spinner fa-spin';

        const temp = document.getElementById('weather-temperature');
        const desc = document.getElementById('weather-description');

        temp.textContent = '...';
        desc.textContent = 'Загрузка данных...';
    }

    // Скрыть загрузку
    hideLoading() {
        this.isLoading = false;
    }

    // Показать уведомление
    showToast(message, type = 'info') {
        // Удаляем старое уведомление
        const oldToast = document.getElementById('weather-toast');
        if (oldToast) {
            oldToast.remove();
        }

        // Создаем новое уведомление
        const toast = document.createElement('div');
        toast.id = 'weather-toast';
        toast.className = `weather-toast weather-toast-${type}`;
        toast.innerHTML = `
            <div class="weather-toast-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <div class="weather-toast-message">${message}</div>
            </div>
        `;

        document.body.appendChild(toast);

        // Показываем уведомление
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

        // Автоматически скрываем через 3 секунды
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.remove();
                }
            }, 300);
        }, 3000);
    }

    // Инициализация поиска
    initSearch() {
        const searchInput = document.getElementById('weather-search-input');
        const searchResults = document.getElementById('weather-search-results');

        if (!searchInput || !searchResults) return;

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();

            if (query.length < 2) {
                searchResults.style.display = 'none';
                return;
            }

            // Ищем в mapRegistry
            const results = [];
            for (const [id, location] of Object.entries(mapRegistry)) {
                if (location.name.toLowerCase().includes(query) && location.type !== 'country') {
                    results.push({
                        id: id,
                        name: location.name,
                        type: location.type,
                        parentName: location.parent ? mapRegistry[location.parent]?.name : ''
                    });
                }

                if (results.length >= 10) break;
            }

            // Показываем результаты
            if (results.length > 0) {
                searchResults.innerHTML = results.map(result => `
                    <div class="search-result-item" data-map-id="${result.id}">
                        <div class="search-result-name">${result.name}</div>
                        <div class="search-result-info">
                            <span class="search-result-type">${this.getTypeLabel(result.type)}</span>
                            ${result.parentName ? `<span class="search-result-parent">• ${result.parentName}</span>` : ''}
                        </div>
                    </div>
                `).join('');

                searchResults.style.display = 'block';

                // Добавляем обработчики кликов
                searchResults.querySelectorAll('.search-result-item').forEach(item => {
                    item.addEventListener('click', () => {
                        const mapId = item.dataset.mapId;
                        this.navigateTo(mapId);
                        searchInput.value = '';
                        searchResults.style.display = 'none';
                    });
                });
            } else {
                searchResults.innerHTML = '<div class="search-result-empty">Ничего не найдено</div>';
                searchResults.style.display = 'block';
            }
        });

        // Закрываем результаты при клике вне
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });

        // Закрываем результаты при нажатии Esc
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchResults.style.display = 'none';
            }
        });
    }

    getTypeLabel(type) {
        const labels = {
            'country': 'Страна',
            'region': 'Регион',
            'city': 'Город',
            'district': 'Район'
        };
        return labels[type] || 'Локация';
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const weatherMap = new WeatherMap();
    window.weatherMap = weatherMap;

    // Инициализируем поиск
    weatherMap.initSearch();

    // Добавляем обработчики кнопок
    document.getElementById('weather-back-btn').addEventListener('click', () => {
        weatherMap.goBack();
    });

    document.getElementById('weather-zoom-in').addEventListener('click', () => {
        weatherMap.zoomIn();
    });

    document.getElementById('weather-zoom-out').addEventListener('click', () => {
        weatherMap.zoomOut();
    });

    // Устанавливаем начальный заголовок
    document.getElementById('weather-location-title').textContent = 'Выберите область';

    // Инициализируем прогноз
    weatherMap.clearDetailedForecast();
});
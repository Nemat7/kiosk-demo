/*
// JavaScript для маркетплейса
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация только если мы на странице маркетплейса
    if (!document.querySelector('.marketplace-section')) return;

    const marketplaceNavLinks = document.querySelectorAll('.nav-link');
    const marketplaceSections = document.querySelectorAll('.section');
    const marketplaceSearchButton = document.getElementById('marketplace-search-button');
    const marketplaceRegionSelect = document.getElementById('marketplace-region-select');
    const marketplaceCategorySelect = document.getElementById('marketplace-category-select');
    const marketplaceProductTypeSelect = document.getElementById('marketplace-product-type-select');
    const marketplaceProductsGrid = document.getElementById('marketplace-products-grid');

    // Функция для активации секции
    function activateMarketplaceSection(sectionId) {
        // Скрыть все секции
        marketplaceSections.forEach(section => {
            section.classList.remove('active');
        });

        // Показать выбранную секцию
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.classList.add('active');
        }

        // Обновить активную ссылку в навигации
        marketplaceNavLinks.forEach(link => {
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Обработчики для навигационных ссылок
    marketplaceNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Если ссылка ведет на внешнюю страницу, не перехватываем
            if (this.getAttribute('href') && !this.getAttribute('href').startsWith('#')) {
                return;
            }

            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            if (sectionId) {
                activateMarketplaceSection(sectionId);
            }
        });
    });

    // Обработчик для кнопки поиска
    if (marketplaceSearchButton) {
        marketplaceSearchButton.addEventListener('click', function() {
            performMarketplaceSearch();
        });
    }

    // Обработчики для изменения фильтров (поиск при изменении)
    if (marketplaceRegionSelect) {
        marketplaceRegionSelect.addEventListener('change', function() {
            // Автопоиск при изменении фильтра (можно отключить если не нужно)
            // performMarketplaceSearch();
        });
    }

    if (marketplaceCategorySelect) {
        marketplaceCategorySelect.addEventListener('change', function() {
            // performMarketplaceSearch();
        });
    }

    if (marketplaceProductTypeSelect) {
        marketplaceProductTypeSelect.addEventListener('change', function() {
            // performMarketplaceSearch();
        });
    }

    // Функция выполнения поиска
    function performMarketplaceSearch() {
        const region = marketplaceRegionSelect ? marketplaceRegionSelect.value : '';
        const category = marketplaceCategorySelect ? marketplaceCategorySelect.value : '';
        const productType = marketplaceProductTypeSelect ? marketplaceProductTypeSelect.value : '';

        // Показать индикатор загрузки
        marketplaceSearchButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Поиск...';
        marketplaceSearchButton.disabled = true;

        // Имитация загрузки (в реальном приложении здесь будет AJAX запрос)
        setTimeout(() => {
            // В реальном приложении здесь будет обработка ответа от сервера
            console.log('Параметры поиска:', {
                region: region || 'Все',
                category: category || 'Все',
                productType: productType || 'Все'
            });

            // Показать уведомление о поиске
            showMarketplaceSearchNotification(region, category, productType);

            // Восстановить кнопку
            marketplaceSearchButton.innerHTML = '<i class="fas fa-search"></i> Найти товары';
            marketplaceSearchButton.disabled = false;

        }, 1000);
    }

    // Функция показа уведомления о поиске
    function showMarketplaceSearchNotification(region, category, productType) {
        // Можно добавить тост-уведомление или обновить интерфейс
        const regionText = getRegionText(region);
        const categoryText = getCategoryText(category);
        const productTypeText = getProductTypeText(productType);

        const message = `Поиск товаров:\n${regionText}\n${categoryText}\n${productTypeText}`;

        // Временное уведомление (можно заменить на красивый toast)
        if (window.showToast) {
            window.showToast('Результаты поиска', message, 'info');
        } else {
            alert(message);
        }
    }

    // Вспомогательные функции для получения текста фильтров
    function getRegionText(region) {
        const regions = {
            'central': 'Согд',
            'southern': 'Хатлон',
            'volga': 'РРП',
            'ural': 'ГБАО',
            '': 'Все регионы'
        };
        return `Регион: ${regions[region] || 'Все'}`;
    }

    function getCategoryText(category) {
        const categories = {
            'seeds': 'Семена',
            'fertilizers': 'Удобрения',
            'equipment': 'Оборудование',
            'crops': 'Урожай',
            'livestock': 'Животноводство',
            '': 'Все категории'
        };
        return `Категория: ${categories[category] || 'Все'}`;
    }

    function getProductTypeText(productType) {
        const productTypes = {
            'potato': 'Картофель',
            'wheat': 'Пшеница',
            'corn': 'Кукуруза',
            'vegetables': 'Овощи',
            'fruits': 'Фрукты',
            '': 'Все типы'
        };
        return `Тип: ${productTypes[productType] || 'Все'}`;
    }

    // Функция для обновления сетки товаров (будет использоваться при получении данных с сервера)
    function updateMarketplaceProducts(products) {
        if (!marketplaceProductsGrid) return;

        // Очистить текущие товары
        marketplaceProductsGrid.innerHTML = '';

        if (products.length === 0) {
            // Показать состояние "нет товаров"
            marketplaceProductsGrid.innerHTML = `
                <div class="marketplace-empty-state">
                    <div class="marketplace-empty-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <h3 class="marketplace-empty-title">Товары не найдены</h3>
                    <p class="marketplace-empty-description">
                        Попробуйте изменить параметры поиска или сбросить фильтры
                    </p>
                </div>
            `;
            return;
        }

        // Добавить товары в сетку
        products.forEach(product => {
            const productCard = createMarketplaceProductCard(product);
            marketplaceProductsGrid.appendChild(productCard);
        });
    }

    // Функция создания карточки товара (для будущего использования)
    function createMarketplaceProductCard(product) {
        const card = document.createElement('div');
        card.className = 'marketplace-product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="marketplace-product-image">
            <div class="marketplace-product-content">
                <div class="marketplace-product-category">${product.category}</div>
                <h3 class="marketplace-product-title">${product.title}</h3>
                <p class="marketplace-product-description">${product.description}</p>
                <div class="marketplace-product-details">
                    ${product.details.map(detail => `
                        <div class="marketplace-product-detail">
                            <i class="${detail.icon}"></i> ${detail.text}
                        </div>
                    `).join('')}
                </div>
                <div class="marketplace-seller-info">
                    <img src="${product.seller.avatar}" alt="${product.seller.name}" class="marketplace-seller-avatar">
                    <div class="marketplace-seller-details">
                        <div class="marketplace-seller-name">${product.seller.name}</div>
                        <div class="marketplace-seller-location">
                            <i class="fas fa-map-marker-alt"></i> ${product.seller.location}
                        </div>
                        <div class="marketplace-seller-phone">
                            <i class="fas fa-phone"></i> ${product.seller.phone}
                        </div>
                    </div>
                </div>
                <div class="marketplace-product-price">${product.price}</div>
            </div>
        `;
        return card;
    }

    console.log('Marketplace page initialized');
});*/

// JavaScript для маркетплейса
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация только если мы на странице маркетплейса
    if (!document.querySelector('.marketplace-section')) return;

    const filterForm = document.getElementById('marketplace-filters-form');
    const regionSelect = document.getElementById('marketplace-region-select');
    const categorySelect = document.getElementById('marketplace-category-select');
    const productTypeSelect = document.getElementById('marketplace-product-type-select');

    // Авто-отправка формы при изменении фильтров
    if (filterForm) {
        [regionSelect, categorySelect, productTypeSelect].forEach(select => {
            if (select) {
                select.addEventListener('change', function() {
                    filterForm.submit();
                });
            }
        });
    }

    // Показываем индикатор загрузки при отправке формы
    if (filterForm) {
        filterForm.addEventListener('submit', function() {
            const submitButton = this.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Поиск...';
                submitButton.disabled = true;
            }
        });
    }

    console.log('Marketplace page initialized');
});
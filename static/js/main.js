// JavaScript для функциональности киоска
document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для кнопки "Смотреть видео"
    const videoButton = document.querySelector('.ad-button');

    if (videoButton) {
        videoButton.addEventListener('click', function() {
            const video = document.querySelector('video');
            if (video) {
                if (video.paused) {
                    video.play();
                    this.textContent = 'Пауза';
                } else {
                    video.pause();
                    this.textContent = 'Смотреть видео';
                }
            }
        });
    }

//=================================================================================


//====================================================================


//=====================================================================

// JavaScript для раздела услуг
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация только если мы на странице услуг
    if (!document.querySelector('.services-section')) return;

    const servicesNavLinks = document.querySelectorAll('.nav-link');
    const servicesSections = document.querySelectorAll('.section');
    const servicesButtons = document.querySelectorAll('.services-request-btn');
    const servicesToast = document.getElementById('services-toast');

    // Функция для активации секции
    function activateServicesSection(sectionId) {
        // Скрыть все секции
        servicesSections.forEach(section => {
            section.classList.remove('active');
        });

        // Показать выбранную секцию
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.classList.add('active');
        }

        // Обновить активную ссылку в навигации
        servicesNavLinks.forEach(link => {
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Обработчики для навигационных ссылок
    servicesNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Если ссылка ведет на внешнюю страницу, не перехватываем
            if (this.getAttribute('href') && !this.getAttribute('href').startsWith('#')) {
                return;
            }

            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            if (sectionId) {
                activateServicesSection(sectionId);
            }
        });
    });

    // Обработчики для кнопок заказа услуг
    servicesButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceCard = this.closest('.services-card');
            const serviceTitle = serviceCard.querySelector('h3').textContent;
            const servicePrice = serviceCard.querySelector('.services-text-primary').textContent;

            // Показать уведомление
            showServicesToast(serviceTitle, servicePrice);
        });
    });

    // Функция показа уведомления для услуг
    function showServicesToast(serviceTitle, servicePrice) {
        if (!servicesToast) return;

        const toastTitle = servicesToast.querySelector('.services-toast-title');
        const toastDesc = servicesToast.querySelector('.services-toast-description');

        toastTitle.textContent = `Запрос на услугу: ${serviceTitle}`;
        toastDesc.textContent = `Стоимость: ${servicePrice}. Мы свяжемся с вами в ближайшее время для уточнения деталей.`;

        servicesToast.classList.add('show');

        // Скрыть уведомление через 5 секунд
        setTimeout(() => {
            servicesToast.classList.remove('show');
        }, 5000);
    }


//=====================================================================




    // Дополнительные функции будут добавлены позже
console.log('main.js loaded');
});
// JavaScript для формы контактов
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toast-title');
    const toastDescription = document.getElementById('toast-description');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Валидация формы
            if (validateContactForm()) {
                submitContactForm(this);
            }
        });
    }

    // Функция валидации формы
    function validateContactForm() {
        let isValid = true;
        const nameInput = document.getElementById('name');
        const messageInput = document.getElementById('message');

        // Удаляем предыдущие сообщения об ошибках
        document.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
        });
        document.querySelectorAll('.input.error, .textarea.error').forEach(el => {
            el.classList.remove('error');
        });

        // Валидация имени
        if (!nameInput.value.trim()) {
            showError(nameInput, 'Пожалуйста, введите ваше имя');
            isValid = false;
        } else if (nameInput.value.trim().length < 2) {
            showError(nameInput, 'Имя должно содержать минимум 2 символа');
            isValid = false;
        }

        // Валидация сообщения
        if (!messageInput.value.trim()) {
            showError(messageInput, 'Пожалуйста, введите сообщение');
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            showError(messageInput, 'Сообщение должно содержать минимум 10 символов');
            isValid = false;
        }

        return isValid;
    }

    // Функция показа ошибки
    function showError(input, message) {
        input.classList.add('error');
        const errorDiv = input.parentNode.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.textContent = message;
        }
    }

    // Функция отправки формы
    function submitContactForm(form) {
        const formData = new FormData(form);

        // Показываем индикатор загрузки
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
        submitBtn.disabled = true;

        // Получаем CSRF токен
        const csrfToken = getCSRFToken();

        if (!csrfToken) {
            showToast('Ошибка', 'Ошибка безопасности. Пожалуйста, обновите страницу.', 'error');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            return;
        }

        // Отправляем AJAX запрос
        fetch('/contact/submit/', {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrfToken,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                showToast('Успешно!', data.message, 'success');
                form.reset();
            } else {
                showToast('Ошибка', data.message, 'error');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showToast('Ошибка', 'Произошла ошибка при отправке сообщения. Попробуйте еще раз.', 'error');
        })
        .finally(() => {
            // Восстанавливаем кнопку
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    }

    // Функция получения CSRF токена
    function getCSRFToken() {
        // Сначала пробуем найти в cookie
        const name = 'csrftoken';
        let cookieValue = null;

        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }

        // Если не нашли в cookie, пробуем найти в форме
        if (!cookieValue) {
            const csrfInput = document.querySelector('[name=csrfmiddlewaretoken]');
            if (csrfInput) {
                cookieValue = csrfInput.value;
            }
        }

        return cookieValue;
    }

    // Функция показа уведомления
    function showToast(title, description, type = 'success') {
        if (!toast) return;

        toastTitle.textContent = title;
        toastDescription.textContent = description;

        // Меняем цвет в зависимости от типа
        if (type === 'error') {
            toast.style.borderLeftColor = '#dc2626';
        } else {
            toast.style.borderLeftColor = '#10b981';
        }

        toast.classList.add('show');

        // Скрываем уведомление через 5 секунд
        setTimeout(() => {
            toast.classList.remove('show');
        }, 5000);
    }

    // Валидация в реальном времени
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');

    if (nameInput) {
        nameInput.addEventListener('blur', function() {
            if (this.value.trim() && this.value.trim().length < 2) {
                showError(this, 'Имя должно содержать минимум 2 символа');
            }
        });

        nameInput.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                this.classList.remove('error');
                const errorDiv = this.parentNode.querySelector('.error-message');
                if (errorDiv) {
                    errorDiv.textContent = '';
                }
            }
        });
    }

    if (messageInput) {
        messageInput.addEventListener('blur', function() {
            if (this.value.trim() && this.value.trim().length < 10) {
                showError(this, 'Сообщение должно содержать минимум 10 символов');
            }
        });

        messageInput.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                this.classList.remove('error');
                const errorDiv = this.parentNode.querySelector('.error-message');
                if (errorDiv) {
                    errorDiv.textContent = '';
                }
            }
        });
    }

    console.log('Contact form initialized');
});
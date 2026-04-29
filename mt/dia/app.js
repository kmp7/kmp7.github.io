   // Функция переключения темы с обновлением иконок (SVG)
        function toggleTheme() {
            const root = document.documentElement;
            const themeToggle = document.getElementById('themeToggle');
            
            if (root.getAttribute('data-theme') === 'dark') {
                root.removeAttribute('data-theme');
                // иконки переключаются через CSS, дополнительных действий не нужно
            } else {
                root.setAttribute('data-theme', 'dark');
            }
        }
        
        // Привязываем обработчик к новой кнопке
        const themeBtn = document.getElementById('themeToggle');
        if (themeBtn) {
            themeBtn.addEventListener('click', toggleTheme);
        }

        // Функции для работы с модальным окном
        const modal = document.getElementById('feedbackModal');

        function openModal() {
            modal.style.display = 'flex';
        }

        function closeModal() {
            modal.style.display = 'none';
        }

        // Закрытие модального окна при клике вне его
        window.onclick = function(event) {
            if (event.target === modal) {
                closeModal();
            }
        }

        // Обработка отправки формы
        function submitFeedback(event) {
            event.preventDefault();
            alert('Спасибо за ваш вывод!');
            closeModal();
        }

        // Запрет ввода с помощью мыши в текстовые поля (сохранение исходного поведения)
        document.querySelectorAll('input, textarea').forEach(element => {
            element.addEventListener('mousedown', function(e) {
                if (e.button === 0) {
                    e.preventDefault();
                }
            });
        });
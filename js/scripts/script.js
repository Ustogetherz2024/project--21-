/**
 * Основной скрипт сайта МаркетПро
 * 
 * @file script.js
 * @version 1.0.2
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Скрипт подключен и работает!');
    
    // 1. Кнопка скролла вверх
    const scrollButton = document.querySelector('.scroll-top');
    
    if (scrollButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollButton.classList.add('visible');
            } else {
                scrollButton.classList.remove('visible');
            }
        });

        scrollButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 2. Вывод заголовков курсов в консоль (для задания)
    const courseTitles = Array.from(document.querySelectorAll('.course-card__title'))
                            .map(title => title.textContent);
    
    console.log("Список курсов:");
    courseTitles.forEach((title, index) => {
        console.log(`${index + 1}. ${title}`);
    });

    // 3. Инициализация карусели отзывов
    const testimonialsSwiper = new Swiper('.testimonials .swiper', {
        loop: true, // Бесконечная прокрутка
        slidesPerView: 1, // Один слайд за раз
        spaceBetween: 20, // Отступ между слайдами
        pagination: {
            el: '.swiper-pagination', // Точки навигации
            clickable: true,
        },
    });
});
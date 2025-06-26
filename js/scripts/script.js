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

    const coursesListContainer =  document.querySelector('.courses__list');
    if (coursesListContainer) {
        const apiUrl = 'data.json';

        const courceItem = (img, title, description, rating, alt, button_text) => {
        const item = `
            <div class="courses__item course-card">
                    <img src="${img}" alt="${alt}" class="course-card__image">
                    <h3 class="course-card__title">${title}</h3>
                    <p class="course-card__description">${description}</p>
                    <span class="course-card__rating">${rating}</span>
                    <a href="#" class="course-card__link button button--secondary">${button_text}</a>
                </div>
        `

        return item
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Данные
            console.log(typeof (data)); // Тип полученных данных
            data.forEach(item => {
                const cource = courceItem(item.img, item.title, item.description, item.rating, item.alt, item.button_text);
                coursesListContainer.insertAdjacentHTML('beforeend', cource);
            });
        })  
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
        });
    }
});

// Preloader страницы
const preloader = document.querySelector('.preloader');
const content = document.querySelector('.content');
if (preloader && content) {
    setTimeout(() => {
        // Скрываем прелоадер
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';

        // Показываем контент
        content.style.display = 'block';

        // Удаляем элемент из DOM
        preloader.remove();
    }, 3000); // Задержка 3 секунды
}

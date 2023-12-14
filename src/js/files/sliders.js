// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Grid } from "swiper";

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";

// Ініціалізація слайдерів
function initSliders() {
    // Список слайдерів
    // Перевіряємо, чи є слайдер на сторінці
    if (document.querySelector(".promo__slider")) {
        // Вказуємо склас потрібного слайдера
        // Створюємо слайдер
        new Swiper(".promo__slider", {
            // Вказуємо склас потрібного слайдера
            // Підключаємо модулі слайдера
            // для конкретного випадку
            modules: [Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 20,
            autoHeight: true,
            speed: 800,
            // autoplay: {
            // 	delay: 3000,
            // 	disableOnInteraction: false,
            // },
            // Пагінація
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            // Події
            on: {},
        });
    }

    if (document.querySelector(".tournaments-timeline__slider")) {
        // Вказуємо склас потрібного слайдера
        // Створюємо слайдер
        new Swiper(".tournaments-timeline__slider", {
            // Вказуємо склас потрібного слайдера
            // Підключаємо модулі слайдера
            // для конкретного випадку
            modules: [Navigation, Pagination, Grid],
            observer: true,
            observeParents: true,
            slidesPerView: 8,
            // centeredSlides: true,
            spaceBetween: 10,
            // autoHeight: true,
            speed: 800,
            // initialSlide: 1,
            // touchRatio: 0,
            // simulateTouch: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            // Кнопки "вліво/вправо"
            navigation: {
                prevEl: ".tournaments-timeline__slider .swiper-button-prev",
                nextEl: ".tournaments-timeline__slider .swiper-button-next",
            },
            // Брейкпоінти
            breakpoints: {
                319: {
                    slidesPerView: 1.2,
                    spaceBetween: 16,
                    centeredSlides: true,
                    grid: {
                        fill: 'row',
                        rows: 2,
                    },
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                    centeredSlides: false,
                    grid: {
                        fill: 'row',
                        rows: 2,
                    },
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                    grid: {
                        fill: 'row',
                        rows: 2,
                    },
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1100: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                1300: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                },
                1600: {
                    slidesPerView: 7,
                    spaceBetween: 10,
                },
                1700: {
                    slidesPerView: 8,
                    spaceBetween: 10,
                },
            },
            // Події
            on: {},
        });
    }
}

window.addEventListener("load", function (e) {
    // Запуск ініціалізації слайдерів
    initSliders();
});

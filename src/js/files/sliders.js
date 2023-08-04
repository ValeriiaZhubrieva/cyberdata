// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";

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
            modules: [Pagination, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 20,
            autoHeight: true,
            speed: 800,
            autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
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
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,
            initialSlide: 1,
            touchRatio: 0,
            simulateTouch: false,
            // Кнопки "вліво/вправо"
            navigation: {
                prevEl: ".tournaments-timeline__slider .swiper-button-prev",
                nextEl: ".tournaments-timeline__slider .swiper-button-next",
            },
            // Брейкпоінти
            breakpoints: {
                1600: {
                    slidesPerView: 1.2,
                },
                1800: {
                    slidesPerView: 2,
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

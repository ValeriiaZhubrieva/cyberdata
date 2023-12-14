
// Підключення основного файлу стилів
import "../scss/style.scss";
// Функціонал 
import * as flsFunctions from "./files/functions.js";

/* Перевірка підтримки webp, додавання класу webp або no-webp для HTML */
/* (i) необхідно для коректного відображення webp із css */
flsFunctions.isWebp();
/* Модуль для роботи з меню (Бургер) */
flsFunctions.menuInit();
/*
Модуль "Спойлери"
*/
flsFunctions.spollers();
/*
Сніппет (HTML): tabs
*/
flsFunctions.tabs();
// Робота зі слайдером (Swiper)
import "./files/sliders.js";

/* Динамічний адаптив */
import "./libs/dynamic_adapt.js";

/* Підключаємо файли зі своїм кодом */
import "./files/script.js";

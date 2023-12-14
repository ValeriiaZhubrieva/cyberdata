// Підключення списку активних модулів
import { flsModules } from "./modules.js";

if (document.querySelector(".search-block")) {
    const searchBlock = document.querySelector(".search-block");
    const searchBlockInput = searchBlock.querySelector(".search-block__input");

    searchBlockInput.addEventListener("keyup", () => {
        if (searchBlockInput) {
            searchBlock.classList.add("active-search");
        }
    });
    searchBlockInput.addEventListener('focusout', () => {
        if (searchBlockInput) {
            searchBlock.classList.remove("active-search");
        }
    });
}

document.addEventListener('click', (e) => {
    const targetElement = e.target;

    if (targetElement.closest('.lang-block')) {
        document.querySelector('.lang-block').classList.toggle('active');
    }
    if (!targetElement.closest('.lang-block')) {
        document.querySelector('.lang-block').classList.remove('active');
    }
});

if (document.querySelector('.aside-filter__inner-near')) {
    const checkboxNear = document.getElementById('c_11');
    checkboxNear.addEventListener('change', ()=> {
        if (checkboxNear.checked) {
            document.querySelector('.aside-filter__inner-near').classList.add('active')
        } else {
            document.querySelector('.aside-filter__inner-near').classList.remove('active')
        }
    })
}
import * as flsFunctions from "./modules/function.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();


var first = swiper('.swiper-one', {
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    touchRatio: 2,
    grabCursor: true,
    slidesPerView: 1,
    watchOverflow: true,
    spaceBetween: 1000,
    // autoplay: {
    //     delay: 1000,
    //     stopOnLastSlide: true,
    //     disableOnInteraction: false,
    // },
    speed: 2000,
    freeMode: true, // можно скроллить как ленту без фиксации на блоке 
    centeredSlides: true,
});

var two = swiper('.swiper-two', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4,
    watchOverflow: true,
    grabCursor: true,
    spaceBetween: 30,
    speed: 2000,
    nested: true,
});


const list = document.querySelectorAll('.switch-language a')
list.forEach(item => {
    item.addEventListener('click', (e) => {
        list.forEach(el => { el.classList.remove('switch-language--active'); });
        item.classList.add('switch-language--active')
    })
})


let buttonAllCity = document.querySelector('.button__footer');
let allCity = document.querySelector('div .hidden');

buttonAllCity.addEventListener('click', function (e) {
    e.preventDefault();
    allCity.classList.toggle('hidden');
    buttonAllCity.classList.toggle('button__footer--rotate');
});

// all buttons for dropdown list
let allButton = document.querySelectorAll('.dropdown__container');

allButton.forEach(function (dropWrapper) {
    let dropButton = dropWrapper.querySelector('.dropdown__button');
    let dropList = dropWrapper.querySelector('.dropdown__list');
    let allDropItems = dropList.querySelectorAll('.dropdown__list--item');
    let inputDropdown = dropWrapper.querySelector('.dropdown__input--hidden');


    // click button : open/close dropdown list
    dropButton.addEventListener('click', function (e) {
        dropList.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
    });

    // list : choose item 
    allDropItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation(); // click not count by list items 
            dropButton.innerText = this.innerText;
            dropButton.focus();
            inputDropdown.value = this.dataset.value;
            dropList.classList.remove('dropdown__list--visible');
        });
    });

    // click outside the droplist
    document.addEventListener('click', function (e) {
        if (e.target !== dropButton) {
            dropButton.classList.remove('dropdown__button--active');
            dropList.classList.remove('dropdown__list--visible');
        };
    });


    // click tab or esc
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropButton.classList.remove('dropdown__button--active');
            dropList.classList.remove('dropdown__list--visible');
        }
    });

});
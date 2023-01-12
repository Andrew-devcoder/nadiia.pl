import * as flsFunctions from "./modules/function.js";

flsFunctions.isWebp();


// Swipers 
const first = new Swiper('.swiper-one', {
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    touchRatio: 2,
    grabCursor: true,
    slidesPerView: 1,
    watchOverflow: true,
    // spaceBetween: 100,
    // autoplay: {
    //     delay: 1000,
    //     stopOnLastSlide: true,
    //     disableOnInteraction: false,
    // },
    speed: 2000,
    freeMode: true,
    centeredSlides: true,
    // centerInsufficientSlides: true
    // centeredSlides: true
    // centeredSlidesBounds: true,
    // setWrapperSize: true,
});

// autoswap the slides "first"
let sliderBlock = document.querySelector('.swiper-one');

sliderBlock.addEventListener("mouseleave", (event) => {
    first.params.autoplay.disableOnInteraction = false;
    first.params.autoplay.delay = 500;
    first.autoplay.start();
});
sliderBlock.addEventListener("mouseenter", (event) => {
    first.autoplay.stop();
})


const two = new Swiper('.swiper-two', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4,
    watchOverflow: true,
    grabCursor: true,
    spaceBetween: 20,
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
        this.classList.toggle('dropdown__button--clicked');
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
            dropButton.classList.remove('dropdown__button--clicked');
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


// hover: change style buttons
// const allButtonBorder = document.querySelectorAll('.button__border')
// const allButtonBorderGrey = document.querySelectorAll('.button__border--grey')
// const allButtonFill = document.querySelectorAll('.button__fill')

// allButtonBorder.forEach(item => {
//     item.addEventListener('mouseover', (e) => {
//         item.classList.remove('button__border');
//         item.classList.add('button__fill');
//     })
//     item.addEventListener('mouseout', (e) => {
//         item.classList.remove('button__fill');
//         item.classList.add('button__border');
//     })
// });

// allButtonBorderGrey.forEach(item => {
//     item.addEventListener('mouseover', (e) => {
//         item.classList.remove('button__border');
//         item.classList.remove('button__border--grey');
//         item.classList.add('button__fill');
//     })
//     item.addEventListener('mouseout', (e) => {
//         item.classList.remove('button__fill');
//         item.classList.add('button__border--grey');
//         item.classList.add('button__border');
//     })
// });

// allButtonFill.forEach(item => {
//     item.addEventListener('mouseover', (e) => {
//         item.classList.remove('button__fill');
//         item.classList.add('button__border');
//     })
//     item.addEventListener('mouseout', (e) => {
//         item.classList.remove('button__border');
//         item.classList.add('button__fill');
//     })
// });


// burger 
let burgerButton = document.querySelector('.burger__button');
let burgerMenu = document.querySelector('.burger__menu');

burgerButton.addEventListener('click', function () {
    burgerMenu.classList.toggle('burger__menu--active');
});

let burgerSection = document.querySelector('.burger__section');
let subBurgerSection = document.querySelector('.sub-burger__section');
let burgerLink = document.querySelector('.burger__link');

burgerSection.addEventListener('click', function () {
    subBurgerSection.classList.toggle('sub-burger__section--active');
    burgerSection.classList.toggle('burger__section--active');
    burgerLink.classList.toggle('burger__link--active');
})


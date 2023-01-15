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
let burgerSection = document.querySelector('.burger__section');
let subBurgerSection = document.querySelector('.sub-burger__section');
let burgerLink = document.querySelector('.burger__link');

// input search 
let searchBox = document.querySelector('.search__box')
let searchText = document.querySelector('.search__text')

// sub-menu
let subBurgerLink = document.querySelector('.sub-burger__link');
let navLogoMob = document.querySelector('.nav__logo--mob');
let searchInput = document.querySelector('.search__box');
let burgerSubSection = document.querySelector('.burger__sub-section');
let burgerSubMenu = document.querySelector('.burger__sub-menu');

burgerButton.addEventListener('click', function () {
    burgerButton.classList.toggle('burger__button--active');

    if (burgerButton.classList.contains('burger__button--active') === true) {
        document.body.classList.add('__lock');
        burgerMenu.classList.add('burger__menu--active');
        searchBox.classList.add('search__box--active');
        searchBox.classList.add('search__box');
        searchBox.classList.remove('hidden');
        searchText.classList.add('search__text--active');
        burgerSection.classList.add('burger__section');
        burgerSection.classList.remove('hidden');
    } else {
        document.body.classList.remove('__lock');
        burgerMenu.classList.remove('burger__menu--active');
        searchBox.classList.remove('search__box--active');
        searchText.classList.remove('search__text--active');
        subBurgerSection.classList.remove('sub-burger__section--active');
        burgerLink.classList.remove('burger__link--active');
        burgerSubMenu.classList.remove('burger__sub-menu--active');
        navLogoMob.classList.add('nav__logo--mob');
        navLogoMob.classList.remove('hidden');
        burgerSubSection.classList.remove('burger__sub-section--active');
    }
});

// const sectionAll = document.querySelectorAll('.burger__section')
// sectionAll.forEach(item => {
//     item.addEventListener('click', () => {
//         sectionAll.forEach(element => { element.classList.remove('burger__link--active'); });
//         item.classList.add('burger__link--active');
//     })
// })

burgerSection.addEventListener('click', function () {
    subBurgerSection.classList.toggle('sub-burger__section--active');
    burgerSection.classList.toggle('burger__section--active');
    burgerLink.classList.toggle('burger__link--active');
});

// const list = document.querySelectorAll('.switch-language a')
// list.forEach(item => {
//     item.addEventListener('click', (e) => {
//         list.forEach(el => { el.classList.remove('switch-language--active'); });
//         item.classList.add('switch-language--active')
//     })
// })

subBurgerLink.addEventListener('click', function () {
    burgerSection.classList.remove('burger__section');
    burgerSection.classList.add('hidden');
    navLogoMob.classList.remove('nav__logo--mob');
    navLogoMob.classList.add('hidden');
    searchInput.classList.remove('search__box');
    searchInput.classList.remove('search__box--active');
    searchInput.classList.add('hidden');
    burgerSubSection.classList.add('burger__sub-section--active');
    burgerSubMenu.classList.add('burger__sub-menu--active');

});

burgerSubMenu.addEventListener('click', function () {
    burgerSubMenu.classList.add('hidden');
    burgerSubMenu.classList.remove('burger__sub-menu--active');
    burgerSection.classList.add('burger__section');
    burgerSection.classList.remove('hidden');
    navLogoMob.classList.add('nav__logo--mob');
    navLogoMob.classList.remove('hidden');
    searchInput.classList.add('search__box--active');
    searchInput.classList.add('search__box');
    searchInput.classList.remove('hidden');
    burgerSubSection.classList.remove('burger__sub-section--active');
})

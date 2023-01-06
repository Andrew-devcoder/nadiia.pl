export function isWebp() {

    function testWebP(callback) {

        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {

        // if (support == true) {
        //     document.querySelector('body').classList.add('webp');
        // } else {
        //     document.querySelector('body').classList.add('no-webp');
        // }

        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

export function swiperOne() {
    ('.swiper-one', {
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
}
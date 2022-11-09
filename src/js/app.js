import{openNav} from '../js/modules/site/home/navbar.js'; /* Execute */ openNav();
import{windowScroll} from '../js/modules/site/home/navbar.js'; /* Execute */ windowScroll();



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    },
});

var swiper = new Swiper(".artistSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

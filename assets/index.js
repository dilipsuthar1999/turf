const navbar_toggler = document.querySelector('.navbar-menu-button');
const collapse = document.querySelector('.navbar-menu-open');

navbar_toggler.addEventListener('click', () => {
    collapse.classList.toggle('hide');
});

var swiper = new Swiper(".slide-container-comment", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    autoplay: {
        delay: 2000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".slide-container-turf", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        580: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});



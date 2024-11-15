const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: false,
    speed: 400,
    slidesPerView: 1.48,
    spaceBetween: 24,
    effect: 'slide',
    centeredSlides: true,
    centeredSlidesBounds: true,

    breakpoints: {
        // when window width is >= 1440px
        1440: {
            direction: 'horizontal',
            loop: false,
            speed: 400,
            slidesPerView: 4,
            spaceBetween: 22,
            effect: 'slide',
        },

        // when window width is >= 1280px
        1280: {
            direction: 'horizontal',
            loop: false,
            speed: 400,
            slidesPerView: 3.02,
            spaceBetween: 22,
            effect: 'slide',
        },

        // when window width is >= 960px
        960: {
            direction: 'horizontal',
            loop: false,
            speed: 400,
            slidesPerView: 2.65,
            spaceBetween: 22,
            effect: 'slide',
        },

        // when window width is >= 768px
        768: {
            direction: 'horizontal',
            loop: false,
            speed: 400,
            slidesPerView: 2.75,
            spaceBetween: 22,
            effect: 'slide',
            centeredSlides: true,
            centeredSlidesBounds: true,
            centerInsufficientSlides: true,
        },

        // when window width is >= 540px
        540: {
            direction: 'horizontal',
            loop: false,
            speed: 400,
            slidesPerView: 4,
            spaceBetween: 22,
            effect: 'slide',
        },
    },

    navigation: {
        nextEl: '.button-next2',
        prevEl: '.button-prev2',
    },
})

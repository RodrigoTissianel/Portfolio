const swiper = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: false,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'slide',

    breakpoints: {
        // when window width is >= 1440px
        1440: {
            direction: 'horizontal',
            loop: false,
            speed: 400,
            slidesPerView: 3,
            spaceBetween: 0,
            effect: 'slide',
        },

        // when window width is >= 768px
        768: {
            direction: 'horizontal',
            loop: false,
            speed: 400,
            slidesPerView: 2,
            spaceBetween: 0,
            effect: 'slide',
        },

        // when window width is >= 540px
        540: {
            direction: 'horizontal',
            loop: false,
            speed: 400,
            slidesPerView: 3,
            spaceBetween: 0,
            effect: 'slide',
        },
    },

    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
})

// ===========================================
// =========== HEADER ANIMATIONS =============
// ===========================================
function scrollHeader() {
    const header = document.getElementById('header')

    if (this.scrollY >= 50) {
        header.classList.add('active-header')
        console.log('funcionou')
    } else {
        header.classList.remove('active-header')
    }
}

window.addEventListener('scroll', scrollHeader)

// ================================================
// =========== MOBILE MENU ANIMATIONS =============
// ================================================
const bx = document.getElementById('bx')
const menuMobile = document.getElementById('menu-mobile')
const linkMobile = document.querySelectorAll('.link-menu-mobile')
const bxBar = document.getElementById('bx-bar')

bx.addEventListener('click', () => {
    bx.classList.toggle('active')
    menuMobile.classList.toggle('showmenu')
    bxBar.classList.toggle('active')
})

linkMobile.forEach((item) => {
    item.addEventListener('click', () => {
        menuMobile.classList.remove('showmenu')
        bx.classList.toggle('active')
        bxBar.classList.toggle('active')
    })
})

// =========================================
// =========== GSAP ANIMATIONS =============
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    let tl = gsap.timeline()

    tl.fromTo(
        '.introduction',
        1,
        {
            opacity: 1,
            height: '100%',
        },
        {
            opacity: 0,
            height: '90%',
            delay: 5,
            ease: 'expo.Out',
        }
    )
        .to('.introduction', 0.1, {
            opacity: 0,
            height: '0%',
            delay: 0,
            ease: 'expo.Out',
        })
        .fromTo(
            '.logo',
            2,
            {
                y: 30,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                ease: 'expo.inOut',
                stagger: 0.3,
            },
            '-=1'
        )
        .fromTo(
            '.logo-text',
            2,
            {
                y: 30,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                ease: 'expo.inOut',
            },
            '-=1.5'
        )
        .fromTo(
            '.logo-subtext',
            2,
            {
                y: 30,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                ease: 'expo.inOut',
            },
            '-=1.5'
        )
        .fromTo(
            '.desktop-menu-link',
            2,
            {
                y: 30,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                ease: 'expo.inOut',
                stagger: 0.3,
            },
            '-=1'
        )
        .fromTo(
            '.circle-hero-1',
            2,
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                ease: 'expo.inOut',
            },
            '-=4'
        )
        .fromTo(
            '.circle-hero-2',
            2,
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                ease: 'expo.inOut',
            },
            '-=3'
        )
})

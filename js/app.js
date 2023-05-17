
// ===========================================================
// ================= HEADER GLASS EFFECT =====================
// ===========================================================

function scrollHeader(){
    const header = document.getElementById('header');

    if(this.scrollY >= 50) header.classList.add('header-active'); else header.classList.remove('header-active');
}

window.addEventListener('scroll', scrollHeader);




// ===========================================================
// =================== GSAP ANIMATIONS =======================
// ===========================================================

//========== Introduction and hero fade animations ==========//

document.addEventListener('DOMContentLoaded', ()=>{
    let tl = gsap.timeline();

    tl.fromTo('.introduction',1,
    {
        opacity: 1 ,
        height:'100%'
    }, {
        opacity: 0,
        height: '90%',
        delay: 5,
        ease: 'expo.Out'
    })
    .to('.introduction',.1,
    {
        opacity: 0,
        height: '0%',
        delay: 0,
        ease: 'expo.Out'
    })
    .fromTo('.nav-left-item', 2,{
        y: 30,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        ease: 'expo.inOut',
        stagger: .3,
    }, '-=1')
    .fromTo('.logo', 2,{
        y: 30,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        ease: 'expo.inOut',
    }, '-=1')
    .fromTo('.nav-right-item', 2,{
        y: 30,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        ease: 'expo.inOut',
        stagger: .3,
    }, '-=1')
    .fromTo('.greeting', 2,{
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        ease: 'expo.inOut',
    }, '-=4')
    .fromTo('.hero-svg', 2,{
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        ease: 'expo.inOut',
    }, '-=3')
})

gsap.registerPlugin(ScrollTrigger);


//========== Creating the matchMedia ==========//
let mm = gsap.matchMedia();

mm.add({
    isDesktop: "(min-width: 960px)",
    isTablet: "(max-width: 960px) and (min-width: 768px)",
    isMobile: "(max-width: 540px)",
}, 

(context)=>{
    let {isDesktop, isTablet, isMobile} = context.conditions;

    //========== Name animation ==========//
    gsap.to(".name",{
        x: isDesktop ? 100 : isTablet ? 100 : isMobile ? 50 : 0,
        duration: 2,
        scrollTrigger:{
        trigger: ".name",
        start: isDesktop ? "top 21%" : isTablet ? "top 16%": isMobile ? "top 16%" : 0,
        end: isDesktop ? "bottom 33%" : isTablet ? "bottom 20%": isMobile ? "bottom 20%" : 0,
        scrub: 3
        },
        
    });
    
    //========== Surname animation ==========//
    gsap.to(".surname",{
        x: isDesktop ? -100 : isTablet ? -100 : isMobile ? -50 : 0,
        scrollTrigger:{
        trigger: ".name",
        start: isDesktop ? "top 21%" : isTablet ? "top 16%": isMobile ? "top 16%" : 0,
        end: isDesktop ? "bottom 33%" : isTablet ? "bottom 20%": isMobile ? "bottom 33%" : 0,
        scrub: 3,
        },
        
    });
    
    //========== GSAP Timeline ==========//
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".expertise-container",
            start: "top 50%",
            end: "bottom 60%",
        }
    });

    tl.fromTo(".expertise-title",{
        y: 50,
        opacity: 0
    },{
        y: 0,
        opacity: 1,
        ease: "power4.Out",
        duration: 2,
    })
    .fromTo(".expertise-item",{
        x: 150,
        opacity: 0
    },{
        x: 0,
        opacity: 1,
        ease: "power4.Out",
        duration: 2,
        stagger: .5,
    }, '-=1')
    .fromTo(".exp-divider",{
        y: 150,
        opacity: 0
    },{
        y: 0,
        opacity: 1,
        ease: "power4.Out",
        duration: 2,
        stagger: 1,
    }, '-=3.2')
    .fromTo(".other-skills-title",{
        y: 50,
        opacity: 0
    },{
        y: 0,
        opacity: 1,
        ease: "power4.Out",
        duration: 2,
    }, '-=1.5')
    .fromTo(".other-skills-item",{
        x: 150,
        opacity: 0
    },{
        x: 0,
        opacity: 1,
        ease: "power4.Out",
        duration: 2,
        stagger: .5,
    }, '-=1')
    .fromTo(".os-divider",{
        y: 150,
        opacity: 0
    },{
        y: 0,
        opacity: 1,
        ease: "power4.Out",
        duration: 2,
        stagger: 1,
    }, '-=3.2');
    
    return()=>{
        gsap.to(".name",{
            x: 100,
            duration: 2,
            scrollTrigger:{
            trigger: ".name",
            start: "top 16%",
            end: "bottom 33%",
            scrub: 3,
            },
            
        });
        
        //========== Surname animation ==========//
        gsap.to(".surname",{
            x: -100,
            //duration: 10,
            scrollTrigger:{
            trigger: ".name",
            start: "top 16%",
            end: "bottom 33%",
            scrub: 3,
            },
            
        });
    }
}); //context

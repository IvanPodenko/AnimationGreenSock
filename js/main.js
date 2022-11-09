let openBurger = document.querySelector('.burger');
let closeBurger = document.querySelector('.close');


let tl = gsap.timeline({paused: true})
tl.fromTo(".menu", {visibility: "hidden", y: 100, opacity: 0},
                    {visibility: "visible", y: 0, opacity: 1, top:0, duration: 0.5, ease: "circ.out"});
tl.from(".menu__top", {opacity: 0, y: -50, duration: 0.5, ease: "circ.out"});
tl.from(".nav__list", {opacity: 0, y: 25, duration: 0.5, ease: "circ.out"});
tl.from(".social, .menu__right, .sub-menu", {y: 25, opacity: 0, duration: 0.5, ease: "circ.out"});


openBurger.addEventListener("click", function () {
    tl.play()
});
closeBurger.addEventListener("click", function(){
    tl.reverse()
});


gsap.from (".hero__title", {y:60, duration:1.5,ease:"circ.out"});
gsap.from(".hero__descr", {opacity: 0, delay: 0.7, duration: 2.5,});
gsap.from (".hero__btn", {y:60,  duration:1.5, ease:"circ.out"});
gsap.from ("#photo-1", {opacity: 0, delay: 0.9, duration:2});
gsap.from ("#photo-2", {opacity: 0, delay: 1.3, duration:2});
gsap.from ("#photo-3", {opacity: 0, delay: 1.8, duration:2});
gsap.from (".photos__author", {opacity: 0, delay: 1.9, duration:2,ease:"circ.out"});

// мне больше нравиться вот так
// gsap.from (".hero__title", {y:60, duration:1.5,ease:"circ.out"});
// gsap.from (".hero__descr", {y:60, opasity:0, scale:0,  duration:1.5,});
// gsap.from (".hero__btn", {y:60,  duration:1.5, ease:"circ.out"});
// gsap.from ("#photo-1", {opacity: 0, delay: 0.9, rotation:380, ease: "bounce.out", duration:2});
// gsap.from ("#photo-2", {opacity: 0, delay: 1.3, rotation:560, duration:2, ease: "bounce.out"});
// gsap.from ("#photo-3", {opacity: 0, delay: 1.8, rotation:740, duration:2, ease: "bounce.out"});


// scale: увеличение
// delay: задержка
// duration: продолжительность
// opasity: прозрачность
// rotation: вращение
// ease: плавность





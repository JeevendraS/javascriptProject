const tl = gsap.timeline();
tl.from("#logo, li, #a4, #a5",{
    y:-100,
    delay:0.1,
    duration:1,
    opacity:0,
    stagger:0.3

})
tl.from("#page h1",{
    y:70,
    opacity:0,
    duration:1,
    stagger:0.4
},0.6)
tl.from("#left, #right",{
    scale:0,
    opacity:0,
    duration:1.3,
    stagger:1,
    // repeat:-1,
},0.6)
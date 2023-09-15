const tl = gsap.timeline()
tl.from("nav",{
    opacity:0,
    duration:1.5,
    delay:0.5
},0)
tl.from("#logo, #middle ul li, #last ",{
    y:-100,
    duration:1,
    delay:0.7,
    opacity:0,
    stagger:0.3
},0)
tl.from("#right",{
    scale:0,
    opacity:0,
    duration:2
},1)
tl.from("#left h1",{
    x:-200,
    stagger:0.5,
    opacity:0,
    delay:0.5
},1)
gsap.from("#page2 .box",{
    y:-100,
    opacity:0,
    scale:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        // markers:true,
        start:"top 55%"
    }
})
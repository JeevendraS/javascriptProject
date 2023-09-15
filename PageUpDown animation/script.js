
// gsap.to("#page1 h1",{
//     transform:"translate(-100%)",
//     // fontWeight:"400",
//     color:"red",
//     scrollTrigger:{
//         trigger:"#page1",
//         scroll:"body",
//         start:"top -2%",
//         end:"top -200%",
//         scrub:3,
//         markers:true,
//         pin:true,

//     }
// })

const tl = gsap.timeline()
tl.to("#blackplate h1",{
    y:-100,
    opacity:0,
    duration:1,
    delay:1,
    color:"rgb(127,255,512)",
})
// tl.to("#blackplate",{
//     height:0,
//     duration:2,
//     delay:-1,
//     ease: Expo.easeInOut
// })
tl.to("#greenplate",{
    height:"100%",
    duration:2,
    delay:-1,
    ease: Expo.easeInOut,
})
tl.to("#whiteplate",{
    height:"100%",
    duration:1.4,
    delay:-1,
    ease: Expo.easeInOut,
    repeat:3,
    yoyo:true
})
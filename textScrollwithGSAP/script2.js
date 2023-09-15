function timer(){
    a = Math.floor(Math.random()*10)
    let b = setInterval(() => {
        if(a<90){
            a = a+13
            document.querySelector("#loader h1").textContent = a+"%"
            console.log(a)
        }else{
            a = 100
            clearInterval(b)
            document.querySelector("#loader h1").textContent = a+"%"
            console.log(a)
        }
    }, 250);
}
const tl = gsap.timeline()
tl.to("#loader h1",{
    delay:0.5,
    duration:1,
    onStart:timer()
})
tl.to("#loader",{
    y:"-100vh",
    duration:1.3,
    ease: Expo.easeInOut
})
gsap.to("#page1 h1",{
    transform:"translate(-100%)",
    scrollTrigger:{
        trigger:"#page1",
        scroll:"body",
        start:"top 95%",
        end:"top 50%",
        scrub:2,
        markers:true,
        pin:true
    }
})

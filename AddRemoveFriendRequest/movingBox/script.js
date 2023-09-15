
document.addEventListener('mousemove',(e)=>{
    let r = Math.floor(gsap.utils.mapRange(0,window.innerWidth,175,window.innerWidth-175,e.clientX))
    gsap.to('#box',{
        left: r +'px',
        borderRadius:50,
    })
})
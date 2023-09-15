let box = document.querySelector('#box')
box.addEventListener('mousemove',(e)=>{
    let boxfromleft = e.clientX-box.getBoundingClientRect().left
    let center = box.clientWidth/2
    if(boxfromleft<center){
        let left = Math.floor(gsap.utils.mapRange(0,300,255,0,`${boxfromleft}`))
        gsap.to('#box',{
            backgroundColor:`rgb(${left}, 0, 0)`
        })
    }else{
        let right = Math.floor(gsap.utils.mapRange(300,603,0,255,`${boxfromleft}`))
        gsap.to('#box',{
            backgroundColor:`rgb(0, 0, ${right})`
        })
    }
})
box.addEventListener('mouseout',(e)=>{
    gsap.to('#box',{
        backgroundColor:'white'
    })
})
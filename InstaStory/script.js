let arr = [
    {
        src: './photos/jeevedra 3354.jpg',
        det: 'lado'
    },
    {
        src: './photos/jeevedra 3355.jpg',
        det: 'lado'
    },
    {
        src: './photos/jeevedra 3356.jpg',
        det: 'lado'
    },
    {
        src: './photos/jeevedra 3357.jpg',
        det: 'lado'
    },
    {
        src: './photos/jeevedra 3358.jpg',
        det: 'lado'
    },
    {
        src: './photos/jeevedra 3359.jpg',
        det: 'lado'
    },
    {
        src: 'https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=400',
        det: 'men model'
    },
    {
        src: 'https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg?auto=compress&cs=tinysrgb&w=400',
        det: 'men model'
    },
    {
        src: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=400',
        det: 'men in white t-shirt black background'
    },
    {
        src: 'https://images.pexels.com/photos/18178836/pexels-photo-18178836/free-photo-of-man-walking-in-white-shirt-and-black-pants.jpeg?auto=compress&cs=tinysrgb&w=400',
        det: 'men with white shirt and gray pants '
    },
    {
        src: 'https://images.pexels.com/photos/17887967/pexels-photo-17887967/free-photo-of-man-in-white-dyed-hair-sitting-on-floor.jpeg?auto=compress&cs=tinysrgb&w=400',
        det: 'men with styligh hair color and nice background'
    },
    {
        src: 'https://images.pexels.com/photos/935789/pexels-photo-935789.jpeg?auto=compress&cs=tinysrgb&w=400',
        det: 'men surprises his girlfriend with flowers'
    },
    {
        src: 'https://images.pexels.com/photos/5325599/pexels-photo-5325599.jpeg?auto=compress&cs=tinysrgb&w=400',
        det: 'girls in group photoshoot'
    },
    {
        src: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=400',
        det: 'men with sexy beard'
    },
    {
        src: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
        det: 'smiling indian boy'
    },
    {
        src: 'https://images.pexels.com/photos/18160175/pexels-photo-18160175/free-photo-of-blonde-model-in-black-blouse.jpeg?auto=compress&cs=tinysrgb&w=400',
        det: 'girl looking very adorble'
    },
]
let header = document.querySelector('#header');
arr.forEach((details,idx) => {
    header.innerHTML += `<div class="story"><img id="${idx}" src="${details.src}" alt="${details.det}"></div>`
})
header.addEventListener('click',(e)=>{
    // console.log(e.target.id)
    document.querySelector('.full-screen').style.display = 'block'  
    document.querySelector('.full-screen').style.backgroundImage = `url(${e.target.src})`

    setTimeout(()=>{
        document.querySelector('.full-screen').style.display = 'none'
    },3000)
}
)

const throttleFunction=(func, delay)=>{
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if(now - prev> delay){
      prev = now;
      return func(...args); 
    }
  }
}

let imgsrc = [
  {src: 'https://images.pexels.com/photos/1620782/pexels-photo-1620782.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {src: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=400'},
  {src: 'https://images.pexels.com/photos/6941849/pexels-photo-6941849.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {src: 'https://images.pexels.com/photos/1838862/pexels-photo-1838862.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {src: 'https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {src: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {src: 'https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {src: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {src: 'https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {src: 'https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {src: 'https://images.pexels.com/photos/725458/pexels-photo-725458.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {src: 'https://images.pexels.com/photos/1139613/pexels-photo-1139613.jpeg?auto=compress&cs=tinysrgb&w=400'},
]

document.querySelector('#box')
.addEventListener('mousemove',throttleFunction((details)=>{
    let div = document.createElement('div')
    div.classList.add('imagediv')
    document.body.appendChild(div)
    div.style.left = details.clientX + 'px'
    div.style.top = details.clientY + 'px'
    let randomValue = Math.floor(Math.random()*12)
    
    let img = document.createElement('img')
    img.setAttribute('src',`${imgsrc[randomValue].src}`)
    img.classList.add('img')
    div.appendChild(img)
    // console.log(randomValue)
    setTimeout(() => {
        div.remove()
    }, 1500);

}, 200))


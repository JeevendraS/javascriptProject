let h = document.getElementById("hour")
let mi = document.getElementById("min")
let s = document.getElementById("sec")

setInterval(() => {
    const m = new Date()
    const hour = m.getHours()
    const min = m.getMinutes()
    const sec = m.getSeconds()
    const hdeg = (30*hour+min/2)
    const mdeg = (min*6)
    const sdeg = (sec*6)
    h.style.transform = `rotate(${hdeg}deg)`
    mi.style.transform = `rotate(${mdeg}deg)`
    s.style.transform = `rotate(${sdeg}deg)`
}, 1000);
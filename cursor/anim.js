const cursor = document.querySelector('div')
const pointer = document.querySelector('#point')
let changeY, changeX, angle, degrees = 0

setInterval(function(){
    document.body.style.background = `#${Math.floor(Math.random()*0xffffff).toString(16)}`
}, 1000)


addEventListener('mousemove', e => {
    changeX = (window.innerWidth/2)-e.clientX
    changeY = (window.innerHeight/2)-e.clientY
    console.log(changeX, changeY);
    angle = Math.tanh(changeY/changeX)
    degrees = Math.floor((parseFloat(angle)*180)/3.14)
    if (`${changeX}`[0] == '-') {degrees += 180}
    pointer.style.transform = `rotate(${degrees-180}deg)`
    
    cursor.style.top = `${e.clientY}px`
    cursor.style.left = `${e.clientX}px`
})



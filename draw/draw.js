const cvs = document.querySelector('canvas')
const ctx = cvs.getContext('2d')
const settings = [...document.querySelectorAll('input')]
const text = document.querySelector('span')


// setInterval(function(){
//     color = `#${Math.floor(Math.random()*0xffffff).toString(16)}`
// }, 1000)

let click = false
let color = '#000'
let size = 10

cvs.style.background = "#E3F09B"
cvs.width = window.innerWidth
cvs.height = window.innerHeight


class Circle {
    constructor(xpos, ypos, radius, color) {
      this.x = xpos
      this.y = ypos
      this.r = radius
      this.c = color
      this.root = ctx
    }
  
    draw(ctx) {
      ctx.beginPath()
      ctx.fillStyle = this.c
      ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false)
      ctx.fill()
    }
}



addEventListener('mousedown', () => {click = true})
addEventListener('mouseup', () => {click = false})

settings[0].addEventListener('input', e => {
    color = e.target.value
})
settings[1].addEventListener('input', e => {
    size = e.target.value
    text.textContent = size
})
settings[2].addEventListener('click', e => {
    ctx.clearRect(0, 0, cvs.width, cvs.height)
})

addEventListener('mousemove', e => {
    let tree = new Circle(e.clientX, e.clientY, size, color)
    // console.log(click);
    if (click) {
        tree.draw(ctx)
    }
})
const section = document.querySelector('section')
const Xaxis = section.querySelector('#X-axis')
const Yaxis = section.querySelector('#Y-axis')
const ball = section.querySelector('#ball')
const text = section.querySelector('#text')

addEventListener('click', e => {
    Xaxis.style.top = `${e.y}px`
    Yaxis.style.left = `${e.x}px`
    
    ball.style.top = `${e.y}px`
    ball.style.left = `${e.x}px`

    text.style.top = `${e.y}px`
    text.style.left = `${e.x}px`
    text.textContent = `(${e.y}, ${e.x})`
})

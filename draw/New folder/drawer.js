const cvs = document.getElementById('canvas')
const ctx = cvs.getContext('2d')
addEventListener('resize', on, false)
addEventListener('load', on, false)

function on() {
    cvs.width = window.innerWidth
    cvs.height = window.innerHeight
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, cvs.width, cvs.height)
}
let draw_color = 'black'
let draw_width = '5'
let is_drawing = false

let restore_array = []
let index = -1

cvs.addEventListener('touchstart', start, false)
cvs.addEventListener('touchmove', draw, false)
cvs.addEventListener('mousedown', start, false)
cvs.addEventListener('mousemove', draw, false)

cvs.addEventListener('touchend', stop, false)
cvs.addEventListener('mouseup', stop, false)
cvs.addEventListener('mouseout', stop, false)


function start(e) {
    is_drawing = true
    ctx.beginPath()
    ctx.moveTo(
        e.clientX - cvs.offsetLeft,
        e.clientY - cvs.offsetTop,
    )
    e.preventDefault()
}

function draw(e) {
    if (is_drawing) {
        ctx.lineTo(
            e.clientX - cvs.offsetLeft,
            e.clientY - cvs.offsetTop,
        )
        ctx.strokeStyle = draw_color
        ctx.lineWidth = draw_width
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.stroke()
    }
}

function stop(e) {
    if (is_drawing) {
        ctx.stroke()
        ctx.closePath()
        is_drawing = false
    }
    e.preventDefault()

    if (e.type != 'mouseout') {
        restore_array.push(ctx.getImageData(0, 0, cvs.width, cvs.height))
        index += 1
    }
}

function clear_canvas() {
    ctx.fillStyle = 'white'
    ctx.clearRect(0, 0, cvs.width, cvs.height)
    ctx.fillRect(0, 0, cvs.width, cvs.height)
    restore_array = []
    index = -1
}

function undo_last() {
    if (index <= 0) {
        clear_canvas()
    } else {
        index -= 1
        restore_array.pop()
        ctx.putImageData(restore_array[index], 0, 0)
    }
}
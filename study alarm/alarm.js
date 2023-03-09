// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Selectors ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\

const time = document.querySelector('#time')
const button = document.querySelectorAll('button')
console.log("🚀 ~ file: alarm.js ~ line 3 ~ button", button)
const video = document.querySelector('video')
const model = document.querySelector('#model')
const interval = setInterval(timeCount, 1000);
let timeSwitch = false, min = 0, sec = 0, position = 1

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\

function timeCount() {
    if (sec >= 59) {sec = 0; min += 1}
    if (min == model.value) {timeSwitch = false; video.play()}
    if (timeSwitch) {sec++}
    time.innerHTML = `${zero(min)} : ${zero(sec)}`
}
function reset() { min = 0; sec = 0 }
function zero(num) {
    if (num.toString().length === 1) {return `0${num}`}
    if (num.toString().length === 2) {return `${num}`}
}
function changeFocus(change) {
    position += change
    if (position > button.length) {position = 1}    
    if (position < 1) {position = button.length}
    shiftFocus(position)
}
function shiftFocus(position) {
    button.forEach(focuser => {focuser.className = ''});
    button[position - 1].classList.add('focused')
    console.log(button)
}
function enterFocus(position) {button[position - 1].click()}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Events ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\

model.addEventListener('input', () => {timeSwitch = true})
button[1].addEventListener('click', () => {timeSwitch = false})
button[2].addEventListener('click', () => {reset()})
button[3].addEventListener('click', () => {video.pause()})

window.addEventListener('keydown', pressed => {
    if (pressed.keyCode === 37 || pressed.keyCode === 40) {changeFocus(-1)}
    if (pressed.keyCode === 39 || pressed.keyCode === 38) {changeFocus(1)}
    if (pressed.key === "Enter") {enterFocus(position)}
    if (pressed.key === 'End') {model.focus()}
})
model.foc
button[0].addEventListener('click', () => {
    if (button[0].parentElement.classList[0] === 'big') {
        button[0].parentElement.classList.remove('big')
        button[0].parentElement.classList.add('small')
        return
    }
    if (button[0].parentElement.classList[0] === 'small') {
        button[0].parentElement.classList.remove('small')
        button[0].parentElement.classList.add('big')
    }
})
const ranges = [...document.querySelectorAll('input[type=range]')]
const texts = [...document.querySelectorAll('.color p')]
const hexText = document.querySelector('.hex')
let colors = [0,0,0]
let hex = ['#','','','']

for (let i = 0; i < ranges.length; i++) { 
    ranges[i].addEventListener('input', e => {
        colors[i] = parseInt(e.target.value)
        document.body.style.background = `rgb(${colors.join(',')})`
        texts[i].textContent = colors[i]
        hex[i+1] = base(colors[i], 16)
        hexText.textContent = hex.join('')
        console.log(hex);
    })
}

function base(number, base) {
    let char = '0123456789abcdefghijklmnopqrstuvwxyz'
    let rem = []
    num = number
    while (num) {
        rem.unshift(char[num%base])
        num = Math.trunc(num/base)
    }
    return rem.join('')
}

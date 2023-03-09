const keys = [...document.querySelectorAll('.key')]
const positions = [...document.querySelectorAll('.position')]
let freeWaysArray = null
whoPlayed('red', keys)
ready()
function ready() {
    const levels = [3, 2, 1, 'Go!']
    const startInputs = [...document.querySelectorAll('div#head p')]
    const startButton = document.querySelector('#start')
    let ready1 = false, ready2 = false, index = 0

    startButton.addEventListener('click', clicked => {
        const flipInputs = document.querySelectorAll('#names dir.flip')
        const playersName = document.querySelectorAll('#names dir.flip input')

        if (playersName[0].value.trim() !== playersName[1].value.trim() && ready !== 2) {
            if (playersName[0].value.trim().length > 2) {
                if (clicked.target.id === 'start') {
                    startInputs[0].textContent = playersName[0].value.trim()
                    flipInputs[0].classList.add('ready')
                    ready1 = true
                }
            }
            if (playersName[1].value.trim().length > 2) {
                if (clicked.target.id === 'start') {
                    startInputs[1].textContent = playersName[1].value.trim()
                    flipInputs[1].classList.add('ready')
                    ready2 = true
                }
            }
            if (ready1 && ready2) {
                const interval = setInterval(levelDisplay, 1000);
                function levelDisplay() {
                    if (index == 3) {
                        clearInterval(interval)
                        openGame() 
                    }
                    startButton.innerHTML = levels[index]
                    startInputs[0].focus()
                    index++ 
                }
            }
            
        }
        
    })

}

// window.addEventListener('keyup', pause => {
//     if (pause.key === ' ') {pauseGame()}
// })

function pauseGame() {
    const names = document.querySelector('#names')
    const inputs = [...document.querySelectorAll('#names dir.flip')]
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].classList.contains('ready')) {
            inputs[i].className = 'flip'
            inputs[i].classList.contains('ready')
            inputs[i].setAttribute('value', 'flip')
        }
        console.log(inputs[0].className)
    }
    names.classList.remove('open')
}
function openGame() {
    const names = document.querySelector('#names')
    names.classList.add('open')
}

keys.forEach(key => {
    key.addEventListener('dragstart', e => {
        e.target.classList.add('dragging')
        let index = parseInt(e.target.parentNode.id)
        freeWaysArray = freeWays(availableWays(index), closedWays(positions))
        displayFreeWays(freeWaysArray, positions)
    })
    key.addEventListener('dragend', e => {
        if (e.target.classList.contains('dragging')) {
            let played = document.querySelector('.dragging').classList[0]
            whoPlayed(played, keys)
            e.target.classList.remove('dragging')
        }
        // dragLimitation(positions)
        gameOver(keys)
    })
    key.addEventListener('mouseover', e => {
        let index = parseInt(e.target.parentNode.id)
        freeWaysArray = freeWays(availableWays(index), closedWays(positions))
        displayFreeWays(freeWaysArray, positions)
    })
    key.addEventListener('mouseleave', e => {
        dismissFreeWays(positions)
        // dragLimitation(positions)
    })
    key.addEventListener('drop', e => {
        dismissFreeWays(positions)
        // dragLimitation(positions)
    })
});
positions.forEach(position => {
    position.addEventListener('dragover', e => {
        e.preventDefault()
        let index = parseInt(position.id)
        drop(index, position)
        // dragLimitation(positions)
    })
    position.addEventListener('drop', e => {
        dismissFreeWays(positions)
        // dragLimitation(positions)
    })
});

function availableWays(index) {
    let available = []
    if (index === 0) {
        available = [
            1, 2, 3, 4, 5, 6,
            7, 8, 9, 10, 11, 12,
            13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24
        ]
    }
    if (index === 1) { available = [index + 1, 9 - index, 9] }
    if (index >= 2 && index <= 7) { available = [index - 1, index + 1, 9] }
    if (index === 8) { available = [index - 1, 9 - index, 9] }
    if (index === 9) { available = [1, 2, 3, 4, 5, 6, 7, 8] }
    return available;
}

function closedWays(positions) {
    let closed = []
    for (let i = 0; i < positions.length; i++) {
        if (positions[i].childElementCount === 1) {closed.push(i+1)}
    }
    return closed;
}

function freeWays(available, closed) {
    let ways = []
    for (let i = 0; i < available.length; i++) {
        if (closed.indexOf(available[i]) === -1) { ways.push(available[i]) }
    }
    return ways;
}

function displayFreeWays(ways, positions) {
    dismissFreeWays(positions)
    for (let i = 0; i < ways.length; i++) {
        positions[ways[i]-1].classList.add('open')
    }
}

function dismissFreeWays(positions) {
    for (let i = 0; i < positions.length; i++) {
        positions[i].classList.remove('open')
    }
}

function drop(index, position) {
    if (position.childElementCount !== 1) {
        if (freeWaysArray.indexOf(index) !== -1) {
            const transported = document.querySelector('.dragging')
            position.appendChild(transported)
        }
    }
}

function dragLimitation(positions) {
    let bugSwitch = closedWays(positions)
    for (let i = 0; i < positions.length; i++) {
        if (positions[i].classList.contains('off')) {
            positions[i].classList.remove('off')
        }
    }
    if (bugSwitch.length !== 6) {
        for (let i = 0; i < bugSwitch.length; i++) {
            positions[bugSwitch[i]-1].classList.add('off')
        }
    }
}

function whoPlayed(played, keys) {
    const donnePlaying = document.querySelectorAll(`div.key.${played}`)
    const youPlay = document.querySelector(`#youPlay`).children[0]
    if (played === 'red') {youPlay.classList.replace('red', 'blue')}
    if (played === 'blue') {youPlay.classList.replace('blue', 'red')}
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].classList.contains('off')) {
            keys[i].classList.remove('off')
        }
    }
    donnePlaying.forEach(key => {
        key.classList.add('off')
    });
}

function gameOver(keys) {
    const redKeys = [...document.querySelectorAll('.key.red')]
    const blueKeys = [...document.querySelectorAll('.key.blue')]
    const winnerName = [...document.querySelectorAll('div#head p')]
    let points = ['123', '345', '567', '159', '178', '269', '379', '489']
    let redOrder = '', blueOrder = ''
    for (let i = 0; i < redKeys.length; i++) {redOrder += (redKeys[i].parentNode.id)}
    for (let i = 0; i < blueKeys.length; i++) {blueOrder += (blueKeys[i].parentNode.id)}
    if (points.indexOf(redOrder) !== -1) {alert(winnerName[1].textContent + ' Wines')}
    if (points.indexOf(blueOrder) !== -1) {alert(winnerName[0].textContent + ' Wines')}
}

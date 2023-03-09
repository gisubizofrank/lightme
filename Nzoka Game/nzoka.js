
const cvs1 = document.querySelector('canvas#head')
const painters = document.querySelectorAll('input[type=color]')
const ctx1 = cvs1.getContext('2d')
function waitForOpen() {
    const anim = setInterval(draw1, 40);
};
let snakeEntered = false
let snakePoused = true
let waitForSnake_1 = false
let waitForSnake__2 = false
let snakeColor_1 = '#008000'
let snakeColor__2 = '#ffa500'

cvs1.width = window.innerWidth
cvs1.height = window.innerHeight
const cell = 20
const centerX = (cvs1.width / 2) - 10
const centerY = (cvs1.height / 2)
const playersScore = [...document.querySelectorAll('#person p')]
const startInputs = [...document.querySelectorAll('#person h2')]

conner1 = 0
demo1pos = { x: centerX, y: cell * 3 }
demo2pos = { x: centerX, y: cell * 3 }

ctx1.fillStyle = '#f4f4f4'
ctx1.font = '50px arial'
ctx1.fillText('Nzoka Game', centerX - cell * 7, cell * 3)
addEventListener('keyup', e => { pouseGame(e) })

painters.forEach(painter => {
	painter.addEventListener('input', e => {
			const borderCovers = document.querySelectorAll('#names > div[id]')
		if(e.target.id === 'color1') {
			snakeColor_1 = e.target.value
			borderCovers[0].style.borderRightColor = e.target.value
			console.log(borderCovers[0].style)
		} else {
			snakeColor__2 = e.target.value
			borderCovers[1].style.borderLeftColor = e.target.value
		}
	})
})

function pouseGame(pressed) {
    if (pressed.key === ' ' && snakePoused === true) { snakePoused = false; return }
    if (pressed.key === ' ' && snakePoused === false) { snakePoused = true }
}

function demo1() {
    ctx1.fillStyle = snakeColor_1
    ctx1.fillRect(demo1pos.x, demo1pos.y, cell, cell)
    // ctx1.strokeRect(demo1pos.x, demo1pos.y, cell, cell)
}

function demo2() {
    ctx1.fillStyle = snakeColor__2
    ctx1.fillRect(demo2pos.x, demo2pos.y, cell, cell)
    // ctx1.strokeRect(demo2pos.x, demo2pos.y, cell, cell)
}

function draw1() {
    if (conner1 < 9 || conner1 > 11 && conner1 < 34) { demo1pos.x += cell, demo2pos.x -= cell }
    if (conner1 > 8 && conner1 < 11) { demo1pos.y -= cell, demo2pos.y -= cell }
    if (conner1 > 34 && conner1 < 53) { demo1pos.y += cell, demo2pos.y += cell }
    if (conner1 > 53 && conner1 < 56) { demo1pos.x -= cell, demo2pos.x += cell }
    if (conner1 == 57) { snakeEntered = true }
    demo1()
    demo2()
    conner1++
}

ready()
function ready() {
    const levels = [3, 2, 1, 'Go!']
    const startButton = document.querySelector('#start')
    let ready1 = false, ready2 = false, index = 0

    window.addEventListener('keyup', pressed => {
        const flipInputs = document.querySelectorAll('#names dir.flip')
        const playersName = document.querySelectorAll('#names dir.flip input')
        if (playersName[0].value.trim() !== playersName[1].value.trim() && ready !== 2) {
            if (playersName[0].value.trim().length > 2) {
                if (pressed.key === 'CapsLock') {
                    startInputs[0].textContent = playersName[0].value.trim()
                    flipInputs[0].classList.add('ready')
                    ready1 = true
                }
            }
            if (playersName[1].value.trim().length > 2) {
                if (pressed.key === 'Enter') {
                    startInputs[1].textContent = playersName[1].value.trim()
                    flipInputs[1].classList.add('ready')
                    ready2 = true
                }
            }
            if (ready1 && ready2) {
                const interval = setInterval(levelDisplay, 1000);
                startButton.focus()
                openFullScreen()
                function levelDisplay() {
                    if (index == 3) {
                        openGame()
                    }
                    if (index == 5) {
                        clearInterval(interval)
                        waitForOpen()
                    }
                    startButton.innerHTML = levels[index]
                    index++
                }
            }
        }
    })

}
function openGame() {
    const names = document.querySelector('#names')
    names.classList.add('open')
}

function openFullScreen() {
    let screenIcon = document.querySelector('#screen')
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

window.onload = function () {
    const cvs = document.querySelector('canvas#body')
    const ctx = cvs.getContext('2d')
    const box = 20
    let direction_1 = 'Left'
    let direction__2 = 'Right'
    let game = setInterval(draw, 1000 / 15)
    let score_1 = 0
    let score__2 = 0
    let newHead_1, newHead__2
    let snake_1 = [
        { x: -4 * box, y: 14 * box },
        { x: -3 * box, y: 14 * box },
        { x: -2 * box, y: 14 * box }
    ]
    let snake__2 = [
        { x: -4 * box, y: 14 * box },
        { x: -3 * box, y: 14 * box },
        { x: -2 * box, y: 14 * box }
    ]

    cvs.width = 1200
    cvs.height = 600
    // cvs.width = window.innerWidth/2
    // cvs.height = window.innerHeight/2
    // cvs.style.background = '#333'
    let rows = (cvs.width - box) / box
    let columns = (cvs.height - box) / box
    let food = { x: centerX, y: centerY }
    randomFood()
    window.addEventListener('keydown', directionKey_1)
    window.addEventListener('keydown', directionKey__2)

    function snakeLoop_1() {
        for (let i = 0; i < snake_1.length; i++) {
            ctx.fillStyle = (i == 0) ? 'black' : snakeColor_1
            ctx.fillRect(snake_1[i].x, snake_1[i].y, box, box)
            ctx.strokeStyle = (i == 0) ? snakeColor_1 : 'rgba(0, 0, 0, 0)'
            ctx.strokeRect(snake_1[i].x, snake_1[i].y, box, box)
        }
    }
    function snakeLoop__2() {
        for (let i = 0; i < snake__2.length; i++) {
            ctx.fillStyle = (i == 0) ? 'black' : snakeColor__2
            ctx.fillRect(snake__2[i].x, snake__2[i].y, box, box)
            ctx.strokeStyle = (i == 0) ? snakeColor__2 : 'rgba(0, 0, 0, 0)'
            ctx.strokeRect(snake__2[i].x, snake__2[i].y, box, box)
        }
    }
    function foodPosition() {
        ctx.fillStyle = '#777'
        ctx.fillRect(food.x, food.y, box, box)
    }
    function randomFood() {
        let thisX = Math.floor(Math.random() * rows - 2) * box,
            thisY = Math.floor(Math.random() * columns - 2) * box
        let i = 0
        while (i < 1) {
            if (thisX > 0 && thisY > 0) {
                i++
            } else {
                thisX = Math.floor(Math.random() * rows - 2) * box
                thisY = Math.floor(Math.random() * columns - 2) * box
            }
        }
        food = { x: thisX, y: thisY }
    }
    function scoreChange_1(change) {
        playersScore[1].innerHTML = `${score_1 += change}`
    }
    function scoreChange__2(change) {
        playersScore[0].innerHTML = `${score__2 += change}`
    }

    function directionKey_1(pressed) {
        if (pressed.keyCode === 37 && direction_1 != 'Right') {
            direction_1 = 'Left'
        }
        if (pressed.keyCode === 38 && direction_1 != 'Down') {
            direction_1 = 'Up'
        }
        if (pressed.keyCode === 39 && direction_1 != 'Left') {
            direction_1 = 'Right'
        }
        if (pressed.keyCode === 40 && direction_1 != 'Up') {
            direction_1 = 'Down'
        }
    }

    function directionKey__2(pressed) {
        if (pressed.keyCode === 65 && direction__2 != 'Right') {
            direction__2 = 'Left'
        }
        if (pressed.keyCode === 87 && direction__2 != 'Down') {
            direction__2 = 'Up'
        }
        if (pressed.keyCode === 68 && direction__2 != 'Left') {
            direction__2 = 'Right'
        }
        if (pressed.keyCode === 83 && direction__2 != 'Up') {
            direction__2 = 'Down'
        }
    }

    function snakeMove_1(grow, stop) {
        if (!stop) {
            if (!grow) {
                snake_1.pop();
            }
            snakeY = snake_1[0].y
            snakeX = snake_1[0].x
            if (direction_1 === 'Left') { snakeX -= box }
            if (direction_1 === 'Up') { snakeY -= box }
            if (direction_1 === 'Right') { snakeX += box }
            if (direction_1 === 'Down') { snakeY += box }
            newHead_1 = { x: snakeX, y: snakeY }
            collision_1(newHead_1, snake_1)
            // headToHeadCollisions(newHead_1, snake_1, newHead__2, snake__2)
            snake_1.unshift(newHead_1)
            eat_1(snakeY, snakeX)
            // headToTail()
        }
    }
    function snakeMove__2(grow, stop) {
        if (!stop) {
            if (!grow) {
                snake__2.pop();
            }
            snakeY = snake__2[0].y
            snakeX = snake__2[0].x
            if (direction__2 === 'Left') { snakeX -= box }
            if (direction__2 === 'Up') { snakeY -= box }
            if (direction__2 === 'Right') { snakeX += box }
            if (direction__2 === 'Down') { snakeY += box }
            newHead__2 = { x: snakeX, y: snakeY }
            collision__2(newHead__2, snake__2)
            // headToHeadCollisions(newHead_1, snake_1, newHead__2, snake__2)
            snake__2.unshift(newHead__2)
            eat__2(snakeY, snakeX)
            // headToTail()
        }
    }
    function eat_1(snakeY, snakeX) {
        if (snakeX == food.x && snakeY == food.y) {
            scoreChange_1(+1)
            randomFood()
            snakeMove_1(true, false)
            setTimeout(gameOverShowWinner, 90);
        }
    }
    function eat__2(snakeY, snakeX) {
        if (snakeX == food.x && snakeY == food.y) {
            scoreChange__2(+1)
            randomFood()
            snakeMove__2(true, false)
            setTimeout(gameOverShowWinner, 90);
        }
    }
    function collision_1(newHead_1, snake_1) {
        if (newHead_1.x > cvs.width - box) {
            newHead_1.x = 0
        }
        if (newHead_1.x < 0) {
            newHead_1.x = cvs.width - box
        }
        if (newHead_1.y > cvs.height - box) {
            newHead_1.y = 0
        }
        if (newHead_1.y < 0) {
            newHead_1.y = cvs.height - box
        }
        for (let i = 0; i < snake_1.length; i++) {
            if (newHead_1.x == snake_1[i].x && newHead_1.y == snake_1[i].y) {
                snake_1.pop()
                scoreChange_1(-1)
            }
        }
    }
    function collision__2(newHead__2, snake__2) {
        if (newHead__2.x > cvs.width - box) {
            newHead__2.x = 0
        }
        if (newHead__2.x < 0) {
            newHead__2.x = cvs.width - box
        }
        if (newHead__2.y > cvs.height - box) {
            newHead__2.y = 0
        }
        if (newHead__2.y < 0) {
            newHead__2.y = cvs.height - box
        }
        for (let i = 0; i < snake__2.length; i++) {
            if (newHead__2.x == snake__2[i].x && newHead__2.y == snake__2[i].y) {
                snake__2.pop()
                scoreChange__2(-1)
            }
        }
    }
    function headToHeadCollisions(newHead_1, snake_1, newHead__2, snake__2) {
        if (newHead__2 !== undefined) {
            if (snake_1.length > 40 || snake__2.length > 40) {
                if (newHead_1.x === newHead__2.x && newHead_1.y === newHead__2.y) {
                    setTimeout(weakSnakeIsDied, 90);
                    console.log('headToHeadCollisions')
                }
            }
        }
    }
    function weakSnakeIsDied() {
        if (score_1 > score__2) {
            snakeMove__2(false, true)
            alert(`${startInputs[1].textContent} is the winner`)
            snakeEntered = false
        } else if (score__2 > score_1) {
            snakeMove_1(false, true)
            alert(`${startInputs[0].textContent} is the winner`)
            snakeEntered = false
        }
    }
    function headToTail() {
        waitForSnake_1 = false
        waitForSnake__2 = false
        if (snake_1.length > 5 || snake__2.length > 5) {
            for (let i = 0; i < snake__2.length; i++) {
                if (newHead_1.x == snake__2[i].x && newHead_1.y == snake__2[i].y) {
                    waitForSnake_1 = true
                }
            }
            for (let i = 0; i < snake_1.length; i++) {
                if (newHead__2.x == snake_1[i].x && newHead__2.y == snake_1[i].y) {
                    waitForSnake__2 = true
                }
            }
        }
    }
    function gameOverShowWinner() {
        if (score_1 >= 50) {
            snakeMove_1(false, true)
            snakeEntered = false
            alert(`${startInputs[1].textContent} is the winner`)
        } else if (score__2 >= 50) {
            alert(`${startInputs[0].textContent} is the winner`)
            snakeMove__2(false, true)
            snakeEntered = false
        }
    }

    function draw() {
        ctx.clearRect(0, 0, cvs.width, cvs.height)
        scoreChange_1(0)
        scoreChange__2(0)
        if (snakeEntered) {
            snakeLoop_1()
            snakeLoop__2()
            if (snakePoused) {
                foodPosition()
                if (!waitForSnake_1) { snakeMove_1(false, false) }
                if (!waitForSnake__2) { snakeMove__2(false, false) }
            }
        }
    }
}


function theme() {
    let white = [...document.querySelectorAll('.white-theme')]
    let dark = [...document.querySelectorAll('.dark-theme')]
    console.log(dark, white)
    if (white.length < 1) {
        for (let i = 0; i < dark.length; i++) {
            dark[i].classList.remove('dark-theme')
            dark[i].classList.add('white-theme')
        }
        return
    }
    if (dark.length < 1) {
        for (let i = 0; i < white.length; i++) {
            white[i].classList.remove('white-theme')
            white[i].classList.add('dark-theme')
        }
    }
}
theme()

/*window.onload = function() {
    const cvs = document.querySelector('canvas')
    const ctx = cvs.getContext('2d')
    const box = 20
    let direction = 'Down'
    let game = setInterval(draw, 1000/20)
    let score = 20
    let snake = [
        {x:4*box, y:6*box},
        {x:5*box, y:6*box},
        {x:6*box, y:6*box}
    ]

    cvs.width = 640
    cvs.height = 600
    // cvs.width = window.innerWidth
    // cvs.height = window.innerHeight
    let rows = cvs.width / box
    let columns = cvs.height / box
    let food = {
        x: Math.floor(Math.random()* rows)+box,
        y: Math.floor(Math.random()* columns-1)+box
    }
    window.addEventListener('keydown', directionKey)
    console.log(cvs.width)

    function snakeLoop() {
        for (let i = 0; i < snake.length; i++) {
            ctx.fillStyle = (i==0)?'black':'green'
            ctx.fillRect(snake[i].x, snake[i].y, box, box)
            // ctx.strokeStyle = (i==0)?'green':'black'
            // ctx.strokeRect(snake[i].x, snake[i].y, box, box)
        }
    }
    function foodPosition() {
        ctx.fillStyle = 'lime'
        ctx.fillRect(food.x, food.y, box, box)
    }
    function scoreChange(change) {
        ctx.fillStyle = 'black'
        ctx.font = '15px Arial'
        ctx.fillText(`Score: ${score += change}`, box*0.5, box*1)
    }

    function directionKey(pressed) {
        if (pressed.keyCode === 37 && direction != 'Right') {
            direction = 'Left'
        }
        if (pressed.keyCode === 38 && direction != 'Down') {
            direction = 'Up'
        }
        if (pressed.keyCode === 39 && direction != 'Left') {
            direction = 'Right'
        }
        if (pressed.keyCode === 40 && direction != 'Up') {
            direction = 'Down'
        }
    }

    function snakeMove(grow) {
        if (!grow) {
            snake.pop();
        }
        console.log("snake", snake)
        snakeY = snake[0].y
        snakeX = snake[0].x
        if (direction === 'Left') {snakeX -= box}
        if (direction === 'Up') {snakeY -= box}
        if (direction === 'Right') {snakeX += box}
        if (direction === 'Down') {snakeY += box}
        let newHead = {x: snakeX, y: snakeY}
        collision(newHead, snake)

        snake.unshift(newHead)
        eat(snakeY, snakeX)
    }
    function eat(snakeY, snakeX) {
        if (snakeX == food.x && snakeY == food.y ) {
            scoreChange(+1)
            food = {
                x: Math.floor(Math.random() * rows-2) * box,
                y: Math.floor(Math.random() * columns-2) * box
            }
            snakeMove(true)
        }
    }
    function collision(newHead, snake) {
        if (newHead.x > cvs.width) {
            newHead.x = 0
        }
        if (newHead.x < 0) {
            newHead.x = cvs.width
        }
        if (newHead.y > cvs.height) {
            newHead.y = 0
        }
        if (newHead.y < 0) {
            newHead.y = cvs.height
        }
        for (let i = 0; i < snake.length; i++) {
            if (newHead.x == snake[i].x && newHead.y == snake[i].y ) {
                snake.pop()
                scoreChange(-1)
            }
        }
    }

    function draw() {
        ctx.clearRect(0, 0, cvs.width, cvs.height)
        scoreChange(0)
        scoreChange(0)
        snakeLoop()
        foodPosition()
        snakeMove(false)
    }
}*/
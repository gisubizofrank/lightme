
// -------------- Variables
const degrees = document.querySelector('input#degrees')
const radians = document.querySelector('input#radians')
const radians1 = document.querySelector('input#radians1')
const grades = document.querySelector('input#grades')
const btn = document.querySelector('button#btn')
const angles = [...document.querySelectorAll('.angle')]
const values = [...document.querySelectorAll('#trig-values>p')]
console.log(values);
let isDegrees = true
let pi = 3.14

// -------------- Events
degrees.addEventListener('loadend', e => {

})
degrees.addEventListener('input', e=> {
    degreesChange()
    valuesFunction(e)
})
degrees.addEventListener('change', degreesChange)

radians.addEventListener('input', e => {
    degrees.value = (parseFloat(radians.value)*180)/pi
    grades.value = (parseFloat(radians.value)*200)/pi
})

grades.addEventListener('input', e => {
    degrees.value = (parseFloat(grades.value)*180)/200
    radians.value = (parseFloat(grades.value)*pi)/200
})

btn.addEventListener('click', diagramChange)

angles.forEach(angle => {
    angle.addEventListener('click', e => {
        degrees.value = e.target.children[0].textContent
        degreesChange()
    })
});


function diagramChange() {
    if (isDegrees) {
        angles.forEach(angle => {
            angle.children[0].style.display = 'none'
            angle.children[1].style.display = 'flex'
        })
        isDegrees = false
    } else {
        angles.forEach(angle => {
            angle.children[1].style.display = 'none'
            angle.children[0].style.display = 'flex'
        })
        isDegrees = true
    }
}

function degreesChange() {
    radians1.value = radiansFraction(parseInt(degrees.value)) 
    radians.value = (parseFloat(degrees.value)*pi)/180
    grades.value = (parseFloat(degrees.value)*200)/180
}

function radiansFraction(degree) {
    let done = false
    let denominator = degree
    let numerator = 180
    let index = 0
    let checks = [2,3,5]

    if (degree != 0) {
        done = false
    } else {
        return 0
    }

    while (!done) {
        ans = `${denominator/checks[index]}`.indexOf('.') == -1
        ans2 = `${numerator/checks[index]}`.indexOf('.') == -1
        if (ans && ans2) {
            denominator = denominator/checks[index]
            numerator = numerator/checks[index]
            index = -1
        }
        if (index >= 2) {
            if (numerator != 1 && denominator != 1) {
                return `${denominator}π/${numerator}`
            }
            if (numerator == 1 && denominator != 1) {
                return `${denominator}π`
            }
            if (numerator != 1 && denominator == 1) {
                return `π/${numerator}`
            }
            if (numerator == 1 && denominator == 1) {
                return `π`
            }
            done = true
        } else {index+=1}
    }   
}


function valuesFunction(e) {
    values[0].textContent = `Sine ${e.target.value}: ${Math.sin(parseInt(e.target.value))}`
    values[1].textContent = `Cosine ${e.target.value}: ${Math.cos(parseInt(e.target.value))}`
    values[2].textContent = `Tangent ${e.target.value}: ${Math.tan(parseInt(e.target.value))}`
    values[3].textContent = `Cotangent ${e.target.value}: ${Math.tanh(parseInt(e.target.value))}`
    values[4].textContent = `Secant ${e.target.value}: ${Math.sinh(parseInt(e.target.value))}`
    values[5].textContent = `Cosecant ${e.target.value}: ${Math.cosh(parseInt(e.target.value))}`
}

// 2.1805555555555554
// 138.88888888888889
// 0.17444444444444446

// console.log(Math.fround(0.17444444444444446, 2))

// console.log(Math.sin(270));
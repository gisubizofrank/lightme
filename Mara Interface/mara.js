const mara = document.querySelector('#mara')
for (let j = 1; j <= 12; j++) {  
    mara.innerHTML += `<div class="bord bord${j}"></div>`
    const bord$ = document.querySelector(`.bord${j}`)
    for (let i = 1; i <= 11; i++) {
        bord$.innerHTML += /*html*/`<span>
            <p>${j}</p><p>X</p><p>${i}</p>
            <p>=</p><p>${j * i}</p>
        </span>`
    }
}


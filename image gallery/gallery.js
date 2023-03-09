const imagesElement = document.querySelector('img')
const imagesArray = ['Drone-1.jpg', 'Drone-2.jpg', 'Drone-3.jpg', 'machine.jpg']
let position = 0
setInterval(timeImageFunctionality, 2000);
function timeImageFunctionality() {
    if (position < imagesArray.length) {
        imagesElement.setAttribute('src', imagesArray[position])
        console.log("imagesArray.src", imagesArray.src)
        position += 1
    } else {
        position = 0
    }
}
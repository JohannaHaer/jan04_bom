let button = document.querySelector("#btn")
let counterPlace = document.querySelector(".zeit")
let counter = 100

let count = () => {
    let timer = setInterval(() => {
    counter--
    counterPlace.innerHTML = `${counter}%`
    if (counter === 0) {
        clearInterval(timer)
    }
}, 100)
}
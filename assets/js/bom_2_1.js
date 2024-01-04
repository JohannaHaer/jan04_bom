let message = document.querySelector(".message")
let runterzaehlen = document.querySelector("#count")
let counter = 11

const timer = setInterval(() => {
    counter--
    runterzaehlen.innerHTML = `${counter}`
    if (counter === 0) {
        clearInterval(timer)
        message.style.display = "none"
    }
}, 1000)

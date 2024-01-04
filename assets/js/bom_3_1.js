const cat = document.querySelector("#cat")
let leftPos = 0
let catInterval

const catWalk = () => {
    catInterval = setInterval(() => {
        leftPos += 10
        cat.style.left = `${leftPos}px`
        if (leftPos === 1600) {
            clearInterval(catInterval)
        }
    }, 100)
}

const pause = () => {
    clearInterval(catInterval)
}

const turn = () => {
    cat.style.transform = "scaleX(-1)"
    clearInterval(catInterval)
    catInterval = setInterval(() => {
        leftPos -= 10
        cat.style.left = `${leftPos}px`
        if(leftPos === 0){
            clearInterval(catInterval)
        }
    }, 100)
}

const catSpeed = () => {
    catInterval = setInterval(() => {
        leftPos += 10
        cat.style.left = `${leftPos}px`
        if (leftPos === 1600) {
            clearInterval(catInterval)
        }
    }, 10)
}
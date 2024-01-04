let counter = 11
let interrupt = 8

console.log("Start: Warten für 3 Sekunden...");

const timer = setInterval(() => {
    counter--
    console.log(counter);
    if (counter === interrupt) {
        console.log("Erledigt. Du hast 3 Sekunden verschwendet");
    }
    if (counter === 0) {
        clearInterval(timer)
    }
}, 1000)


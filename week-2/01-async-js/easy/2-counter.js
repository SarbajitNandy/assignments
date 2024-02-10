let counter = 1

function startCounter() {
    setTimeout(() => {
        console.log(counter++);
        startCounter();
    }, 1000)
}

startCounter()
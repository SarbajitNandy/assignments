

const counterFn = async() => {
    let count = 0;

    setInterval(() => {
        count++;
        console.log(`couter : ${count}`);
    }, 1000);
}

counterFn();
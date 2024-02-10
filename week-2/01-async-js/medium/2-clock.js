// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

const date = new Date();

let hr = date.getHours();
let mn = date.getMinutes();
let se = date.getSeconds();

const format = (value) => {
    return value.toString().padStart(2,'0');
}
const counterFn = async() => {
    console.log(`${format(hr)}:${format(mn)}:${format(se)}`);
    if (se==60) {
        se=0;
        mn++;
    }

    if (mn==60) {
        mn=0;
        hr= (hr+1)%24;
    }
}

setInterval(() => {
    counterFn();
    se++;
}, 1000);
const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');

const numberElement = [];
const barElement = [];

// Create number hours
for (let i = 1; i <= 12; i++) {
    numberElement.push(
        `<span style="--index:${i}"><p>${i}</p></span>`
    );
}
numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

// Create bar seconds
for (let i = 1; i <= 60; i++) {
    barElement.push(`<span style="--index:${i}"><p></p></span>`);
}
barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector('.hand.hours');
const handMinutes = document.querySelector('.hand.minutes');
const handSeconds = document.querySelector('.hand.seconds');

function getCurrentTime(){
    const date = new Date();
    const currentHours = date.getHours();
    const currentMinutes = date.getMinutes();
    const currentSeconds = date.getSeconds(); 

    const hourAngle = ((currentHours % 12) + currentMinutes / 60) * 30;

    handHours.style.transform = `rotate(${hourAngle}deg)`;
    handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
}

// Update every second
setInterval(getCurrentTime, 1000);
// Initial call
getCurrentTime();

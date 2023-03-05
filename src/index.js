import {startFunction, start} from './timer.js'

//Global Variable
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

// Event Listener
startBtn.addEventListener('click', () => {
    console.log('clicked');
    startBtn.disabled = true;
    startFunction();
});

stopBtn.addEventListener('click', () => {
    console.log('stopClick');
    startBtn.disabled = false;
    clearInterval(start);
});
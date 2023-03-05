import {minutes, seconds} from './timer.js'

function setStudyTime() {
    minutes.textContent = '25';
    seconds.textContent = '00';
}

function setShortBreak() {
    minutes.textContent = '05';
    seconds.textContent = '00';
};

function setLongBreak() {
    minutes.textContent = '20';
    seconds.textContent = '00';
};

export {setStudyTime, setShortBreak, setLongBreak};
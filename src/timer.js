// Global variables
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let start = null; 
//Functions
function countdown() {
    console.log('minutes.textContent', minutes.textContent);
    console.log('seconds.textContent', seconds.textContent);
    if ((minutes.textContent == '00') & (seconds.textContent == '00')) {
        console.log('clearRuns');
        clearInterval(start);
    } else if (seconds.textContent == '00') {
        seconds.textContent = '59';
        if (minutes.textContent != '00') {
            minutes.textContent = (parseInt(minutes.textContent) - 1).toString()
        };
    } else {
        if (parseInt(seconds.textContent) <= 10) {
            seconds.textContent = (parseInt(seconds.textContent) - 1).toString().padStart(2, '0');
        } else {
            seconds.textContent = (parseInt(seconds.textContent) - 1).toString();
        };
    };
};

function startFunction() {
    start = setInterval(countdown, 1000);
};

export {startFunction, start};
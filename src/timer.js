// Global variables
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
let start = null;
const alarm = new Audio("../Ping1.mp3");

//Functions

// Counts down 1 from specified number
function countdown() {
  console.log("minutes.textContent", minutes.textContent);
  console.log("seconds.textContent", seconds.textContent);
  if ((minutes.textContent == "00") & (seconds.textContent == "00")) {
    clearInterval(start);
    playSound();
  } else if (seconds.textContent == "00") {
    seconds.textContent = "59";
    if (minutes.textContent != "00") {
      minutes.textContent = (parseInt(minutes.textContent) - 1).toString();
    }
  } else {
    if (parseInt(seconds.textContent) <= 10) {
      seconds.textContent = (parseInt(seconds.textContent) - 1)
        .toString()
        .padStart(2, "0");
    } else {
      seconds.textContent = (parseInt(seconds.textContent) - 1).toString();
    }
  }
}

// Runs the countdown function every 1 second
function startFunction() {
  start = setInterval(countdown, 1000);
}

// Plays the alarm sound
function playSound() {
  alarm.play();
}

// Stops the alarm sound
function stopSound() {
  alarm.pause();
  alarm.currentTime = 0;
}

export { startFunction, stopSound, start, minutes, seconds };

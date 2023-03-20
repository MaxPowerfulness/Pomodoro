import { startFunction, stopSound, start } from "./timer.js";
import {
  setStudyTime,
  setShortBreak,
  setLongBreak,
  changeQuote,
} from "./DOMchanges.js";
import { saveSession, endSession } from "./sessionScript.js";

//Global Variable
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const study = document.querySelector(".study");
const shortBreak = document.querySelector(".shortBreak");
const longBreak = document.querySelector(".longBreak");
const buttons = document.querySelectorAll(".timerBtn");
const body = document.querySelector("body");
const startSesh = document.querySelector(".startSesh");
const endSesh = document.querySelector(".endSesh");
endSesh.disabled = true;

// Timer function
startBtn.addEventListener("click", () => {
  console.log("clicked");
  startBtn.disabled = true;
  startFunction();
});

stopBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  stopSound();
  clearInterval(start);
});

// Study times
study.addEventListener("click", () => {
  setStudyTime();
  stopSound();
  startBtn.disabled = false;
  clearInterval(start);
  themeChanger("studyTheme");
});

shortBreak.addEventListener("click", () => {
  setShortBreak();
  stopSound();
  startBtn.disabled = false;
  clearInterval(start);
  themeChanger("shortBreakTheme");
});

longBreak.addEventListener("click", () => {
  setLongBreak();
  stopSound();
  startBtn.disabled = false;
  clearInterval(start);
  themeChanger("longBreakTheme");
});

// Session Buttons
startSesh.addEventListener("click", () => {
  saveSession();
  endSesh.disabled = false;
  startSesh.disabled = true;
});

endSesh.addEventListener("click", () => {
  endSession();
  startSesh.disabled = false;
  endSesh.disabled = true;
});


//Functions
// Randomly cycles through quotes every 12.5 minutes
setInterval(changeQuote, 5000);

// Changes the theme of the website depending on timer setting
function themeChanger(theme) {
  buttons.forEach((button) => {
    button.classList.remove("studyTheme", "shortBreakTheme", "longBreakTheme");
    button.classList.add(theme);
  });
  body.classList.remove("studyTheme", "shortBreakTheme", "longBreakTheme");
  body.classList.add(theme);
}

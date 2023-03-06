import { startFunction, start } from "./timer.js";
import {
  setStudyTime,
  setShortBreak,
  setLongBreak,
  changeQuote,
} from "./DOMchanges.js";

//Global Variable
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const study = document.querySelector(".study");
const shortBreak = document.querySelector(".shortBreak");
const longBreak = document.querySelector(".longBreak");
const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

// Timer function
startBtn.addEventListener("click", () => {
  console.log("clicked");
  startBtn.disabled = true;
  startFunction();
});

stopBtn.addEventListener("click", () => {
  console.log("stopClick");
  startBtn.disabled = false;
  clearInterval(start);
});

// Study times
study.addEventListener("click", () => {
  setStudyTime();
  themeChanger("studyTheme");
});

shortBreak.addEventListener("click", () => {
  setShortBreak();
  themeChanger("shortBreakTheme");
});

longBreak.addEventListener("click", () => {
  setLongBreak();
  themeChanger("longBreakTheme");
});

//Functions
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

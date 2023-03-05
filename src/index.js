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

// Event Listener
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

study.addEventListener("click", () => setStudyTime());

shortBreak.addEventListener("click", () => setShortBreak());

longBreak.addEventListener("click", () => setLongBreak());

//Functions
setInterval(changeQuote, 5000);

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "minutes": () => (/* binding */ minutes),
/* harmony export */   "seconds": () => (/* binding */ seconds),
/* harmony export */   "start": () => (/* binding */ start),
/* harmony export */   "startFunction": () => (/* binding */ startFunction),
/* harmony export */   "stopSound": () => (/* binding */ stopSound)
/* harmony export */ });
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb21vZG9yby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb21vZG9yby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9tb2Rvcm8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb21vZG9yby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvbW9kb3JvLy4vc3JjL3RpbWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gR2xvYmFsIHZhcmlhYmxlc1xuY29uc3QgbWludXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWludXRlc1wiKTtcbmNvbnN0IHNlY29uZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY29uZHNcIik7XG5sZXQgc3RhcnQgPSBudWxsO1xuY29uc3QgYWxhcm0gPSBuZXcgQXVkaW8oXCIuLi9QaW5nMS5tcDNcIik7XG5cbi8vRnVuY3Rpb25zXG5cbi8vIENvdW50cyBkb3duIDEgZnJvbSBzcGVjaWZpZWQgbnVtYmVyXG5mdW5jdGlvbiBjb3VudGRvd24oKSB7XG4gIGNvbnNvbGUubG9nKFwibWludXRlcy50ZXh0Q29udGVudFwiLCBtaW51dGVzLnRleHRDb250ZW50KTtcbiAgY29uc29sZS5sb2coXCJzZWNvbmRzLnRleHRDb250ZW50XCIsIHNlY29uZHMudGV4dENvbnRlbnQpO1xuICBpZiAoKG1pbnV0ZXMudGV4dENvbnRlbnQgPT0gXCIwMFwiKSAmIChzZWNvbmRzLnRleHRDb250ZW50ID09IFwiMDBcIikpIHtcbiAgICBjbGVhckludGVydmFsKHN0YXJ0KTtcbiAgICBwbGF5U291bmQoKTtcbiAgfSBlbHNlIGlmIChzZWNvbmRzLnRleHRDb250ZW50ID09IFwiMDBcIikge1xuICAgIHNlY29uZHMudGV4dENvbnRlbnQgPSBcIjU5XCI7XG4gICAgaWYgKG1pbnV0ZXMudGV4dENvbnRlbnQgIT0gXCIwMFwiKSB7XG4gICAgICBtaW51dGVzLnRleHRDb250ZW50ID0gKHBhcnNlSW50KG1pbnV0ZXMudGV4dENvbnRlbnQpIC0gMSkudG9TdHJpbmcoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHBhcnNlSW50KHNlY29uZHMudGV4dENvbnRlbnQpIDw9IDEwKSB7XG4gICAgICBzZWNvbmRzLnRleHRDb250ZW50ID0gKHBhcnNlSW50KHNlY29uZHMudGV4dENvbnRlbnQpIC0gMSlcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Vjb25kcy50ZXh0Q29udGVudCA9IChwYXJzZUludChzZWNvbmRzLnRleHRDb250ZW50KSAtIDEpLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9XG59XG5cbi8vIFJ1bnMgdGhlIGNvdW50ZG93biBmdW5jdGlvbiBldmVyeSAxIHNlY29uZFxuZnVuY3Rpb24gc3RhcnRGdW5jdGlvbigpIHtcbiAgc3RhcnQgPSBzZXRJbnRlcnZhbChjb3VudGRvd24sIDEwMDApO1xufVxuXG4vLyBQbGF5cyB0aGUgYWxhcm0gc291bmRcbmZ1bmN0aW9uIHBsYXlTb3VuZCgpIHtcbiAgYWxhcm0ucGxheSgpO1xufVxuXG4vLyBTdG9wcyB0aGUgYWxhcm0gc291bmRcbmZ1bmN0aW9uIHN0b3BTb3VuZCgpIHtcbiAgYWxhcm0ucGF1c2UoKTtcbiAgYWxhcm0uY3VycmVudFRpbWUgPSAwO1xufVxuXG5leHBvcnQgeyBzdGFydEZ1bmN0aW9uLCBzdG9wU291bmQsIHN0YXJ0LCBtaW51dGVzLCBzZWNvbmRzIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
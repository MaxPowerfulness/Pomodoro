/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMchanges.js":
/*!***************************!*\
  !*** ./src/DOMchanges.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeQuote": () => (/* binding */ changeQuote),
/* harmony export */   "setLongBreak": () => (/* binding */ setLongBreak),
/* harmony export */   "setShortBreak": () => (/* binding */ setShortBreak),
/* harmony export */   "setStudyTime": () => (/* binding */ setStudyTime)
/* harmony export */ });
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./src/timer.js");


// Global Variables
const quotes = document.querySelector(".quotes");
let quoteList = [
  "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
  "I am who I am today because of the choices I made yesterday.",
  "The only thing standing between you and outrageous success is continuous progress.",
  "I'm a great believer in luck, and I find the harder I work the more I have of it.",
  "If you really look closely, most overnight successes took a long time.",
  "Setting goals is the first step in turning the invisible into the visible.",
  "Impossible is just an opinion.",
  "The greater the difficulty, the more the glory in surmounting it.",
  "You are your greatest asset. Put your time, effort and money into training.",
];

// Sets the study time to 25 minutes
function setStudyTime() {
  _timer_js__WEBPACK_IMPORTED_MODULE_0__.minutes.textContent = "25";
  _timer_js__WEBPACK_IMPORTED_MODULE_0__.seconds.textContent = "00";
}

// Sets the break time to 5 minutes
function setShortBreak() {
  _timer_js__WEBPACK_IMPORTED_MODULE_0__.minutes.textContent = "05";
  _timer_js__WEBPACK_IMPORTED_MODULE_0__.seconds.textContent = "00";
}

// Sets the break time to 20 minutes
function setLongBreak() {
  _timer_js__WEBPACK_IMPORTED_MODULE_0__.minutes.textContent = "20";
  _timer_js__WEBPACK_IMPORTED_MODULE_0__.seconds.textContent = "00";
}

// Chooses a random quote from the list of quotes
function changeQuote() {
  quotes.textContent = quoteList[Math.floor(Math.random() * quoteList.length)];
}



/***/ }),

/***/ "./src/sessionScript.js":
/*!******************************!*\
  !*** ./src/sessionScript.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endSession": () => (/* binding */ endSession),
/* harmony export */   "saveSession": () => (/* binding */ saveSession)
/* harmony export */ });
// Global
let counter = 0;
const startSesh = document.querySelector(".startSesh");

// Functions
function saveSession() {
  let value = {
    start: new Date(),
    end: null,
    comment: null,
  };
  localStorage.setItem(`Session ${counter}`, JSON.stringify(value));
  startSesh.disabled = true;
}

function endSession() {
  // ends study sesssion, writes end time to object, bring down form to add session comments
  console.log("endSESH");
  let session = JSON.parse(localStorage.getItem(`Session ${counter}`));
  session["end"] = new Date();
  localStorage.setItem(`Session ${counter}`, JSON.stringify(session));
  counter++;
  startSesh.disabled = false;
}




/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./src/timer.js");
/* harmony import */ var _DOMchanges_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMchanges.js */ "./src/DOMchanges.js");
/* harmony import */ var _sessionScript_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sessionScript.js */ "./src/sessionScript.js");




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

// Timer function
startBtn.addEventListener("click", () => {
  console.log("clicked");
  startBtn.disabled = true;
  (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.startFunction)();
});

stopBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.stopSound)();
  clearInterval(_timer_js__WEBPACK_IMPORTED_MODULE_0__.start);
});

// Study times
study.addEventListener("click", () => {
  (0,_DOMchanges_js__WEBPACK_IMPORTED_MODULE_1__.setStudyTime)();
  (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.stopSound)();
  startBtn.disabled = false;
  clearInterval(_timer_js__WEBPACK_IMPORTED_MODULE_0__.start);
  themeChanger("studyTheme");
});

shortBreak.addEventListener("click", () => {
  (0,_DOMchanges_js__WEBPACK_IMPORTED_MODULE_1__.setShortBreak)();
  (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.stopSound)();
  startBtn.disabled = false;
  clearInterval(_timer_js__WEBPACK_IMPORTED_MODULE_0__.start);
  themeChanger("shortBreakTheme");
});

longBreak.addEventListener("click", () => {
  (0,_DOMchanges_js__WEBPACK_IMPORTED_MODULE_1__.setLongBreak)();
  (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.stopSound)();
  startBtn.disabled = false;
  clearInterval(_timer_js__WEBPACK_IMPORTED_MODULE_0__.start);
  themeChanger("longBreakTheme");
});

// Session Buttons
startSesh.addEventListener("click", () => (0,_sessionScript_js__WEBPACK_IMPORTED_MODULE_2__.saveSession)());

endSesh.addEventListener("click", () => (0,_sessionScript_js__WEBPACK_IMPORTED_MODULE_2__.endSession)());

//Functions

// Randomly cycles through quotes every 12.5 minutes
setInterval(_DOMchanges_js__WEBPACK_IMPORTED_MODULE_1__.changeQuote, 5000);

// Changes the theme of the website depending on timer setting
function themeChanger(theme) {
  buttons.forEach((button) => {
    button.classList.remove("studyTheme", "shortBreakTheme", "longBreakTheme");
    button.classList.add(theme);
  });
  body.classList.remove("studyTheme", "shortBreakTheme", "longBreakTheme");
  body.classList.add(theme);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsMERBQW1CO0FBQ3JCLEVBQUUsMERBQW1CO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDBEQUFtQjtBQUNyQixFQUFFLDBEQUFtQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0EsRUFBRSwwREFBbUI7QUFDckIsRUFBRSwwREFBbUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDa0U7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2xFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFFBQVE7QUFDbkU7QUFDQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBO0FBQ0E7O0FBRW1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZEOzs7Ozs7O1VDL0M3RDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONkQ7QUFNcEM7QUFDb0M7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3REFBYTtBQUNmLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsb0RBQVM7QUFDWCxnQkFBZ0IsNENBQUs7QUFDckIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSw0REFBWTtBQUNkLEVBQUUsb0RBQVM7QUFDWDtBQUNBLGdCQUFnQiw0Q0FBSztBQUNyQjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxFQUFFLDZEQUFhO0FBQ2YsRUFBRSxvREFBUztBQUNYO0FBQ0EsZ0JBQWdCLDRDQUFLO0FBQ3JCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsNERBQVk7QUFDZCxFQUFFLG9EQUFTO0FBQ1g7QUFDQSxnQkFBZ0IsNENBQUs7QUFDckI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsMENBQTBDLDhEQUFXOztBQUVyRCx3Q0FBd0MsNkRBQVU7O0FBRWxEOztBQUVBO0FBQ0EsWUFBWSx1REFBVzs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb21vZG9yby8uL3NyYy9ET01jaGFuZ2VzLmpzIiwid2VicGFjazovL3BvbW9kb3JvLy4vc3JjL3Nlc3Npb25TY3JpcHQuanMiLCJ3ZWJwYWNrOi8vcG9tb2Rvcm8vLi9zcmMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vcG9tb2Rvcm8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9tb2Rvcm8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvbW9kb3JvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9tb2Rvcm8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb21vZG9yby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtaW51dGVzLCBzZWNvbmRzIH0gZnJvbSBcIi4vdGltZXIuanNcIjtcblxuLy8gR2xvYmFsIFZhcmlhYmxlc1xuY29uc3QgcXVvdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdW90ZXNcIik7XG5sZXQgcXVvdGVMaXN0ID0gW1xuICBcIlRoZXJlIGFyZSBubyBzZWNyZXRzIHRvIHN1Y2Nlc3MuIEl0IGlzIHRoZSByZXN1bHQgb2YgcHJlcGFyYXRpb24sIGhhcmQgd29yaywgYW5kIGxlYXJuaW5nIGZyb20gZmFpbHVyZS5cIixcbiAgXCJJIGFtIHdobyBJIGFtIHRvZGF5IGJlY2F1c2Ugb2YgdGhlIGNob2ljZXMgSSBtYWRlIHllc3RlcmRheS5cIixcbiAgXCJUaGUgb25seSB0aGluZyBzdGFuZGluZyBiZXR3ZWVuIHlvdSBhbmQgb3V0cmFnZW91cyBzdWNjZXNzIGlzIGNvbnRpbnVvdXMgcHJvZ3Jlc3MuXCIsXG4gIFwiSSdtIGEgZ3JlYXQgYmVsaWV2ZXIgaW4gbHVjaywgYW5kIEkgZmluZCB0aGUgaGFyZGVyIEkgd29yayB0aGUgbW9yZSBJIGhhdmUgb2YgaXQuXCIsXG4gIFwiSWYgeW91IHJlYWxseSBsb29rIGNsb3NlbHksIG1vc3Qgb3Zlcm5pZ2h0IHN1Y2Nlc3NlcyB0b29rIGEgbG9uZyB0aW1lLlwiLFxuICBcIlNldHRpbmcgZ29hbHMgaXMgdGhlIGZpcnN0IHN0ZXAgaW4gdHVybmluZyB0aGUgaW52aXNpYmxlIGludG8gdGhlIHZpc2libGUuXCIsXG4gIFwiSW1wb3NzaWJsZSBpcyBqdXN0IGFuIG9waW5pb24uXCIsXG4gIFwiVGhlIGdyZWF0ZXIgdGhlIGRpZmZpY3VsdHksIHRoZSBtb3JlIHRoZSBnbG9yeSBpbiBzdXJtb3VudGluZyBpdC5cIixcbiAgXCJZb3UgYXJlIHlvdXIgZ3JlYXRlc3QgYXNzZXQuIFB1dCB5b3VyIHRpbWUsIGVmZm9ydCBhbmQgbW9uZXkgaW50byB0cmFpbmluZy5cIixcbl07XG5cbi8vIFNldHMgdGhlIHN0dWR5IHRpbWUgdG8gMjUgbWludXRlc1xuZnVuY3Rpb24gc2V0U3R1ZHlUaW1lKCkge1xuICBtaW51dGVzLnRleHRDb250ZW50ID0gXCIyNVwiO1xuICBzZWNvbmRzLnRleHRDb250ZW50ID0gXCIwMFwiO1xufVxuXG4vLyBTZXRzIHRoZSBicmVhayB0aW1lIHRvIDUgbWludXRlc1xuZnVuY3Rpb24gc2V0U2hvcnRCcmVhaygpIHtcbiAgbWludXRlcy50ZXh0Q29udGVudCA9IFwiMDVcIjtcbiAgc2Vjb25kcy50ZXh0Q29udGVudCA9IFwiMDBcIjtcbn1cblxuLy8gU2V0cyB0aGUgYnJlYWsgdGltZSB0byAyMCBtaW51dGVzXG5mdW5jdGlvbiBzZXRMb25nQnJlYWsoKSB7XG4gIG1pbnV0ZXMudGV4dENvbnRlbnQgPSBcIjIwXCI7XG4gIHNlY29uZHMudGV4dENvbnRlbnQgPSBcIjAwXCI7XG59XG5cbi8vIENob29zZXMgYSByYW5kb20gcXVvdGUgZnJvbSB0aGUgbGlzdCBvZiBxdW90ZXNcbmZ1bmN0aW9uIGNoYW5nZVF1b3RlKCkge1xuICBxdW90ZXMudGV4dENvbnRlbnQgPSBxdW90ZUxpc3RbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcXVvdGVMaXN0Lmxlbmd0aCldO1xufVxuZXhwb3J0IHsgc2V0U3R1ZHlUaW1lLCBzZXRTaG9ydEJyZWFrLCBzZXRMb25nQnJlYWssIGNoYW5nZVF1b3RlIH07XG4iLCIvLyBHbG9iYWxcbmxldCBjb3VudGVyID0gMDtcbmNvbnN0IHN0YXJ0U2VzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRTZXNoXCIpO1xuXG4vLyBGdW5jdGlvbnNcbmZ1bmN0aW9uIHNhdmVTZXNzaW9uKCkge1xuICBsZXQgdmFsdWUgPSB7XG4gICAgc3RhcnQ6IG5ldyBEYXRlKCksXG4gICAgZW5kOiBudWxsLFxuICAgIGNvbW1lbnQ6IG51bGwsXG4gIH07XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBTZXNzaW9uICR7Y291bnRlcn1gLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICBzdGFydFNlc2guZGlzYWJsZWQgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBlbmRTZXNzaW9uKCkge1xuICAvLyBlbmRzIHN0dWR5IHNlc3NzaW9uLCB3cml0ZXMgZW5kIHRpbWUgdG8gb2JqZWN0LCBicmluZyBkb3duIGZvcm0gdG8gYWRkIHNlc3Npb24gY29tbWVudHNcbiAgY29uc29sZS5sb2coXCJlbmRTRVNIXCIpO1xuICBsZXQgc2Vzc2lvbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYFNlc3Npb24gJHtjb3VudGVyfWApKTtcbiAgc2Vzc2lvbltcImVuZFwiXSA9IG5ldyBEYXRlKCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBTZXNzaW9uICR7Y291bnRlcn1gLCBKU09OLnN0cmluZ2lmeShzZXNzaW9uKSk7XG4gIGNvdW50ZXIrKztcbiAgc3RhcnRTZXNoLmRpc2FibGVkID0gZmFsc2U7XG59XG5cbmV4cG9ydCB7IHNhdmVTZXNzaW9uLCBlbmRTZXNzaW9uIH07XG4iLCIvLyBHbG9iYWwgdmFyaWFibGVzXG5jb25zdCBtaW51dGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taW51dGVzXCIpO1xuY29uc3Qgc2Vjb25kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vjb25kc1wiKTtcbmxldCBzdGFydCA9IG51bGw7XG5jb25zdCBhbGFybSA9IG5ldyBBdWRpbyhcIi4uL1BpbmcxLm1wM1wiKTtcblxuLy9GdW5jdGlvbnNcblxuLy8gQ291bnRzIGRvd24gMSBmcm9tIHNwZWNpZmllZCBudW1iZXJcbmZ1bmN0aW9uIGNvdW50ZG93bigpIHtcbiAgY29uc29sZS5sb2coXCJtaW51dGVzLnRleHRDb250ZW50XCIsIG1pbnV0ZXMudGV4dENvbnRlbnQpO1xuICBjb25zb2xlLmxvZyhcInNlY29uZHMudGV4dENvbnRlbnRcIiwgc2Vjb25kcy50ZXh0Q29udGVudCk7XG4gIGlmICgobWludXRlcy50ZXh0Q29udGVudCA9PSBcIjAwXCIpICYgKHNlY29uZHMudGV4dENvbnRlbnQgPT0gXCIwMFwiKSkge1xuICAgIGNsZWFySW50ZXJ2YWwoc3RhcnQpO1xuICAgIHBsYXlTb3VuZCgpO1xuICB9IGVsc2UgaWYgKHNlY29uZHMudGV4dENvbnRlbnQgPT0gXCIwMFwiKSB7XG4gICAgc2Vjb25kcy50ZXh0Q29udGVudCA9IFwiNTlcIjtcbiAgICBpZiAobWludXRlcy50ZXh0Q29udGVudCAhPSBcIjAwXCIpIHtcbiAgICAgIG1pbnV0ZXMudGV4dENvbnRlbnQgPSAocGFyc2VJbnQobWludXRlcy50ZXh0Q29udGVudCkgLSAxKS50b1N0cmluZygpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAocGFyc2VJbnQoc2Vjb25kcy50ZXh0Q29udGVudCkgPD0gMTApIHtcbiAgICAgIHNlY29uZHMudGV4dENvbnRlbnQgPSAocGFyc2VJbnQoc2Vjb25kcy50ZXh0Q29udGVudCkgLSAxKVxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWNvbmRzLnRleHRDb250ZW50ID0gKHBhcnNlSW50KHNlY29uZHMudGV4dENvbnRlbnQpIC0gMSkudG9TdHJpbmcoKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gUnVucyB0aGUgY291bnRkb3duIGZ1bmN0aW9uIGV2ZXJ5IDEgc2Vjb25kXG5mdW5jdGlvbiBzdGFydEZ1bmN0aW9uKCkge1xuICBzdGFydCA9IHNldEludGVydmFsKGNvdW50ZG93biwgMTAwMCk7XG59XG5cbi8vIFBsYXlzIHRoZSBhbGFybSBzb3VuZFxuZnVuY3Rpb24gcGxheVNvdW5kKCkge1xuICBhbGFybS5wbGF5KCk7XG59XG5cbi8vIFN0b3BzIHRoZSBhbGFybSBzb3VuZFxuZnVuY3Rpb24gc3RvcFNvdW5kKCkge1xuICBhbGFybS5wYXVzZSgpO1xuICBhbGFybS5jdXJyZW50VGltZSA9IDA7XG59XG5cbmV4cG9ydCB7IHN0YXJ0RnVuY3Rpb24sIHN0b3BTb3VuZCwgc3RhcnQsIG1pbnV0ZXMsIHNlY29uZHMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc3RhcnRGdW5jdGlvbiwgc3RvcFNvdW5kLCBzdGFydCB9IGZyb20gXCIuL3RpbWVyLmpzXCI7XG5pbXBvcnQge1xuICBzZXRTdHVkeVRpbWUsXG4gIHNldFNob3J0QnJlYWssXG4gIHNldExvbmdCcmVhayxcbiAgY2hhbmdlUXVvdGUsXG59IGZyb20gXCIuL0RPTWNoYW5nZXMuanNcIjtcbmltcG9ydCB7IHNhdmVTZXNzaW9uLCBlbmRTZXNzaW9uIH0gZnJvbSBcIi4vc2Vzc2lvblNjcmlwdC5qc1wiO1xuXG4vL0dsb2JhbCBWYXJpYWJsZVxuY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0XCIpO1xuY29uc3Qgc3RvcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcFwiKTtcbmNvbnN0IHN0dWR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdHVkeVwiKTtcbmNvbnN0IHNob3J0QnJlYWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3J0QnJlYWtcIik7XG5jb25zdCBsb25nQnJlYWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvbmdCcmVha1wiKTtcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRpbWVyQnRuXCIpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3Qgc3RhcnRTZXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydFNlc2hcIik7XG5jb25zdCBlbmRTZXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbmRTZXNoXCIpO1xuXG4vLyBUaW1lciBmdW5jdGlvblxuc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xuICBzdGFydEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIHN0YXJ0RnVuY3Rpb24oKTtcbn0pO1xuXG5zdG9wQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXJ0QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIHN0b3BTb3VuZCgpO1xuICBjbGVhckludGVydmFsKHN0YXJ0KTtcbn0pO1xuXG4vLyBTdHVkeSB0aW1lc1xuc3R1ZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc2V0U3R1ZHlUaW1lKCk7XG4gIHN0b3BTb3VuZCgpO1xuICBzdGFydEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICBjbGVhckludGVydmFsKHN0YXJ0KTtcbiAgdGhlbWVDaGFuZ2VyKFwic3R1ZHlUaGVtZVwiKTtcbn0pO1xuXG5zaG9ydEJyZWFrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHNldFNob3J0QnJlYWsoKTtcbiAgc3RvcFNvdW5kKCk7XG4gIHN0YXJ0QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIGNsZWFySW50ZXJ2YWwoc3RhcnQpO1xuICB0aGVtZUNoYW5nZXIoXCJzaG9ydEJyZWFrVGhlbWVcIik7XG59KTtcblxubG9uZ0JyZWFrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHNldExvbmdCcmVhaygpO1xuICBzdG9wU291bmQoKTtcbiAgc3RhcnRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgY2xlYXJJbnRlcnZhbChzdGFydCk7XG4gIHRoZW1lQ2hhbmdlcihcImxvbmdCcmVha1RoZW1lXCIpO1xufSk7XG5cbi8vIFNlc3Npb24gQnV0dG9uc1xuc3RhcnRTZXNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzYXZlU2Vzc2lvbigpKTtcblxuZW5kU2VzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZW5kU2Vzc2lvbigpKTtcblxuLy9GdW5jdGlvbnNcblxuLy8gUmFuZG9tbHkgY3ljbGVzIHRocm91Z2ggcXVvdGVzIGV2ZXJ5IDEyLjUgbWludXRlc1xuc2V0SW50ZXJ2YWwoY2hhbmdlUXVvdGUsIDUwMDApO1xuXG4vLyBDaGFuZ2VzIHRoZSB0aGVtZSBvZiB0aGUgd2Vic2l0ZSBkZXBlbmRpbmcgb24gdGltZXIgc2V0dGluZ1xuZnVuY3Rpb24gdGhlbWVDaGFuZ2VyKHRoZW1lKSB7XG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHVkeVRoZW1lXCIsIFwic2hvcnRCcmVha1RoZW1lXCIsIFwibG9uZ0JyZWFrVGhlbWVcIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQodGhlbWUpO1xuICB9KTtcbiAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic3R1ZHlUaGVtZVwiLCBcInNob3J0QnJlYWtUaGVtZVwiLCBcImxvbmdCcmVha1RoZW1lXCIpO1xuICBib2R5LmNsYXNzTGlzdC5hZGQodGhlbWUpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
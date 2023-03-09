/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!***************************!*\
  !*** ./src/DOMchanges.js ***!
  \***************************/
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRE9NLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZEOzs7Ozs7O1VDL0M3RDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjhDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSwwREFBbUI7QUFDckIsRUFBRSwwREFBbUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBLEVBQUUsMERBQW1CO0FBQ3JCLEVBQUUsMERBQW1CO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDBEQUFtQjtBQUNyQixFQUFFLDBEQUFtQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNrRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvbW9kb3JvLy4vc3JjL3RpbWVyLmpzIiwid2VicGFjazovL3BvbW9kb3JvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvbW9kb3JvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb21vZG9yby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvbW9kb3JvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9tb2Rvcm8vLi9zcmMvRE9NY2hhbmdlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbG9iYWwgdmFyaWFibGVzXG5jb25zdCBtaW51dGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taW51dGVzXCIpO1xuY29uc3Qgc2Vjb25kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vjb25kc1wiKTtcbmxldCBzdGFydCA9IG51bGw7XG5jb25zdCBhbGFybSA9IG5ldyBBdWRpbyhcIi4uL1BpbmcxLm1wM1wiKTtcblxuLy9GdW5jdGlvbnNcblxuLy8gQ291bnRzIGRvd24gMSBmcm9tIHNwZWNpZmllZCBudW1iZXJcbmZ1bmN0aW9uIGNvdW50ZG93bigpIHtcbiAgY29uc29sZS5sb2coXCJtaW51dGVzLnRleHRDb250ZW50XCIsIG1pbnV0ZXMudGV4dENvbnRlbnQpO1xuICBjb25zb2xlLmxvZyhcInNlY29uZHMudGV4dENvbnRlbnRcIiwgc2Vjb25kcy50ZXh0Q29udGVudCk7XG4gIGlmICgobWludXRlcy50ZXh0Q29udGVudCA9PSBcIjAwXCIpICYgKHNlY29uZHMudGV4dENvbnRlbnQgPT0gXCIwMFwiKSkge1xuICAgIGNsZWFySW50ZXJ2YWwoc3RhcnQpO1xuICAgIHBsYXlTb3VuZCgpO1xuICB9IGVsc2UgaWYgKHNlY29uZHMudGV4dENvbnRlbnQgPT0gXCIwMFwiKSB7XG4gICAgc2Vjb25kcy50ZXh0Q29udGVudCA9IFwiNTlcIjtcbiAgICBpZiAobWludXRlcy50ZXh0Q29udGVudCAhPSBcIjAwXCIpIHtcbiAgICAgIG1pbnV0ZXMudGV4dENvbnRlbnQgPSAocGFyc2VJbnQobWludXRlcy50ZXh0Q29udGVudCkgLSAxKS50b1N0cmluZygpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAocGFyc2VJbnQoc2Vjb25kcy50ZXh0Q29udGVudCkgPD0gMTApIHtcbiAgICAgIHNlY29uZHMudGV4dENvbnRlbnQgPSAocGFyc2VJbnQoc2Vjb25kcy50ZXh0Q29udGVudCkgLSAxKVxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWNvbmRzLnRleHRDb250ZW50ID0gKHBhcnNlSW50KHNlY29uZHMudGV4dENvbnRlbnQpIC0gMSkudG9TdHJpbmcoKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gUnVucyB0aGUgY291bnRkb3duIGZ1bmN0aW9uIGV2ZXJ5IDEgc2Vjb25kXG5mdW5jdGlvbiBzdGFydEZ1bmN0aW9uKCkge1xuICBzdGFydCA9IHNldEludGVydmFsKGNvdW50ZG93biwgMTAwMCk7XG59XG5cbi8vIFBsYXlzIHRoZSBhbGFybSBzb3VuZFxuZnVuY3Rpb24gcGxheVNvdW5kKCkge1xuICBhbGFybS5wbGF5KCk7XG59XG5cbi8vIFN0b3BzIHRoZSBhbGFybSBzb3VuZFxuZnVuY3Rpb24gc3RvcFNvdW5kKCkge1xuICBhbGFybS5wYXVzZSgpO1xuICBhbGFybS5jdXJyZW50VGltZSA9IDA7XG59XG5cbmV4cG9ydCB7IHN0YXJ0RnVuY3Rpb24sIHN0b3BTb3VuZCwgc3RhcnQsIG1pbnV0ZXMsIHNlY29uZHMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbWludXRlcywgc2Vjb25kcyB9IGZyb20gXCIuL3RpbWVyLmpzXCI7XG5cbi8vIEdsb2JhbCBWYXJpYWJsZXNcbmNvbnN0IHF1b3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVvdGVzXCIpO1xubGV0IHF1b3RlTGlzdCA9IFtcbiAgXCJUaGVyZSBhcmUgbm8gc2VjcmV0cyB0byBzdWNjZXNzLiBJdCBpcyB0aGUgcmVzdWx0IG9mIHByZXBhcmF0aW9uLCBoYXJkIHdvcmssIGFuZCBsZWFybmluZyBmcm9tIGZhaWx1cmUuXCIsXG4gIFwiSSBhbSB3aG8gSSBhbSB0b2RheSBiZWNhdXNlIG9mIHRoZSBjaG9pY2VzIEkgbWFkZSB5ZXN0ZXJkYXkuXCIsXG4gIFwiVGhlIG9ubHkgdGhpbmcgc3RhbmRpbmcgYmV0d2VlbiB5b3UgYW5kIG91dHJhZ2VvdXMgc3VjY2VzcyBpcyBjb250aW51b3VzIHByb2dyZXNzLlwiLFxuICBcIkknbSBhIGdyZWF0IGJlbGlldmVyIGluIGx1Y2ssIGFuZCBJIGZpbmQgdGhlIGhhcmRlciBJIHdvcmsgdGhlIG1vcmUgSSBoYXZlIG9mIGl0LlwiLFxuICBcIklmIHlvdSByZWFsbHkgbG9vayBjbG9zZWx5LCBtb3N0IG92ZXJuaWdodCBzdWNjZXNzZXMgdG9vayBhIGxvbmcgdGltZS5cIixcbiAgXCJTZXR0aW5nIGdvYWxzIGlzIHRoZSBmaXJzdCBzdGVwIGluIHR1cm5pbmcgdGhlIGludmlzaWJsZSBpbnRvIHRoZSB2aXNpYmxlLlwiLFxuICBcIkltcG9zc2libGUgaXMganVzdCBhbiBvcGluaW9uLlwiLFxuICBcIlRoZSBncmVhdGVyIHRoZSBkaWZmaWN1bHR5LCB0aGUgbW9yZSB0aGUgZ2xvcnkgaW4gc3VybW91bnRpbmcgaXQuXCIsXG4gIFwiWW91IGFyZSB5b3VyIGdyZWF0ZXN0IGFzc2V0LiBQdXQgeW91ciB0aW1lLCBlZmZvcnQgYW5kIG1vbmV5IGludG8gdHJhaW5pbmcuXCIsXG5dO1xuXG4vLyBTZXRzIHRoZSBzdHVkeSB0aW1lIHRvIDI1IG1pbnV0ZXNcbmZ1bmN0aW9uIHNldFN0dWR5VGltZSgpIHtcbiAgbWludXRlcy50ZXh0Q29udGVudCA9IFwiMjVcIjtcbiAgc2Vjb25kcy50ZXh0Q29udGVudCA9IFwiMDBcIjtcbn1cblxuLy8gU2V0cyB0aGUgYnJlYWsgdGltZSB0byA1IG1pbnV0ZXNcbmZ1bmN0aW9uIHNldFNob3J0QnJlYWsoKSB7XG4gIG1pbnV0ZXMudGV4dENvbnRlbnQgPSBcIjA1XCI7XG4gIHNlY29uZHMudGV4dENvbnRlbnQgPSBcIjAwXCI7XG59XG5cbi8vIFNldHMgdGhlIGJyZWFrIHRpbWUgdG8gMjAgbWludXRlc1xuZnVuY3Rpb24gc2V0TG9uZ0JyZWFrKCkge1xuICBtaW51dGVzLnRleHRDb250ZW50ID0gXCIyMFwiO1xuICBzZWNvbmRzLnRleHRDb250ZW50ID0gXCIwMFwiO1xufVxuXG4vLyBDaG9vc2VzIGEgcmFuZG9tIHF1b3RlIGZyb20gdGhlIGxpc3Qgb2YgcXVvdGVzXG5mdW5jdGlvbiBjaGFuZ2VRdW90ZSgpIHtcbiAgcXVvdGVzLnRleHRDb250ZW50ID0gcXVvdGVMaXN0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHF1b3RlTGlzdC5sZW5ndGgpXTtcbn1cbmV4cG9ydCB7IHNldFN0dWR5VGltZSwgc2V0U2hvcnRCcmVhaywgc2V0TG9uZ0JyZWFrLCBjaGFuZ2VRdW90ZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
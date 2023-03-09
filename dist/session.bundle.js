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
/*!******************************!*\
  !*** ./src/sessionScript.js ***!
  \******************************/
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsUUFBUTtBQUNuRTtBQUNBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTs7QUFFbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb21vZG9yby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb21vZG9yby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9tb2Rvcm8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb21vZG9yby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvbW9kb3JvLy4vc3JjL3Nlc3Npb25TY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBHbG9iYWxcbmxldCBjb3VudGVyID0gMDtcbmNvbnN0IHN0YXJ0U2VzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRTZXNoXCIpO1xuXG4vLyBGdW5jdGlvbnNcbmZ1bmN0aW9uIHNhdmVTZXNzaW9uKCkge1xuICBsZXQgdmFsdWUgPSB7XG4gICAgc3RhcnQ6IG5ldyBEYXRlKCksXG4gICAgZW5kOiBudWxsLFxuICAgIGNvbW1lbnQ6IG51bGwsXG4gIH07XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBTZXNzaW9uICR7Y291bnRlcn1gLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICBzdGFydFNlc2guZGlzYWJsZWQgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBlbmRTZXNzaW9uKCkge1xuICAvLyBlbmRzIHN0dWR5IHNlc3NzaW9uLCB3cml0ZXMgZW5kIHRpbWUgdG8gb2JqZWN0LCBicmluZyBkb3duIGZvcm0gdG8gYWRkIHNlc3Npb24gY29tbWVudHNcbiAgY29uc29sZS5sb2coXCJlbmRTRVNIXCIpO1xuICBsZXQgc2Vzc2lvbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYFNlc3Npb24gJHtjb3VudGVyfWApKTtcbiAgc2Vzc2lvbltcImVuZFwiXSA9IG5ldyBEYXRlKCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBTZXNzaW9uICR7Y291bnRlcn1gLCBKU09OLnN0cmluZ2lmeShzZXNzaW9uKSk7XG4gIGNvdW50ZXIrKztcbiAgc3RhcnRTZXNoLmRpc2FibGVkID0gZmFsc2U7XG59XG5cbmV4cG9ydCB7IHNhdmVTZXNzaW9uLCBlbmRTZXNzaW9uIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
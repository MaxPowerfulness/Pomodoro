// Global
let counter = 0;
const formContainer = document.getElementById("formPopUp");
const form = document.querySelector("form");
const overlay = document.querySelector('#overlayDiv');
const formBtn = document.querySelector(".formBtn");
const textArea = document.querySelector("textarea");

// Functions
// Initializes the study session in local storage
function saveSession() {
  let value = {
    start: new Date(),
    end: null,
    comment: null,
  };
  localStorage.setItem(`Session ${counter}`, JSON.stringify(value));
}

// Ends study sesssion, writes end time to object, bring down form to add session comments
function endSession() {
  let session = JSON.parse(localStorage.getItem(`Session ${counter}`));
  session["end"] = new Date();
  localStorage.setItem(`Session ${counter}`, JSON.stringify(session));
  formContainer.style.display = "block";
  overlay.classList.toggle('overlay');
}

// Form
const formBtnEvent = form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevents page refresh on submit
  formContainer.style.display = "none";
  overlay.classList.toggle('overlay');
  let session = JSON.parse(localStorage.getItem(`Session ${counter}`));
  session["comment"] = textArea.value;
  localStorage.setItem(`Session ${counter}`, JSON.stringify(session));
  counter++;
});

export { saveSession, endSession, formBtnEvent };

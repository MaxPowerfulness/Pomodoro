// Global
let counter = 0;
const form = document.getElementById("formPopUp");
const overlay = document.querySelector('#overlayDiv');
const formBtn = document.querySelector(".formBtn");
const textArea = document.querySelector('textarea');

// Functions
function saveSession() {
  let value = {
    start: new Date(),
    end: null,
    comment: null,
  };
  localStorage.setItem(`Session ${counter}`, JSON.stringify(value));
}

function endSession() {
  // ends study sesssion, writes end time to object, bring down form to add session comments
  let session = JSON.parse(localStorage.getItem(`Session ${counter}`));
  session["end"] = new Date();
  localStorage.setItem(`Session ${counter}`, JSON.stringify(session));
  form.style.display = "block";
  overlay.classList.toggle('overlay');
}

// Form
formBtn.addEventListener("click", () => {
  form.display = "none";
  overlay.classList.toggle('.overlay');
  let session = JSON.parse(localStorage.getItem(`Session ${counter}`));
  session["comment"] = textArea.value;
  localStorage.setItem(`Session ${counter}`, JSON.stringify(session));
  counter++;
});

export { saveSession, endSession };

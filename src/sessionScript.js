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

export { saveSession, endSession };

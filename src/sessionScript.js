// Global
let counter = 0;

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
  counter++;
}

export { saveSession, endSession };

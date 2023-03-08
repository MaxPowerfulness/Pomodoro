// Global
let counter = 0;

// Functions
function saveSession() {
  let value = {
    start: new Date(),
    end: null,
    comment: null,
  };
  let session = localStorage.setItem(
    `Session ${counter}`,
    JSON.stringify(value)
  );
}

export { saveSession };

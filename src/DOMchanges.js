import { minutes, seconds } from "./timer.js";

// Global Variables
const quotes = document.getElementById("quotes");
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
  minutes.textContent = "25";
  seconds.textContent = "00";
}

// Sets the break time to 5 minutes
function setShortBreak() {
  minutes.textContent = "05";
  seconds.textContent = "00";
}

// Sets the break time to 20 minutes
function setLongBreak() {
  minutes.textContent = "20";
  seconds.textContent = "00";
}

// Chooses a random quote from the list of quotes
function changeQuote() {
  quotes.classList.add('text-fade');
  setTimeout( () => {
    quotes.textContent = quoteList[Math.floor(Math.random() * quoteList.length)];
    quotes.classList.add('text-show');
    quotes.classList.remove('text-fade')
  }, 1000);
};

export { setStudyTime, setShortBreak, setLongBreak, changeQuote, };

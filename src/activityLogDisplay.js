import { sessionCount } from "./sessionScript.js";

const gridContainer = document.querySelector("#gridContainer");
const headerList = ['sessionNum', 'start', 'end', 'comment'];

function displayActivity() {
    for (let i = 0; i < sessionCount.length; i++) {
        for (let j = 0; j < 4; i++) {
            let div = document.createElement('div');
            div.classList.add(headerList[j], 'item');
            if (j == 0) {
                div.textContent = localStorage.key(sessionCount[i]);
            } else {
                div.textContent = JSON.parse(localStorage.getItem(`Session ${sessionCount[i]}[${headerList[j]}]`));
            };
            console.log(div);
            console.log('gridContainer', gridContainer)
            gridContainer.appendChild(div);
        };
    }
    console.log("ran");
};

export { displayActivity };
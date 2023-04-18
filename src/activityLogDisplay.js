import { removeFormListener } from "./sessionScript.js";
const gridContainer = document.querySelector("#gridContainer");
const headerList = ['sessionNum', 'start', 'end', 'comment'];

async function displayActivity() {
    const { sessionCount } = await import("./sessionScript.js");
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
    console.log('ran');
};

window.addEventListener('load', () => {
    console.log(getEventListeners(form.submit).length);
    displayActivity();
    removeFormListener();
    
});

console.log('test');

const colorsList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'black'];

const button = document.getElementById('button');
const header = document.getElementById('header');
const modeSel = document.getElementById('mode');

const modesList = [300, 200, 100, 50];

let isActive = false;
let int = 0;


button.addEventListener('click', () => {

    let modeInt;
    let isQuestion = false;

    if (modeSel.value == 5) {
        modeInt = modesList[2];
        isQuestion = true;
    } else {
        modeInt = modesList[parseInt(modeSel.value) - 1];
    }

    if (!isActive) {
        isActive = true;
        changeTimer(modeInt, isQuestion);
    } else {
        isActive = false;
    }
    

});


function changeTimer(modeInt, isQuestion) {

    if (isActive) {

        if (isQuestion) {
            int = Math.floor(Math.random() * colorsList.length-1);
        }

        header.style.color = colorsList[int];

        if (int < colorsList.length-1) {
            int++;
        } else {
            int = 0;
        }

        setTimeout(() => {changeTimer(modeInt, isQuestion)}, modeInt);
    };
}
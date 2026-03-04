const equationInput = document.getElementById('equationInput');
const submitEquationBtn = document.getElementById('submitEquation');
const gridSizeInput = document.getElementById('gridSizeInput');
const gridStepInput = document.getElementById('gridStepInput');
const chart = document.getElementById('chart');

let placeholderEquation = "0.5(2x + 4)";//"0.5(2x + 4)";
let placeholderGridSize = 10;
let placeholderGridStep = 0.25;
equationInput.placeholder = placeholderEquation;
gridSizeInput.value = placeholderGridSize;
gridStepInput.value = placeholderGridStep;

let GRIDSIZE = placeholderGridSize;
let GRIDSTEP = placeholderGridStep;
chart.style.setProperty('--grid-size', (GRIDSIZE/GRIDSTEP));
setup();
graph(placeholderEquation);

submitEquationBtn.addEventListener('click', () => {
    chart.innerHTML = ""; 
    GRIDSIZE = parseInt(gridSizeInput.value);
    GRIDSTEP = parseFloat(gridStepInput.value);
    chart.style.setProperty('--grid-size', (GRIDSIZE/GRIDSTEP));
    setup();
    graph(equationInput.value.toLowerCase());
});

function graph(inputString) {
    const equationString = formatEquation(inputString);
    if (equationInput !== null) {
        displayGraph(equationString);
    }
}

function formatEquation(inputString) {
    const charList = inputString.replace(/\s/g, "").split("");
    const specialCharacterList = ["e", "π"];
    let equationString = "";
    
    for (let i = 0; i < charList.length; i++) {
        if (charList[i] === "x") {
            if (i > 0 && isNotMathOperator(charList[i - 1])) {
                equationString += "*";
            }
            equationString += "i";
        } else if (i > 0 && charList[i] === "(" && isNotMathOperator(charList[i - 1])) {
            equationString += "*(";
        } else if (charList[i] === "^") {
            equationString += "**";
        } else if (charList[i] === "π") {
            if (i > 0 && isNotMathOperator(charList[i - 1])) {
                equationString += "*";
            }
            equationString += "(3.1415926535)";
        } else if (charList[i] === "e") {
            if (i > 0 && isNotMathOperator(charList[i - 1])) {
                equationString += "*";
            }
            equationString += "(2.718281828459045)";
        }
        else {
            equationString += charList[i];
        }
    }

    console.log(equationString);

    try {
        let i = 1;
        eval(equationString);
        return equationString;
    } catch (e) {
        alert("Invalid format. Error: " + e);
        return null;
    }
}

function isNotMathOperator(char) {
    return (char !== "*" && char !== "(" && char !== "/" && char !== "+" && char !== "-" && char !== "^");
}

function displayGraph(equationString) {
    for (let i=0; i < GRIDSIZE + 1 * GRIDSTEP; i += GRIDSTEP) {
        const output = eval(equationString);
        const marker = document.getElementsByClassName(`vertical-line ${i}`)[0].getElementsByClassName('column-marker')[0];
        marker.style.bottom = `calc(${output} * (var(--box-size)) + var(--marker-width)/ -2)`;
        if (!Number.isInteger(i)) {
            marker.style.background = "#7d011e";
        }
        console.log(output);
        if (output > GRIDSIZE / GRIDSTEP || output < 0) {
            marker.style.visibility = "hidden";
        } else {
            marker.style.visibility = "visible";
        }
    }
}

function updateMarker(columnElement, height) {
    const marker = columnElement.getElementsByClassName('column-marker')[0];
    marker.style.bottom = `calc(${height} * (var(--box-size)) + var(--marker-width)/ -2)`;
}

function setup() {
    for (let i=0; i < GRIDSIZE + 1 * GRIDSTEP; i += GRIDSTEP) {        
        const vertLine = document.createElement('div');
        vertLine.className = ('vertical-line ' + i);
        if (i !== GRIDSIZE) {
            for (let j=0; j < GRIDSIZE + 1; j += GRIDSTEP) {
                vertLine.innerHTML += `<div class="horizontal-line ${j}"></div>`;
            }
        }
        vertLine.innerHTML += `<div class="column-marker"></div>`;
        chart.appendChild(vertLine);
    }

    //graph(placeHolderEquation);
}
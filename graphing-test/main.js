const equationInput = document.getElementById('equationInput');
const submitEquationBtn = document.getElementById('submitEquation');
const chart = document.getElementById('chart');
let placeHolderEquation = "0.5(2x + 4)";
equationInput.placeholder = placeHolderEquation;
setup();

submitEquationBtn.addEventListener('click', () => {
    chart.innerHTML = "";
    setup();
    graph(equationInput.value);
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
        alert("Invalid format");
        return null;
    }
}

function isSpecialCharacter(input, list) {
    for (const char of list) {
        if (list === char) {
            return true;
        }
    }
    return false;
}

function isNotMathOperator(input) {
    return (input !== "*" && input !== "(" && input !== "/" && input !== "+" && input !== "-" && input !== "^");
}

function displayGraph(equationString) {
    for (let i=0; i < 17; i++) {
        const output = eval(equationString);
        const marker = document.getElementsByClassName(`chart-column ${i}`)[0].getElementsByClassName('column-marker')[0];
        marker.style.bottom = `calc(${output} * (var(--box-size)) + var(--marker-width)/ -2)`;
        console.log(output);

        if (output > 16 || output < 0) {
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
    for (let i=0; i < 17; i++) {        
        const column = document.createElement('div');
        column.className = ('chart-column ' + i);
        column.innerHTML += `
            <div class="chart-box"></div>
            <div class="chart-box"></div>
            <div class="chart-box"></div>
            <div class="chart-box"></div>
            <div class="chart-box"></div>
            <div class="chart-box"></div>
            <div class="chart-box"></div>
            <div class="chart-box"></div>
            <div class="chart-box"></div>
            <div class="chart-box"></div>
            <div class="chart-box"></div>
            <div class="chart-box"></div>
            <div class="chart-box"></div>
            <div class="chart-box"></div>
            <div class="chart-box"></div>
            <div class="chart-box"></div>
            <div class="column-marker"></div>
        `;
        chart.appendChild(column);
    }

    graph(placeHolderEquation);
}
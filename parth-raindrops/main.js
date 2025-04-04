const counterInput = document.getElementById('counterInput');
const submitInputBtn = document.getElementById('submitInput');
const counterLabelVal = document.getElementById('currentRate');
const raindropContainer = document.getElementsByClassName('raindrops-container')[0];

let freqPerMin = 10000;
counterLabelVal.innerHTML = freqPerMin;

submitInputBtn.addEventListener('click', () => {
    const inputVal = counterInput.value;

    if (inputVal === "") {
        alert('nope');
    } else if (inputVal > 100000) {
        alert('limit is 100,000');
    } else {
        freqPerMin = inputVal;
        counterLabelVal.innerHTML = freqPerMin;
    }
});

function rainDrop() {
    const drop = document.createElement('div');
    drop.classList.add('raindrop');
    drop.style.left = `${Math.floor(Math.random() * 100)}%`;
    drop.style.background = "lightblue";
    raindropContainer.appendChild(drop);
    setTimeout(() => {
        drop.remove();
    }, 500);
}

function rain() {
    setTimeout(() => {
        rainDrop();
        rain()
    }, 60*1000/freqPerMin);
}

rain();
const raindropContainer = document.getElementsByClassName('raindrops-container')[0];

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

function rain(frequencyPerMinute) {
  setTimeout(() => {
    rainDrop();
    rain(frequencyPerMinute)
  }, 60*1000/frequencyPerMinute);
}

rain(10000);

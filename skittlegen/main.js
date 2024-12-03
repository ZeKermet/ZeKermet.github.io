const colorsList = ['red', 'orange', '#f2d116', 'green', 'purple'];

const skittle = document.getElementById('circle');
const button = document.getElementById('select');

button.addEventListener('click', () => {
  let colorPicker = Math.floor(Math.random() * colorsList.length) ;
  skittle.style.background = colorsList[colorPicker];
});
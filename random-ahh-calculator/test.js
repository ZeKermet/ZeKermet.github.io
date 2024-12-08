const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');
const submit = document.getElementById('add');
const output = document.getElementById('result');

submit.addEventListener('click', () => {
    if (inputTwo.value !== "" && inputOne.value !== "") {
        output.innerHTML = parseFloat(inputOne.value) + parseFloat(inputTwo.value);
    } else {
        alert("Enter Numbers");
    }
});
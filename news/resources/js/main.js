const openNavIcon = document.getElementById('open-navbar');
const closeNavIcon = document.getElementById('close-navbar');

const navbar = document.getElementById('navbar');

// ------- Page Setup Booleans -------

// ------- Event Listeners -------
openNavIcon.addEventListener('click', () => {
    navbar.style.right = "0px";
});
closeNavIcon.addEventListener('click', () => {
    navbar.style.right = "-300px";
});
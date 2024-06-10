const openNav = document.getElementById('openNavbarBtn');
const closeNav = document.getElementById('closeNavbarButton');
const navbar = document.getElementById('navbar');

const searchBtn = document.getElementById('openHoverSearchBtn');
const closeSearchBtn = document.getElementById('closeHoverSearchBtn');
const hoverSearch = document.getElementsByClassName('hover-search-background')[0];
const hoverSearchContainer = document.getElementById('hoverSearchBar');

let mouseOverHover = false;
let mouseOverNavbar = false;

openNav.addEventListener('click', () => {
    navbar.style.right = "0px";
});

closeNav.addEventListener('click', () => {
    let width = parseInt(getComputedStyle(navbar).width);
    navbar.style.right = `-${width}px`;
});


searchBtn.addEventListener('click', () => {
    if (parseInt(getComputedStyle(hoverSearchContainer).width) > 556) {
        hoverSearch.style.visibility = "visible";
        hoverSearch.style.opacity= "1";
    } else {
        // Load to the browse page
    }
});

closeSearchBtn.addEventListener('click', () => {
    hoverSearch.style.opacity= "0";
    hoverSearch.style.visibility = "hidden";
});


hoverSearchContainer.addEventListener('mouseover', () => {
    mouseOverHover = true;
});
hoverSearchContainer.addEventListener('mouseout', () => {
    mouseOverHover = false;

});

hoverSearch.addEventListener('click', () => {
    if (!mouseOverHover) {
        hoverSearch.style.opacity= "0";
        hoverSearch.style.visibility = "hidden";
    }
})



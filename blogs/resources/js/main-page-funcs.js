const openNav = document.getElementById('openNavbarBtn');
const closeNav = document.getElementById('closeNavbarButton');
const navbar = document.getElementById('navbar');

const navSearchBtn = document.getElementById('openHoverSearchBtn');
const closeSearchBtn = document.getElementById('closeHoverSearchBtn');
const hoverSearch = document.getElementsByClassName('hover-search-background')[0];
const hoverSearchContainer = document.getElementById('hoverSearchBar');

const navUserContainer = document.getElementById('user-info-nav');
const userDropdownMenu = document.getElementsByClassName('user-dropdown-menu')[0];


// ---------------------------------------------------------------------------
let mouseOverHvrSrch = false;

openNav.addEventListener('click', () => {
    if (!navbar.classList.contains('opened')) {
        navbar.classList.add('opened');
    }
});

closeNav.addEventListener('click', () => {
    if (navbar.classList.contains('opened')) {
        navbar.classList.remove('opened');
    }
});


if (navSearchBtn) {
    navSearchBtn.addEventListener('click', () => {
        if (parseInt(getComputedStyle(hoverSearchContainer).width) > 556) { // Search bar appears too small starting at 556px width
            if (!hoverSearch.classList.contains('opened')) {
                hoverSearch.classList.add('opened');
            }  
        } else {
            window.location.href = "./blogs.html";
        }
    });

    window.addEventListener('resize', () => {
        if (parseInt(getComputedStyle(hoverSearchContainer).width) < 556) {
            hoverSearch.classList.remove('opened');
        }
    });

    closeSearchBtn.addEventListener('click', () => {
        if (hoverSearch.classList.contains('opened')) {
            hoverSearch.classList.remove('opened');
        }  
    });

    hoverSearchContainer.addEventListener('mouseover', () => {
        mouseOverHvrSrch = true;
    });
    hoverSearchContainer.addEventListener('mouseout', () => {
        mouseOverHvrSrch = false;
    
    });

    hoverSearch.addEventListener('click', () => {
        if (!mouseOverHvrSrch && hoverSearch.classList.contains('opened')) {
            hoverSearch.classList.remove('opened');
        }
    });
}


navUserContainer.addEventListener('click', () => {
    if (!userDropdownMenu.classList.contains('opened')) {
        userDropdownMenu.classList.add('opened');
    } else {
        userDropdownMenu.classList.remove('opened');
    }
});

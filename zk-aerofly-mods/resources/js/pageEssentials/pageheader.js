const pageHeader = document.getElementById('page-header');

pageHeader.innerHTML += `
        <div id="page-header-container">
            <a href="index.html"><div id="logo">
                <div id="logo-container">
                    <img src="./resources/images/pageEssentials/ytlogo.jpg" />
                </div>
                <h3 id="logo-text" class="secondary-font">ZK MODS</h3>
            </div></a>

            <nav id="navlinks">
                <ul>
                    <a href="index.html"><li class="navlink">Files</li></a>
                    <a href="#"><li class="navlink">Changelog</li></a>
                </ul>
            </nav>

            <div id="mobile-page-header-dropdown" class="mobile-page-header-dropdown">
                <p class="mobile-page-header-dropdown-p">Pages <i class="fa-solid fa-chevron-down dropdown-arrow"></i></p>
            </div>
        </div>
`;


function switchNavOpened() {

}

pageHeader.addEventListener('click', (e) => {
    const classList = e.target.classList;
    if (document.getElementById('mobile-page-header-dropdown').contains(e.target)) {
        pageHeader.classList.toggle('navopened');
    }
});

document.addEventListener('click', (e) => {
    if (!document.getElementById('mobile-page-header-dropdown').contains(e.target)) {
        pageHeader.classList.remove('navopened');
    }
});
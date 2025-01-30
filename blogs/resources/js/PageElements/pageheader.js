// Imports the page header to all pages with this scripted
const pageHeader = document.getElementById('page-header');

pageHeader.innerHTML += `
    <div class="header-container logged-in">

        <a href="index.html"><h1 id="logo">CKINTS</h1></a>

        <nav id="navbar">
            <i id="closeNavbarButton" class="fa-solid fa-right-from-bracket"></i>

            <h4 class="mobile-nav-header">Pages</h4>
            <ul>
                ${addPages()}

                <div class="mobile-nav-acc-container">
                    <!-- Container displayed if not logged in -->
                    <div class="header-guest-container-mobile">
                        <a href="login.html" id="headerLoginButton-mobile" class="button">Log in</a>
                        <a href="register.html" id="headerCreateAccButton-mobile" class="button">Sign Up</a>
                    </div>

                    <div class="header-loggedin-info-mobile">        
                        <a href="user.html">
                            <div id="user-info-nav-mobile">
                                <div class="user-profile-img-container">
                                    <img class="user-profile-img" src="../resources/Images/other-blog-images/ytlogo.jpg" />
                                </div>
                                <p>Username</p>
                            </div>
                        </a>

                        <div class="nav-login-buttons-container-mobile">
                            <a href="articleEditor.html" id="createBlogButton-mobile" class="button">Create <i class="fa-solid fa-plus"></i></a>
                            <a id="logOutButton-mobile" class="button">Log Out</a>
                        </div>
                    </div>
                </div>
            </ul>
        </nav>
        
        <div class="rightside-nav">
            <!-- I want the next two parent elements to be displayed without sandwich icon on mobile -->
            ${addSearchIcon()}

            <div class="header-acc-container">
                <!-- Container displayed if logged in -->
                <div class="header-loggedin-info">
                    <a href="articleEditor.html" id="createBlogButton" class="button">Create <i class="fa-solid fa-plus"></i></a>

                    <div id="user-info-nav">
                        <div class="user-profile-img-container">
                            <img class="user-profile-img" src="../resources/Images/other-blog-images/ytlogo.jpg" />
                        </div>
                        <p>Username</p>

                        <div class="user-dropdown-menu">
                            <a href="user.html"><p id="navProfileButton"><i class="fa-solid fa-user"></i> Profile</p></a>
                            <a href="accountSettings.html"><p id="navUserSettingsButton"><i class="fa-solid fa-gear"></i> Settings</p></a>
                            <p id="navLogoutButton"><i class="fa-solid fa-right-to-bracket"></i> Log Out</p>
                        </div>
                    </div>
                </div>

                <!-- Container displayed if not logged in -->
                <div class="header-guest-container">
                    <a href="login.html" id="headerLoginButton" class="button">Log in</a>
                    <a href="register.html" id="headerCreateAccButton" class="button">Sign Up</a>
                </div>
            </div>

            <i id="openNavbarBtn" class="fa-solid fa-bars"></i>
        </div>
            
    </div>
  
`;

function addPages() {
    let pagesString = '';

    if (pageHeader.classList.contains('index-page')) {
        pagesString += `<a href="index.html" class="navlink current-page"><li>Home</li></a>`;
    } else {
        pagesString += `<a href="index.html" class="navlink"><li>Home</li></a>`;
    }

    if (pageHeader.classList.contains('search-page-header')) {
        pagesString += `<a href="blogs.html" class="navlink current-page"><li>Discover</li></a>`;
    } else {
        pagesString += `<a href="blogs.html" class="navlink"><li>Discover</li></a>`;
    }

    if (pageHeader.classList.contains('contact-page')) {
        pagesString += `<a href="contact.html" class="navlink current-page"><li>Contact</li></a>`;
    } else {
        pagesString += `<a href="contact.html" class="navlink"><li>Contact</li></a>`
    }

    return pagesString;
}

function addSearchIcon() {
    if (!pageHeader.classList.contains('search-page-header')) {
        return `<i id="openHoverSearchBtn" class="fa-solid fa-magnifying-glass"></i>`;
    } else {
        return ``;
    }
}
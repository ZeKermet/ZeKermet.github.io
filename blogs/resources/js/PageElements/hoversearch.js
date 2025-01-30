// Inserts a hovering searchbar in the <main> element with this scripted
const mainElement = document.getElementsByTagName('main')[0];

mainElement.innerHTML += `
    <div class="hover-search-background">
        <div id="hoverSearchBar">

            <i id="closeHoverSearchBtn" class="fa-solid fa-x"></i>

            <h2>Search Blogs</h2>

            <div class="hover-searchbar-content">

                <div class="searchbar">
                    <div class="searchkeywords-wrapper">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input name="keywords" id="keywords" placeholder="Enter Keywords" />
                    </div>
    
                    <select name="category" id="category">
                        <option value="">Category</option>
                        <option value="">Gaming</option>
                        <option value="">Foods</option>
                        <option value="">Delicious</option>
                    </select>
    
                    <button id="submitSearchInput">Search</button>
                </div>
            </div>
        </div>
    </div>
`;
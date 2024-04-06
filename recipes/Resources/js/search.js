// ------------------- URL SETUP -------------------
const originalURL = window.location.origin + window.location.pathname;
const searchParameters = new URLSearchParams(window.location.search);

const keywordsParam = searchParameters.get("keywords");
const categoryParam = searchParameters.get("category");
const ratingsParam = searchParameters.get("ratings");
const pageNumParam = searchParameters.get("page");

// ------------------- DOCUMENT SETUP -------------------
const searchBar = document.forms['search'];
const searchList = document.getElementById('search').querySelector('.recipes-list');
const pageNumbers = document.querySelector(".pages-list ul");

let currentPage = parseInt(pageNumParam);

if (searchParameters.toString() === "") {
    currentPage = 1;
    setupSearchList(recipesData);
} else {
    searchBar.querySelector('#keywords-search').value = keywordsParam;
    searchBar.querySelector('#category-search').value = categoryParam;
    searchBar.querySelector('#ratings-search').value = ratingsParam;
    
    search(keywordsParam.toLowerCase(), categoryParam.toLowerCase(), ratingsParam, recipesData);
}


// ------------------- USER INPUTS -------------------
searchBar.addEventListener('submit', (e) => {
    e.preventDefault();
    const keywordsInput = searchBar.querySelector('#keywords-search').value;
    const categoryInput = searchBar.querySelector('#category-search').value;
    const ratingsInput = searchBar.querySelector('#ratings-search').value;

    const searchURLData = {
        keywords: keywordsInput,
        category: categoryInput,
        ratings: ratingsInput,
        page: currentPage
    }

    const newSearchParams = new URLSearchParams(searchURLData);
    const newURL = originalURL + `?${newSearchParams}`;
    window.location.href = newURL;
});

function search(keywords, category, ratings, data) {
    let searchDataList = [];
    for (i=0; i<data.length; i++) {
        searchDataList[i] = data[i];
    }

    let list = [];

    if (keywords === "" && category === "" && ratings === "") {
        setupSearchList(data);
    } else {
        if (keywords !== "") {
            if (category === "" && ratings === "") {
                searchDataList.forEach(recipe => {
                    if (searchKeywords(recipe, keywords)) {
                        list.push(recipe);
                    }
                });
            } else if (category !== "" && ratings === "") {
                searchDataList.forEach(recipe => {
                    if ((searchKeywords(recipe, keywords) && searchCategory(recipe, category))) {
                        list.push(recipe);
                    }
                });
            } else if (category === "" && ratings !== "") {
                searchDataList.forEach(recipe => {
                    if ((searchKeywords(recipe, keywords) && searchRatings(recipe, ratings))) {
                        list.push(recipe);
                    }
                });
            }
        } else if (category !== "") {
            if (keywords === "" && ratings === "") {
                searchDataList.forEach(recipe => {
                    if (searchCategory(recipe, category)) {
                        list.push(recipe);
                    }
                });
            } else if (keywords !== "" && ratings === "") {
                searchDataList.forEach(recipe => {
                    if ((searchCategory(recipe, category) && searchKeywords(recipe, keywords))) {
                        list.push(recipe);
                    }
                });
            } else if (keywords === "" && ratings !== "") {
                searchDataList.forEach(recipe => {
                    if ((searchCategory(recipe, category) && searchRatings(recipe, ratings))) {
                        list.push(recipe);
                    }
                });
            } 
        } else if (ratings !== "") {
            if (keywords === "" && category === "") {
                searchDataList.forEach(recipe => {
                    if (searchRatings(recipe, ratings)) {
                        list.push(recipe);
                    }
                });
            } else if (keywords !== "" && category === "") {
                searchDataList.forEach(recipe => {
                    if ((searchRatings(recipe, ratings) && searchKeywords(recipe, keywords))) {
                        list.push(recipe);
                    }
                });
            } else if (keywords === "" && category !== "") {
                searchDataList.forEach(recipe => {
                    if ((searchRatings(recipe, ratings) && searchCategory(recipe, category))) {
                        list.push(recipe);
                    }
                });
            }
        } else if (keywords !== "" && category !== "" && ratings !== "") {
            searchDataList.forEach(recipe => {
                if ((searchRatings(recipe, ratings) && searchKeywords(recipe, keywords) && searchCategory(recipe, category)) 
                    || searchTags(recipe["tags"], keywords, category)) {
                    list.push(recipe);
                }
            });
        }

        if (list.length === 0) {
            console.log("Nothing to display");
            searchList.innerHTML = "";
        } else {
            setupSearchList(list);
        }
        
    }
}

function searchKeywords(recipe, keywordValue) {
    if (keywordValue !== "" && (recipe["title"].toLowerCase().includes(keywordValue) || recipe["description"].toLowerCase().includes(keywordValue) || 
        recipe["publisher"].toLowerCase().includes(keywordValue) || searchTags(recipe["tags"], keywordValue))) {
            return true;
    }
    return false;
}

function searchCategory(recipe, categoryValue) {
    if (categoryValue !== "" && (recipe["title"].toLowerCase().includes(categoryValue) || recipe["description"].toLowerCase().includes(categoryValue)
    || searchTags(recipe["tags"], keywords, category))) {
            return true;
    }
    return false;
}

function searchRatings(recipe, ratings) {
    if (ratings !== "" && recipe["rating"] >= ratings) {
        return true;
    }
    return false;
}

function searchTags(tagsList, value) {
    const tagList = [];
    tagsList.forEach(tag => {
        if (tag.toLowerCase().includes(value)) {
            tagList.push(tag);
        }
    });
    return (tagList.length > 0);
}

// -------------------------------------------- 
function setupSearchList(list) {
    searchList.innerHTML = "";

    const searchData = list;

    let pages = 1;
    let listLength = searchData.length;
    while (listLength > 6) {
        pages++;
        listLength = listLength - 6;
    }

    // ------------------------------ Page buttons Constructor ------------------------------
    if (currentPage > 3) {
        pageNumbers.innerHTML += `<li class="search-page-changer first-page" onclick="returnFirstPage()"><i class="fa-solid fa-angles-left"></i></li>`;
    }

    if (currentPage > 1) {
        pageNumbers.innerHTML += `<li class="search-page-changer" onclick="previousPage()"><i class="fa-solid fa-chevron-left"></i></li>`;
    }

    if (pages <= 5) {
        pageNumbersElementConstructor(1, pages+1, pageNumbers);

    } else if (pages > 5) {

        if (currentPage < 3) {
            pageNumbersElementConstructor(1, 6, pageNumbers);

        } else if (currentPage >= 3 && currentPage < pages-2) {
            pageNumbersElementConstructor(currentPage-2, currentPage+3, pageNumbers);

        } else if (currentPage >= pages-2) {
            pageNumbersElementConstructor(pages-4, pages+1, pageNumbers);

        }

    }

    if (currentPage < pages) {
        pageNumbers.innerHTML += `<li class="search-page-changer" onclick="nextPage()"><i class="fa-solid fa-chevron-right"></i></li>`;
    }

    // ------------------------------ Loading recipes per each page ------------------------------

    let index = (6*currentPage)-6;
    for (let i = index; i < index + 6; i++) {
        if ((searchData[i]) === undefined) {
            break;
        } else {
            displaySearch(searchData[i]);
        } 
    }     
}

function pageNumbersElementConstructor(lowerBound, upperBound, pageNumbers) {
    for (let i=lowerBound; i < upperBound; i++) {
        if (i === currentPage) {
            pageNumbers.innerHTML += `<li class="current-search-page">${i}</li>`;
        } else {
            pageNumbers.innerHTML += `<li class="" onclick="goToPage(${i})">${i}</li>`;
        }
    }
}

function goToPage(number) {
    currentPage = number;
    createNewUrlFromPageNum();
}

function previousPage() {
    currentPage--;
    createNewUrlFromPageNum();
}

function nextPage() {
    currentPage++;
    createNewUrlFromPageNum();
}

function returnFirstPage() {
    currentPage = 1;
    createNewUrlFromPageNum();
}

function createNewUrlFromPageNum() {
    const searchURLData = {
        keywords: keywordsParam,
        category: categoryParam,
        ratings: ratingsParam,
        page: currentPage
    }

    if (searchParameters.toString() === "") {
        Object.keys(searchURLData).forEach(key => {
            searchURLData[key] = "";
        });
        searchURLData.page = currentPage;
    }

    const newSearchParams = new URLSearchParams(searchURLData);
    const newURL = originalURL + `?${newSearchParams}`;
    window.location.href = newURL;
}

function displaySearch(recipe) {
    let rating = recipe["rating"];
    let ratingString = "";
    for (i=0; i < 5; i++) {
        if (rating < 0.5) {
            ratingString += `<i class="fa-regular fa-star"></i>`;
            rating = 0;
        } else if (rating >= 0.5 && rating < 1) {
            ratingString += `<i class="fa-regular fa-star-half-stroke"></i>`;
            rating = 0;
        } else {
            ratingString += `<i class="fa-solid fa-star"></i>`;
            rating -= 1;
        }
    }

    let tagsString = "";
    recipe["tags"].forEach(tag => {
        tagsString += `<a class="recipe-tag" href="#">${tag}</a>`
    });

    searchList.innerHTML += `
    <div class="recipe">
        <div class="image-container"><div class="image-container-continued"><img src="${recipe["image"]}"></div></div>
        <div class="recipe-details-container">
            <div class="recipe-content-container">
                <h3 class="recipe-title size-h2">${recipe["title"]}</h3>
                <h6 class="recipe-description size-p">${recipe["description"]}</h6>
                <div class="recipe-publish-info">
                    <p class="publisher"><i class="fa-solid fa-user"></i>${recipe["publisher"]}</p>
                    <p class="date-published"><i class="fa-solid fa-calendar"></i>${recipe["date-published"]}</p>
                </div>
            </div>
            <div class="recipe-ratings">
                ${ratingString}
            </div>
            <div class="recipe-tags-container size-p-small">
                ${tagsString}
            </div>
            <a href="#" class="button view-recipe">View Recipe</a>
        </div>
    </div>
    `;
}
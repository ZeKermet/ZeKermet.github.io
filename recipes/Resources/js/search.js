// ------------------- URL SETUP -------------------
const originalURL = window.location.origin + window.location.pathname;
const searchParameters = new URLSearchParams(window.location.search);

const keywordsParam = searchParameters.get("keywords");
const categoryParam = searchParameters.get("category");
const ratingsParam = searchParameters.get("ratings");

// ------------------- DOCUMENT SETUP -------------------
const searchBar = document.forms['search'];
const searchList = document.getElementById('search').querySelector('.recipes-list');
const pageNumbers = document.querySelector(".pages-list ul");

searchBar.addEventListener('submit', (e) => {
    e.preventDefault();
    const keywordsInput = searchBar.querySelector('#keywords-search').value;
    const categoryInput = searchBar.querySelector('#category-search').value;
    const ratingsInput = searchBar.querySelector('#ratings-search').value;

    const searchURLData = {
        keywords: keywordsInput,
        category: categoryInput,
        ratings: ratingsInput
    }

    const newSearchParams = new URLSearchParams(searchURLData);
    const newURL = originalURL + `?${newSearchParams}`;
    window.location.href = newURL;
})

// For the search results. Starts at page 1
let currentPage = 1;

if (searchParameters.toString() === "") {
    setupSearchList(recipesData);
} else {
    searchBar.querySelector('#keywords-search').value = keywordsParam;
    searchBar.querySelector('#category-search').value = categoryParam;
    searchBar.querySelector('#ratings-search').value = ratingsParam;
    
    search(keywordsParam.toLowerCase(), categoryParam.toLowerCase(), ratingsParam, recipesData);
}

// ------------------- USER INPUTS -------------------
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

    // We'll do this for the buttons:
    // I want all these situations for the arrows:
    //  --- "1" 2 3 4 5 >
    //  --- < 1 "2" 3 4 5 >
    //  --- < 1 2 "3" 4 5 >
    //  --- << < 2 3 "4" 5 6 > etc.
    //  --- << < 3 4 "5" 6 7 >

    // ------------------------------ WIP ------------------------------
    
    pageNumbers.innerHTML += `<li class="search-page-changer"><i class="fa-solid fa-chevron-left"></i></li>`;
    for (let i=1; i < pages+1; i++) {
        if (i === currentPage) {
            pageNumbers.innerHTML += `<li class="current-search-page">${i}</li>`;
        } else {
            pageNumbers.innerHTML += `<li class="">${i}</li>`;
        }
    }
    pageNumbers.innerHTML += `<li class="search-page-changer"><i class="fa-solid fa-chevron-right"></i></li>`;


    let index = (6*currentPage)-6;
    for (let i = index; i < index + 6; i++) {
        if ((searchData[i]) == null) {
            break;
        } else {
            displaySearch(searchData[i]);
        } 
    }     
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
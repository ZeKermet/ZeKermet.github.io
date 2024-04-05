// ------------------- DOCUMENT SETUP -------------------

const slideLeftButtons = document.querySelectorAll(".recipes-category .recipes-slide-left");
const slideRightButtons = document.querySelectorAll(".recipes-category .recipes-slide-right");

const featuredRecipesData = [];
const featuredRecipesList = document.getElementById('featured-recipes').querySelector('.featured-recipes-list');

const recipesCategoryOneData = [];
const recipesCategoryOneList = document.getElementById('recipes-category-1').querySelector('.recipes-list');

const recipesCategoryTwoData = [];
const recipesCategoryTwoList = document.getElementById('recipes-category-2').querySelector('.recipes-list');

const recipesCategoryThreeData = [];
const recipesCategoryThreeList = document.getElementById('recipes-category-3').querySelector('.recipes-list');

// The "recipesData" variable is already defined in js/data.js
setupRecipes(recipesData);

let isScrolling = false;
slideLeftButtons.forEach(button => {
    button.addEventListener("click", () => {
        const recipeList = button.parentElement.querySelector(".recipes-list");
        if (isScrolling === false) {
            scrollRecipe("left", recipeList);
        }
    });
    button.style.visibility = "hidden";
});

slideRightButtons.forEach(button => {
    button.addEventListener("click", () => {
        const recipeList = button.parentElement.querySelector(".recipes-list");
        if (isScrolling === false) {
            scrollRecipe("right", recipeList);
        }
    });
});

document.querySelectorAll('.recipes-list').forEach(listElement => {
    const wrapper = listElement.parentElement;
    wrapper.addEventListener("scroll", () => {
        handleScrollArrows(wrapper);
    })
});

function setupRecipes(recipesData) {
    const dataList = recipesData;
    const featuredList = [];
    for (i = 0; i < 3; i++) {
        let greatestRating = 0;
        let featuredRecipe;
        dataList.forEach(recipe => {
            if (recipe["rating"] >= greatestRating) {
                featuredRecipe = recipe;
                greatestRating = featuredRecipe["rating"];
            }
        });
        featuredList.push(featuredRecipe);
        index = dataList.indexOf(featuredRecipe);
        dataList.splice(index, 1);
    }
    constructRecipeListElement(featuredList, featuredRecipesList);

    const catOneList = [];
    for (i = 0; i < 4; i++) {
        catOneList.push(dataList[i]);
        index = dataList.indexOf(dataList[i]);
        dataList.splice(index, 1);
    }
    constructRecipeListElement(catOneList, recipesCategoryOneList);

    const catTwoList = [];
    for (i = 0; i < 6; i++) {
        catTwoList.push(dataList[i]);
        index = dataList.indexOf(dataList[i]);
        dataList.splice(index, 1);
    }
    constructRecipeListElement(catTwoList, recipesCategoryTwoList);
}

function constructRecipeListElement(list, recipeListElement) {
    list.forEach(recipe => {
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
        
        recipeListElement.innerHTML += `
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
    });
}

// ------------------- USER INPUTS + OTHERS -------------------
function scrollRecipe(direction, recipeList) {
    isScrolling = true;
    const wrapper = recipeList.parentElement;

    const recipeWidth = parseInt(getComputedStyle(document.querySelector('.recipes-category')).getPropertyValue('--recipe-width-number'));
    const gap = parseInt(getComputedStyle(document.querySelector('.recipes-category')).getPropertyValue('--recipes-gap-number'));

    const width = gap + recipeWidth;

    let scrollAmount;

    if (direction === "left") {
        scrollAmount = width * -1;
    } else if (direction === "right") {
        scrollAmount = width * 1;
    };
    wrapper.scrollBy({left: scrollAmount, behavior: "smooth"});

    setTimeout(() => { isScrolling = false; }, 400);
}  

function handleScrollArrows(wrapper) {
    const leftArrow = wrapper.parentElement.querySelector('.recipes-slide-left');
    const rightArrow = wrapper.parentElement.querySelector('.recipes-slide-right');
    const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;

    leftArrow.style.visibility = wrapper.scrollLeft <= 0 ? "hidden" : "visible";
    rightArrow.style.visibility = wrapper.scrollLeft >= maxScrollLeft ? "hidden" : "visible";
}

// ---------- PAGE SETUP ----------- 

const articlesData = ArticlesData();


// ---------- PAGE ELEMENTS ----------- 

const articlesSearch = document.getElementById('searchArticles');
const articlesList = document.getElementById('articles-list');
const showMoreBtn = document.getElementsByClassName('show-more-list')[0];


// ---------- MODS LIST BUILDER ----------- 

filterArticles(articlesSearch.value);

articlesSearch.addEventListener('input', () => {
    articlesList.innerHTML = "";
    filterArticles(articlesSearch.value);
});


function filterArticles(query) {
    query = query.toLowerCase();
    if (query === "" || query === undefined) {
        constructArticles(articlesData);
        return;
    }

    const newData = [];

    for (const article of articlesData) {
        if (article.title.toLowerCase().includes(query)) {
            newData.push(article);
        } else {
            for (const tag of article.tags) {
                if (tag.toLowerCase().includes(query)) {
                    newData.push(article);
                    break;
                }
            }
        }
    }

    constructArticles(newData);
}


function constructArticles(data) {
    for (const article of data) {
        let tagsStr = "";
        for (const listItem of article.tags) {
            if (article.tags.length > 4 && listItem === article.tags[4]) break;
            tagsStr += `<div class="tag"><p>${listItem}</p></div>`;
        }

        let title = article.title;
        if (title.length > 55) {
            title = title.substring(0, 50) + " ...";
        }

        articlesList.innerHTML += `
            <div class="article">
                <div class="article-image">
                    <img src="${databaseImagesPath}${article.articleImage}" />
                </div>

                <div class="article-content">
                    <a href="article.html?articleid=${article.id}"><h6 class="article-title">${title}</h6></a>
                    <div class="article-tags">
                        ${tagsStr}
                    </div>
                    <div class="publish-info">
                        <div class="author"><i class="fa-regular fa-user"></i> ${article.author}</div>
                        <div class="separator"></div>
                        <div class="date-published"><i class="fa-regular fa-calendar"></i> ${article.datePublished}</div>
                    </div>

                    <div class="article-update-date-container">
                        <div>
                            <p>Last Updated: <span class="update-date">${article.lastUpdated}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}



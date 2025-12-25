// ---------- PAGE SETUP ----------- 

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const articleID = urlParams.get("articleid");

const modData = getModArticle(parseInt(articleID));

document.getElementsByTagName('title')[0].innerHTML += modData.title;


// ---------- ARTICLE ELEMENTS ----------- 
const articleTitle = document.getElementById('article-title');
const articleTags = document.getElementById('article-tags');

const publishInfo = document.getElementById('publish-info');
const author = publishInfo.getElementsByClassName('author')[0];
const datePublished = publishInfo.getElementsByClassName('date-published')[0];

const lastUpdated = document.getElementById('mod-update-date-container').getElementsByClassName('update-date')[0];
const articleImage = document.getElementById('article-image').getElementsByTagName('img')[0];

const articleContent = document.getElementById('article-content');

// ---------- ARTICLE BUILDER ----------- 
articleTitle.innerHTML = modData.title;

for (const tag of modData.tags) {
    articleTags.innerHTML += `
        <div class="tag"><p>${tag}</p></div>
    `;
}

author.innerHTML += modData.author;
datePublished.innerHTML += modData.datePublished;
lastUpdated.innerHTML = modData.lastUpdated;
articleImage.setAttribute("src", `${databaseImagesPath}${modData.articleImage}`);


for (const content of modData.content) {
    if (content.type === "subheader") {
        articleContent.innerHTML += buildSubheader(content.value);
    }
    if (content.type === "paragraph") {
        articleContent.innerHTML += buildParagraph(content.value);
    }
    if (content.type === "ul" || content.type === "li") {
        articleContent.innerHTML += buildList(content.type, content.list);
    }
    if (content.type === "image") {
        articleContent.innerHTML += buildImage(content.src);
    }
    if (content.type === "small-images") {
        articleContent.innerHTML += buildSmallImages(content.srcList);
    }
    if (content.type === "youtube-embed") {
        articleContent.innerHTML += buildYouTubeEmbed(content.src);
    }
    if (content.type === "download-links") {
        articleContent.innerHTML += buildDownloadsList(content.downloadsList);
    }
}


function buildSubheader(value) {
    return `<h5 class="subheader">${value}</h5>`;
}

function buildParagraph(value) {
    return `<p class="paragraph">${value}</p>`;
}

function buildList(type, list) {
    let elemStr = "";
    if (type === "ul") elemStr += `<ul class="list">`;
    if (type === "ol") elemStr += `<ol class="list">`;

    for (const item of list) {
        elemStr += `<li>${item}</li>`;
    }

    if (type === "ul") elemStr += `</ul>`;
    if (type === "ol") elemStr += `</ol>`;

    return elemStr;
}

function buildImage(src) {
    return `<img class="image" src="${databaseImagesPath}${src}" />`;
}

function buildSmallImages(srcList) {
    let elemStr = `<div class="small-images">`;

    for (const src of srcList) {
        elemStr += `<img class="small-image" src="${databaseImagesPath}${src}" />`;
    }

    return elemStr += `</div>`;
}

function buildYouTubeEmbed(link) {
    // The src can be replaced with any url
    return `
        <div class="youtube-embed">
            <iframe src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    `;
}

function buildDownloadsList(list) {
    if (list.length === 0) return "";

    let elemStr = `<div class="downloads-list">`;
    for (const item of list) {
        elemStr += `
            <div class="download-item">
                <p class="bold">${item.name}:</p>
                <a href="${item.src}" target="_blank" rel="noopener noreferrer"><button class="button drive-download-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                        <path fill="#1e88e5" d="M38.59,39c-0.535,0.93-0.298,1.68-1.195,2.197C36.498,41.715,35.465,42,34.39,42H13.61 c-1.074,0-2.106-0.285-3.004-0.802C9.708,40.681,9.945,39.93,9.41,39l7.67-9h13.84L38.59,39z"></path><path fill="#fbc02d" d="M27.463,6.999c1.073-0.002,2.104-0.716,3.001-0.198c0.897,0.519,1.66,1.27,2.197,2.201l10.39,17.996 c0.537,0.93,0.807,1.967,0.808,3.002c0.001,1.037-1.267,2.073-1.806,3.001l-11.127-3.005l-6.924-11.993L27.463,6.999z"></path><path fill="#e53935" d="M43.86,30c0,1.04-0.27,2.07-0.81,3l-3.67,6.35c-0.53,0.78-1.21,1.4-1.99,1.85L30.92,30H43.86z"></path><path fill="#4caf50" d="M5.947,33.001c-0.538-0.928-1.806-1.964-1.806-3c0.001-1.036,0.27-2.073,0.808-3.004l10.39-17.996 c0.537-0.93,1.3-1.682,2.196-2.2c0.897-0.519,1.929,0.195,3.002,0.197l3.459,11.009l-6.922,11.989L5.947,33.001z"></path><path fill="#1565c0" d="M17.08,30l-6.47,11.2c-0.78-0.45-1.46-1.07-1.99-1.85L4.95,33c-0.54-0.93-0.81-1.96-0.81-3H17.08z"></path><path fill="#2e7d32" d="M30.46,6.8L24,18L17.53,6.8c0.78-0.45,1.66-0.73,2.6-0.79L27.46,6C28.54,6,29.57,6.28,30.46,6.8z"></path>
                    </svg>
                    Download
                </button></a>
            </div>
        `;
    }

    return buildSubheader("Download Links") + elemStr + buildParagraph(`Files go to this directory: <span class="italic wrap">"device/Android/Data/com.aerofly.aeroflyfsg1/files/"</span>`);
}

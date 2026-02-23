// ---------- PAGE SETUP ----------- 

const modsData = ModsData();
const changelogData = getUpdatesIndex(0, 9);


// ---------- PAGE ELEMENTS ----------- 

const updateSearch = document.getElementById('searchUpdate');
const updatesList = document.getElementById('changelog-list');
const showMoreBtn = document.getElementsByClassName('show-more-list')[0];


// ---------- CHANGELOG LIST BUILDER ----------- 

filterUpdates(updateSearch.value);

updateSearch.addEventListener('input', () => {
    updatesList.innerHTML = "";
    filterUpdates(updateSearch.value);
});

function filterUpdates(query) {
    query = query.toLowerCase();
    if (query === "" || query === undefined) {
        constructUpdate(changelogData);
        return;
    }

    const newData = [];

    for (const update of changelogData) {
        const mod = getModArticle(update.modID);
        if (mod.title.toLowerCase().includes(query)) {
            newData.push(update);
        }
    }

    constructUpdate(newData);
}

function constructUpdate(data) {
    for (const update of data) {
        const mod = getModArticle(update.modID);
        updatesList.innerHTML += `
            <div class="update">
                <div class="update-top">
                    <div class="mod-image">
                        <img src="${databaseImagesPath}${mod.articleImage}" />
                    </div>

                    <div class="update-top-content">
                        <a href="modarticle.html?modarticleid=${mod.id}"><h6 class="mod-title">${mod.title}</h6></a>
                        <p class="update-summary no-bold">${update.updateSummary}</p>
                        <div class="publish-info">
                            <div class="author"><i class="fa-regular fa-user"></i> ${mod.author}</div>
                            <div class="date-updated">Updated: <span class="date-updated-span">${update.updateDate}</span></div>
                        </div>
                    </div>
                </div>

                <p class="show-more-update">Details <i class="fa-solid fa-chevron-down show-more-button"></i></p>

                <div class="update-details">
                    ${buildUpdateDetails(update)}
                </div>
                
            </div>
        `;
    }
}

function buildUpdateDetails(update) {
    let elemStr = "";
    for (const content of update.content) {
        if (content.type === "subheader") {
            elemStr += `<h6 class="subheader">${content.value}</h6>`;
        }
        if (content.type === "paragraph") {
            elemStr += `<p class="paragraph">${content.value}</p>`;
        }
        if (content.type === "ol" || content.type === "ul") {
            elemStr += buildList(content.type, content.list);
        }
    }
    return elemStr;
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


// Event Listener for each "show details" dropdown
document.addEventListener('click', (e) => {
    openUpdateDetails(e);
});

function openUpdateDetails(e) {
    for (const showUpdateDetailsElem of document.getElementsByClassName('show-more-update')) {
        if (showUpdateDetailsElem.contains(e.target)) {
            showUpdateDetailsElem.closest('.update').classList.toggle('opened');
        }
    }

}

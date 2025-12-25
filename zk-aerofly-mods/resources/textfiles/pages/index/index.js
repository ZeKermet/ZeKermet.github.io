// ---------- PAGE SETUP ----------- 

const modsData = ModsData();


// ---------- PAGE ELEMENTS ----------- 

const modsSearch = document.getElementById('searchMods');
const modsList = document.getElementById('mods-list');
const showMoreBtn = document.getElementsByClassName('show-more-list')[0];


// ---------- MODS LIST BUILDER ----------- 

filterMods(modsSearch.value);

modsSearch.addEventListener('input', () => {
    modsList.innerHTML = "";
    filterMods(modsSearch.value);
});


function filterMods(query) {
    query = query.toLowerCase();
    if (query === "" || query === undefined) {
        constructMods(modsData);
        return;
    }

    const newData = [];

    for (const mod of modsData) {
        if (mod.title.toLowerCase().includes(query)) {
            newData.push(mod);
        } else {
            for (const tag of mod.tags) {
                if (tag.toLowerCase().includes(query)) {
                    newData.push(mod);
                    break;
                }
            }
        }
    }

    constructMods(newData);
}


function constructMods(data) {
    for (const mod of data) {
        let tagsStr = "";
        for (const listItem of mod.tags) {
            tagsStr += `<div class="tag"><p>${listItem}</p></div>`;
        }

        let title = mod.title;
        if (title.length > 48) {
            title = title.substring(0, 43) + "...";
        }

        modsList.innerHTML += `
            <div class="mod">
                <div class="mod-image">
                    <img src="${databaseImagesPath}${mod.articleImage}" />
                </div>

                <div class="mod-content">
                    <a href="modarticle.html?articleid=${mod.id}"><h5 class="mod-title">${title}</h5></a>
                    <div class="mod-tags">
                        ${tagsStr}
                    </div>
                    <div class="publish-info">
                        <div class="author"><i class="fa-regular fa-user"></i> ${mod.author}</div>
                        <div class="separator"></div>
                        <div class="date-published"><i class="fa-regular fa-calendar"></i> ${mod.datePublished}</div>
                    </div>
                </div>
                <div class="mod-update-date-container">
                    <div>
                        <p>Last Updated: <span class="update-date">${mod.lastUpdated}</span></p>
                    </div>
                </div>
            </div>
        `;
    }
}



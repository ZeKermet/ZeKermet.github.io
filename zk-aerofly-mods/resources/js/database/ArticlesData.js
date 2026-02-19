const databaseImagesPath = "./resources/js/database/images/";

function ArticlesData() {
    return [
        {
            id: 90215260,
            title: "How to download mods for Aerofly FS",
            author: "ZK Aviation",
            datePublished: "February 16, 2026",
            lastUpdated: "February 16, 2026",
            tags: ["Tutorial", "Mods", "Install", "Android", "Mobile"],
            articleImage: "a350sunsetlanding.jpg",
            content: [
                {
                    type: "subheader",
                    value: "Introduction"
                },
                {
                    type: "paragraph",
                    value: "You want to install some mods for aerofly? Fortunately, the process is very straightforward."
                },
                {
                    type: "paragraph",
                    value: "For some context, Aerofly mods are essentially separate TME files (converted archive files) that override content packaged in the original aircraft’s TME file. This means we do not have to touch anything related to the original file, and we instead simply insert the mod into the same file location and let it do its job."
                },
                {
                    type: "subheader",
                    value: "Some Important Notes"
                },
                {
                    type: "paragraph",
                    value: `Currently for mobile, because file access is only possible on Android, installing mods is unfortunately not possible on iOS devices. If anyone finds a way to access game files without performing extreme methods like Jailbreaking, let me know in a comment on my YouTube channel or a mention in the <a class="extlink" href="${GeneralLinks.getAFSCDiscordInvite()}" target="_blank">Aerofly Discord Community</a>.`
                },
                {
                    type: "paragraph",
                    value: `Modding is only possible for DLC planes as of now. Free planes like the A320 are located in restricted areas, so modifications may not be possible. Again, it’s a “may not” and not “is not”. There may be a method that I just haven’t discovered just yet.`
                },
                {
                    type: "paragraph",
                    value: `For anything that was directly imported from the PC versions (liveries, models etc.), <span class="bold">THEY WILL NOT WORK PROPERLY without Vulkan</span>, and <span class="bold">IT IS NOT GUARANTEED</span> to work even with it. You may experience crashes, and this is due to device incompatibilities with vulkan and/or the PC content loaded on your device. Running textures on OpenGL will only result in a glitchy appearance that does not look pretty, unless you want your aircraft to look like it came straight out of Area 51.`
                },
                {
                    type: "paragraph",
                    value: `Last, and most definitely not least (should be first lol), for any bugs that are encountered, <span class="bold">ENSURE IT IS A MOD ISSUE and not an Aerofly Issue</span>. In other words, bring the mod file out of the aerofly folder and test to see if the issue occurs again.`
                },
                {
                    type: "subheader",
                    value: "How to Download"
                },
                {
                    type: "paragraph",
                    value: `First, download this app on google play. This app is one of the few left that allows us guaranteed access to app data files. Other apps like Zarchiver may work, but it stopped working for my device after the Android 14 update.`
                },
                {
                    type: "small-images",
                    srcList: [
                        "mod_inst_tut_5.jpg",
                        "mod_inst_tut_4.jpg"
                    ]
                },
                {
                    type: "paragraph",
                    value: `Next, download the mod files you want. Feel free to check out some of my mods in the <a class="extlink" href="./index.html" target="_blank">Mods Page</a>. Once you’ve downloaded the files you want, it should now be located in your device’s download folder.`
                },
                {
                    type: "paragraph",
                    value: `The rest of the guide will be geared towards the recommended files app. Next, split the app into two windows as shown below (press and hold the window to drag it).`
                },
                {
                    type: "small-vertical-images",
                    srcList: [
                        "mod_inst_tut_1.gif",
                    ]
                },
                {
                    type: "paragraph",
                    value: `In the top window, open the downloads folder and search for the downloaded mod. For the bottom window, open <span class="italic bold">Device → Android → data → com.aerofly.aeroflyfsg1 → files</span>. This is the Aerofly folder. You should see many “dlc_xxx.tme” files.`
                },
                {
                    type: "small-vertical-images",
                    srcList: [
                        "mod_inst_tut_2.gif",
                    ]
                },
                {
                    type: "paragraph",
                    value: `Finally, highlight the downloaded file, then press, hold, and drag it directly to the aerofly folder. Once completed, run the simulator, and enjoy the mods!`
                },
                {
                    type: "small-vertical-images",
                    srcList: [
                        "mod_inst_tut_3.gif",
                    ]
                },
            ]
        },
    ]
}



function getArticle(id) {
    for (const article of ArticlesData()) {
        if (id === article.id) return article;
    }
    return null;
}

function getArticleIndex(start, end = -1) {
    const data = [];
    const articlesDataCopy = ArticlesData();
    if (end === -1 || end > articlesDataCopy.length) end = articlesDataCopy.length - 1;
    for (let i=start; i <= end; i++) {
        data[data.length] = articlesDataCopy[i];
    }

    return data;

}

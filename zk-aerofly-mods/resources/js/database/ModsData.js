const databaseImagesPath = "./resources/js/database/images/";


function ModsData() {
    return [
        {
            id: 122525,
            title: "A380 Mod (OldEmir_Sounds_Front) | Android Only",
            author: "ZK Aviation",
            datePublished: "December 25, 2025",
            lastUpdated: "December 25, 2025",
            tags: ["A380", "Camera", "Sounds"],
            articleImage: "a380_oldemir_sounds_front_jumpseat.png",
            content: [
                {
                    type: "subheader",
                    value: "Features"
                },
                {
                    type: "ul",
                    list: [
                        "Modified cockpit and passenger views",
                        "Jumpseat camera moved to the front for a better view (Img Above)",
                        "Cabin + Cockpit shake and touchdown sounds added",
                        "Flaps sound has been changed to be closer to the real one",
                        `Includes old mobile Emirates livery <span class="bold">(Works for OpenGL & Vulkan)</span>`
                    ]
                },
                {
                    type: "subheader",
                    value: "Sound Clips"
                },
                {
                    type: "youtube-embed",
                    src: "https://www.youtube.com/embed/NXuurS9MdqM?si=b6V6YHIwXurzv7U4"
                },
                {
                    type: "youtube-embed",
                    src: "https://www.youtube.com/embed/06ZM2iWn7Ns?si=1vQHSR620EMc5I7j"
                },
                {
                    type: "download-links",
                    downloadsList: [
                        {
                            name: "ZK_A380_mod_(OldEmir, Sounds, Front)",
                            src: "https://drive.google.com/file/d/1yWy6h8B-EiZWf67tfImQN-ReKVWeXvqR/view?usp=drivesdk"
                        },
                        
                    ]
                }
            ]
        },
    ];
}


function getModArticle(id) {
    for (const modArticle of ModsData()) {
        if (id === modArticle.id) return modArticle;
    }
    return null;
}

function getModArticleIndex(start, end = -1) {
    const data = [];
    const modsDataCopy = ModsData();
    if (end === -1 || end > modsDataCopy.length) end = modsDataCopy.length;
    for (let i=start; i <= end; i++) {
        data[data.length] = modsDataCopy[i];
    }

    return data;
}







// ----------- TEST MODS DATA HERE!!! -----------
/*
function ModsData() {
    return [
        {
            id: 2187,
            title: "747 Landing Copenhagen TEMP",
            author: "Test dude",
            datePublished: "August 14, 2021",
            lastUpdated: "September 9, 2022",
            tags: ["Simply", "For", "WIP NOW"],
            articleImage: "747landingcopenhagen.jpg",
            content: [
                {
                    type: "subheader",
                    value: "This is a subheader TEMP"
                },
                {
                    type: "paragraph",
                    value: "(GENERATED) It really doesn't matter what she thinks as it isn't her problem to solve. That's what he kept trying to convince himself. She was trying to insert her opinion where it wasn't wanted or welcome. He already had a plan and even though that plan didn't correspond with what she wanted him to do or what should be done, it wasn't her decision to make. The question now became whether he would stick to his convictions and go through with his plan knowing she wouldn't approve."
                },
                {
                    type: "paragraph",
                    value: "(GENERATED) For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph."
                },
                {
                    type: "ul",
                    list: [
                        "Modified a320 stuff ig",
                        "Modified 747 stuff GENERATED"
                    ]
                },
                {
                    type: "subheader",
                    value: "Images"
                },
                {
                    type: "image",
                    src: "a350sunsetlanding.jpg"
                },
                {
                    type: "small-images",
                    srcList: [
                        "747landingcopenhagen.jpg",
                        "ytlogo.jpg",
                        "747landingcopenhagen.jpg",
                        "747landingcopenhagen.jpg",
                        "a350sunsetlanding.jpg"
                    ]
                },
                {
                    type: "subheader",
                    value: "Sound Clips"
                },
                {
                    type: "youtube-embed",
                    src: "https://www.youtube.com/embed/e3tL1vrrIgg?si=D5CmeYVtHUpO6C42"
                },
                {
                    type: "download-links",
                    downloadsList: [
                        {
                            name: "a321-Generated",
                            src: "https://drive.google.com"
                        },
                        {
                            name: "a320neo-Generated",
                            src: "https://drive.google.com"
                        },
                        
                    ]
                }
            ]
        },
        {
            id: 2413,
            title: "A350 Landing Sunset TEMP",
            author: "Test dude",
            datePublished: "August 14, 2021",
            lastUpdated: "September 9, 2022",
            tags: ["Simply", "For", "WIP NOW"],
            articleImage: "a350sunsetlanding.jpg",
            content: [
                {
                    type: "subheader",
                    value: "This is a subheader TEMP"
                },
                {
                    type: "paragraph",
                    value: "(GENERATED) It really doesn't matter what she thinks as it isn't her problem to solve. That's what he kept trying to convince himself. She was trying to insert her opinion where it wasn't wanted or welcome. He already had a plan and even though that plan didn't correspond with what she wanted him to do or what should be done, it wasn't her decision to make. The question now became whether he would stick to his convictions and go through with his plan knowing she wouldn't approve."
                },
                {
                    type: "paragraph",
                    value: "(GENERATED) For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph."
                },
                {
                    type: "ul",
                    list: [
                        "Modified a320 stuff ig",
                        "Modified 747 stuff GENERATED"
                    ]
                },
                {
                    type: "subheader",
                    value: "Images"
                },
                {
                    type: "image",
                    src: "a350sunsetlanding.jpg"
                },
                {
                    type: "small-images",
                    srcList: [
                        "747landingcopenhagen.jpg",
                        "ytlogo.jpg",
                        "747landingcopenhagen.jpg",
                        "747landingcopenhagen.jpg",
                        "a350sunsetlanding.jpg"
                    ]
                },
                {
                    type: "subheader",
                    value: "Sound Clips"
                },
                {
                    type: "youtube-embed",
                    src: "https://www.youtube.com/embed/e3tL1vrrIgg?si=D5CmeYVtHUpO6C42"
                },
                {
                    type: "download-links",
                    downloadsList: [
                        {
                            name: "a321-Generated",
                            src: "https://drive.google.com"
                        },
                        {
                            name: "a320neo-Generated",
                            src: "https://drive.google.com"
                        },
                        
                    ]
                }
            ]
        }
    ];
}
*/

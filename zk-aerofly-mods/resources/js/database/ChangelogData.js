function ChangelogData() {
    return [
        {
            modID: 1225252,
            updateSummary: "A350-1000 Mod v1.1.0 | Sounds Update",
            updateDate: "January 3, 2026",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "ul",
                    list: [
                        "Quieter cockpit high speed shake sounds",
                    ]
                },
            ]
        },
        {
            modID: 1225250,
            updateSummary: "A380 Mod v1.1.0 | Sounds Update",
            updateDate: "January 3, 2026",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "ul",
                    list: [
                        "Quieter cockpit high speed shake sounds",
                        "Changed wind sound for better quality and quietness",
                        "Improved touchdown sounds, volume now based on fpm"
                    ]
                },
            ]
        },
        {
            modID: 1225251,
            updateSummary: "NEW Boeing 737-500 Mod v1.0.0",
            updateDate: "January 3, 2026",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "paragraph",
                    value: "New Boeing 737-500 mod has been released"
                },
            ]
        },
        {
            modID: 1229251,
            updateSummary: "Minor View Change",
            updateDate: "December 29, 2025",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "paragraph",
                    value: "New Boeing 747 mod has been published to this site"
                },
            ]
        },
        {
            modID: 1225254,
            updateSummary: "Minor View Change",
            updateDate: "December 29, 2025",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "ul",
                    list: [
                        "Pushed the jumpseat view to the front"
                    ]
                },
            ]
        },
        {
            modID: 1229250,
            updateSummary: "Mod Officially Published",
            updateDate: "December 25, 2025",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "paragraph",
                    value: "New Boeing 777 mod has been published to this site"
                },
            ]
        },
        {
            modID: 1225254,
            updateSummary: "Mod Officially Published",
            updateDate: "December 25, 2025",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "paragraph",
                    value: "New Boeing 787 cameras mod has been published to this site"
                },
            ]
        },
        {
            modID: 1225253,
            updateSummary: "Mod Officially Published",
            updateDate: "December 25, 2025",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "paragraph",
                    value: "New A320 family mod has been published to this site"
                },
            ]
        },
        {
            modID: 1225252,
            updateSummary: "Mod Officially Published",
            updateDate: "December 25, 2025",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "paragraph",
                    value: "New A350 mod has been published to this site"
                },
            ]
        },
        {
            modID: 1225251,
            updateSummary: "Mod Officially Published",
            updateDate: "December 25, 2025",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "paragraph",
                    value: "New Boeing 737 family mod has been published to this site"
                },
            ]
        },
        {
            modID: 1225250,
            updateSummary: "Mod Officially Published",
            updateDate: "December 25, 2025",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "paragraph",
                    value: "New A380 mod has been published to this site"
                },
            ]
        },
    ]
}

function getUpdatesIndex(start, end = -1) {
    const data = [];
    const updatesDataCopy = ChangelogData();
    if (end === -1 || end > updatesDataCopy.length) end = modsDataCopy.length - 1;
    for (let i=start; i <= end; i++) {
        data[data.length] = updatesDataCopy[i];
    }

    return data;
}





// --------------- TESTING DATA HERE -----------------
/*
function ChangelogData() {
    return [
        {
            modID: 2187,
            updateSummary: "Just a test update IG",
            updateDate: "August 10, 2025",
            content: [
                {
                    type: "subheader",
                    value: "This is a subheader TEMP"
                },
                {
                    type: "paragraph",
                    value: "Just something here to test it out ig"
                },
                {
                    type: "ul",
                    list: [
                        "Modified a320 stuff ig",
                        "Modified 747 stuff GENERATED"
                    ]
                }
            ]
        },
        {
            modID: 2187,
            updateSummary: "Previous Test Update",
            updateDate: "August 8, 2025",
            content: [
                {
                    type: "subheader",
                    value: "This is a subheader TEMP"
                },
                {
                    type: "paragraph",
                    value: "Just something here to test it out ig"
                },
                {
                    type: "ol",
                    list: [
                        "This is less important"
                    ]
                }
            ]
        }
    ]
}
*/
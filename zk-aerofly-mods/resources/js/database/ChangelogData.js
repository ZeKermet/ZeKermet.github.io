// This entire list is ordered by dates correctly
function ChangelogData() {
    return [
        {
            modID: 1225254,
            updateSummary: "Boeing 787-9/-10 Mod v1.2.0 | New Sounds",
            updateDate: "January 26, 2026",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "ul",
                    list: [
                        "Interior shake sounds with loudness based on the aircraft's speed",
                        "Interior touchdown sound upon landing"
                    ]
                },
            ]
        },
        {
            modID: 1229250,
            updateSummary: "Boeing 777-300ER/-200f Mod v1.2.0 | New Sounds",
            updateDate: "January 26, 2026",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "ul",
                    list: [
                        "Interior shake sounds with loudness based on the aircraft's speed",
                        "Interior touchdown sound upon landing",
                        "High speed wheel sounds implemented (similar to the default A350-1000)"
                    ]
                },
            ]
        },
        {
            modID: 1229251,
            updateSummary: "Boeing 747-400 Mod v1.2.0 | New Sounds",
            updateDate: "January 26, 2026",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "ul",
                    list: [
                        "Interior shake sounds with loudness based on the aircraft's speed",
                        "Interior touchdown sound upon landing"
                    ]
                },
            ]
        },
        {
            modID: 1225251,
            updateSummary: "Boeing 737-500 Mod v1.1.1 | Minor Camera Adjustment",
            updateDate: "January 18, 2026",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "ul",
                    list: [
                        "Small increase in the 737-500's pilot and copilot view height",
                    ]
                },
            ]
        },
        {
            modID: 1225252,
            updateSummary: "A350-1000 Mod v1.2.1 | Minor Back-end Camera Rework",
            updateDate: "January 8, 2026",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "ul",
                    list: [
                        "Changed some camera code to ensure it loads properly",
                        `<span class="italic">If you still have camera movements from v1.2.0, there is no need to download this version</span>`,
                    ]
                },
            ]
        },
        {
            modID: 1225253,
            updateSummary: "A319/320/321 Mod v1.1.1 | Minor Back-end Camera Rework",
            updateDate: "January 8, 2026",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "ul",
                    list: [
                        "Changed some camera code to ensure it loads properly",
                        `<span class="italic">If you still have camera movements from v1.1.0, there is no need to download this version</span>`,
                    ]
                },
            ]
        },
        {
            modID: 1229250,
            updateSummary: "Boeing 777-300ER v1.1.1 | Minor Camera Fix",
            updateDate: "January 8, 2026",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "ul",
                    list: [
                        "Corrected some camera views changed by the camera movement update",
                    ]
                },
            ]
        },
        {
            modID: 1225254,
            updateSummary: "Boeing 787 Mod v1.1.0 | Camera Movements",
            updateDate: "January 6, 2026",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "ul",
                    list: [
                        "Added camera movements on turns and touchdown",
                    ]
                },
            ]
        },
        {
            modID: 1225253,
            updateSummary: "A320 Mod v1.1.0 | Camera Movements",
            updateDate: "January 6, 2026",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "ul",
                    list: [
                        "Added camera movements on turns and touchdown",
                    ]
                },
            ]
        },
        {
            modID: 1225252,
            updateSummary: "A350 Mod v1.2.0 | Camera Movements",
            updateDate: "January 6, 2026",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "ul",
                    list: [
                        "Added camera movements on turns and touchdown",
                    ]
                },
            ]
        },
        {
            modID: 1225251,
            updateSummary: "Boeing 737ng/-500/max Mod v1.1.0 | Camera Movements & Minor Sounds Rework",
            updateDate: "January 6, 2026",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "ul",
                    list: [
                        "Added camera movements on turns and touchdown",
                        "Minor fix to cabin shake sound"
                    ]
                },
            ]
        },
        {
            modID: 1225250,
            updateSummary: "A380 Mod v1.2.0 | Camera Movements",
            updateDate: "January 6, 2026",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "ul",
                    list: [
                        "Added camera movements on turns and touchdown",
                    ]
                },
            ]
        },
        {
            modID: 1229250,
            updateSummary: "Boeing 777-400 Mod v1.1.0 | Camera Movements",
            updateDate: "January 6, 2026",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "ul",
                    list: [
                        "Added camera movements on turns and touchdown",
                    ]
                },
            ]
        },
        {
            modID: 1229251,
            updateSummary: "Boeing 747-400 Mod v1.1.0 | Camera Movements",
            updateDate: "January 6, 2026",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "ul",
                    list: [
                        "Added camera movements on turns and touchdown",
                    ]
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



// This entire list is ordered by dates correctly
function previousChangelogData() {
    return [
        {
            modID: 1225252,
            updateSummary: "A350-1000 Mod v1.1.1 | Sounds Update",
            updateDate: "January 4, 2026",
            content: [
                {
                    type: "subheader",
                    value: "Details:"
                },
                {
                    type: "ul",
                    list: [
                        "Made the cockpit shake sound louder again",
                    ]
                },
            ]
        },
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
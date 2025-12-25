function ChangelogData() {
    return [
        {
            modID: 122525,
            updateSummary: "Just a test update IG",
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
    if (end === -1 || end > updatesDataCopy.length) end = modsDataCopy.length;
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
function browserHistory(browserData, actions) {
    const { "Browser Name": browserName, "Open Tabs": openTabs, "Recently Closed": recentlyClosed, "Browser Logs": browserLogs } = browserData;

    actions.forEach(action => {
        if (action === "Clear History and Cache") {
            browserData["Open Tabs"] = [];
            browserData["Recently Closed"] = [];
            browserData["Browser Logs"] = [];
            return;
        }

        const actionParts = action.split(" ");
        const actionType = actionParts[0];
        const site = actionParts.slice(1).join(" ");

        if (actionType === "Open") {
            browserData["Open Tabs"].push(site);
            browserData["Browser Logs"].push(action);
            return;
        }

        if (actionType === "Close" && openTabs.includes(site)) {
            browserData["Open Tabs"] = openTabs.filter(tab => tab !== site);
            browserData["Recently Closed"].push(site);
            browserData["Browser Logs"].push(action);
        }
    });

    const { "Open Tabs": updatedOpenTabs, "Recently Closed": updatedRecentlyClosed, "Browser Logs": updatedBrowserLogs } = browserData;

    console.log(`${browserName}\nOpen Tabs: ${updatedOpenTabs.join(", ")}\nRecently Closed: ${updatedRecentlyClosed.join(", ")}\nBrowser Logs: ${updatedBrowserLogs.join(", ")}`);
}

// browserHistory({
//     "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
// },
//     ["Close Facebook", "Open StackOverFlow", "Open Google"]
// );

// browserHistory({
//     "Browser Name": "Mozilla Firefox",
//     "Open Tabs": ["YouTube"],
//     "Recently Closed": ["Gmail", "Dropbox"],
//     "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
// },
//     ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
// );
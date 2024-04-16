chrome.commands.onCommand.addListener(function (command) {
    if (command === "toggle-mute") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.update(tabs[0].id, { muted: !tabs[0].mutedInfo.muted });
        });
    }
});

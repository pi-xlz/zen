chrome.runtime.onMessage.addListener((message, sender) => {
  console.log(message);
  if (message.shouldRemoveScrollbar) {
    console.log("Switch Message: ", message);
    console.log("Sender: ", sender);
    getTabId().then((id) => {
      chrome.scripting.executeScript({
        target: { tabId: id },
        func: removeScrollbar,
      });
    });
  }
});

async function getCurrentTab() {
  const queryOpts = { active: true, lastFocusedWindow: true };
  const [tab] = await chrome.tabs.query(queryOpts);
  console.log(tab);
  return tab;
}

async function getTabId() {
  const data = await getCurrentTab();
  const tabId = data?.id;
  console.log("TabID: ", tabId);
  return tabId;
}

function removeScrollbar() {
  document.body.style.backgroundColor = "red";
}

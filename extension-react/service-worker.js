chrome.runtime.onMessage.addListener((message, sender) => {
  console.log(message);
  if (message.shouldRemoveScrollbar) {
    console.log("Switch Message: ", message);
    console.log("Sender: ", sender);
    chrome.runtime.sendMessage({ shouldRemove: message.shouldRemoveScrollbar });
    // getTabId().then((id) => {
    //   chrome.scripting.executeScript({
    //     target: { tabId: id as number },
    //     func: removeScrollbar,
    //   });
    // });
  }
});

// export async function getCurrentTab() {
//   const queryOpts = { active: true, lastFocusedWindow: true };
//   const [tab] = await chrome.tabs.query(queryOpts);

//   return tab;
// }

// async function getTabId() {
//   const data = await getCurrentTab();
//   const tabId = data.id;
//   return tabId;
// }

// function removeScrollbar() {
//   document.body.style.backgroundColor = "white";
// }
// function addScrollbar() {}
// function toggleScrollbar() {}
// ([tab]) => {
//     if (chrome.runtime.lastError) console.error(chrome.runtime.lastError);
//     console.log(tab);
//     return tab;
//   }

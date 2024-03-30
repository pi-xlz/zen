chrome.runtime.onMessage.addListener((message, sender, sendRes) => {
  console.log(message);
  if (message.removeScrollbar) {
    console.log("Switch Message: ", message);
    console.log("Sender: ", sender);
    // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    //   const currentTabId = tabs[0].id;
    //   console.log(currentTabId);
    //   // Perform tab manipulation based on the currentTabId\
    //   const css = " ::-webkit-scrollbar { width: 0 !important; } ";
    //   chrome.scripting
    //     .insertCSS({
    //       target: { tabId: currentTabId },
    //       css: css,
    //     })
    //     .then(() => sendRes({ scrollbarRemoved: true }))
    //     .catch((err) => {
    //       console.error(err);
    //       sendRes({ scrollbarRemoved: false });
    //     });
    // });
    modScrollbar("remove", sendRes);
  } else modScrollbar("add", sendRes);
  return true;
});

const modScrollbar = (op, sendResponse) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTabId = tabs[0].id;
    console.log(currentTabId);
    const css = " ::-webkit-scrollbar { width: 0 !important; } ";
    if (op === "remove") {
      chrome.scripting
        .removeCSS({
          target: { tabId: currentTabId },
          css: css,
        })
        .then(() => sendResponse({ scrollbarRemoved: true }))
        .catch((err) => {
          console.error(err);
          sendResponse({ scrollbarRemoved: false });
        });
    } else {
      chrome.scripting
        .insertCSS({
          target: { tabId: currentTabId },
          css: css,
        })
        .then(() => sendResponse({ scrollbarRemoved: false }))
        .catch((err) => {
          console.error(err);
          sendResponse({ scrollbarRemoved: true });
        });
    }
  });
};

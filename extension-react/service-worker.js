chrome.runtime.onMessage.addListener((message, sender) => {
  console.log(message);
  if (message.shouldRemoveScrollbar) {
    console.log("Switch Message: ", message);
    console.log("Sender: ", sender);
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTabId = tabs[0].id;
      console.log(currentTabId);
      // Perform tab manipulation based on the currentTabId\
      const css = " ::-webkit-scrollbar { width: 0 !important; } ";
      chrome.scripting
        .insertCSS({
          target: { tabId: currentTabId },
          css: css,
        })
        .then(() => console.log("CSS Injected!"));
    });
  }
});

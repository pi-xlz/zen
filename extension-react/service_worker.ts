type message = {
  shouldRemoveScrollbar: boolean;
};

chrome.runtime.onMessage.addListener((message: message, sender) => {
  console.log(message);
  if (message.shouldRemoveScrollbar) {
    console.log("Switch Message: ", message);
    console.log("Sender: ", sender);
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTabId = tabs[0].id;
      console.log(currentTabId);
      // Perform tab manipulation based on the currentTabId
      chrome.scripting
        .insertCSS({
          target: { tabId: currentTabId as number },
          css: "body { background-color: red !important; }",
        })
        .then(() => console.log("CSS Injected!"));
    });
  }
});

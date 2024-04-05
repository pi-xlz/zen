const storage = chrome.storage.local;

// console.log(storage.get());

chrome.runtime.onMessage.addListener((message, _, sendRes) => {
  console.log("Sender Message: ", message);
  if (message.removeScrollbar) {
    modScrollbar("remove", sendRes);
  } else modScrollbar("add", sendRes);
  return true;
});

// todo: in the error boundary/when catching the error(which would occur if the user isn't focused on a tab)
// todo: give user some feedback, the switch should probably not work/be disabled at that point
const modScrollbar = (op, sendResponse) => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    const currentTabId = tabs[0].id;
    if (!currentTabId) {
      console.error("Unable to get current tab ID");
      sendResponse({ scrollbarRemoved: false });
      return;
    }

    const css = " ::-webkit-scrollbar { width: 0 !important; } ";

    const actionPromise =
      op === "add"
        ? chrome.scripting.insertCSS({
            target: { tabId: currentTabId },
            css: css,
          })
        : chrome.scripting.removeCSS({
            target: { tabId: currentTabId },
            css: css,
          });

    actionPromise
      .then(() => {
        storage.set({ isScrollbar: op === "add" }, () => {
          console.log("Storage Message: Removed Scrollbar");
          sendResponse({ scrollbarRemoved: true });
          storage.get("isScrollbar", (data) =>
            console.log("isScrollbar:", data.isScrollbar)
          );
        });
      })
      .catch((err) => {
        console.error("Error modifying scrollbar:", err);
        sendResponse({ scrollbarRemoved: false });
      });
  });
};

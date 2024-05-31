//? TYPES
// tab modification operations
type ModOp = "REMOVE" | "ADD";

// SW Response
type SWResponse = {
  isScrollbarRemoved: boolean;
  message: string;
};

//? CONSTANTS
const storage = chrome.storage.local;
const windows = chrome.windows;
const runtime = chrome.runtime;

let extensionId: any;

runtime.onMessage.addListener((message, sender, sendRes) => {
  extensionId = sender.id;
  console.log("Sender ID: ", extensionId);
  // console.log("Extension's Message: ", message);
  if (message.shouldRemoveScrollbar) {
    modScrollbar("REMOVE", sendRes);
  } else modScrollbar("ADD", sendRes);
  return true;
});

windows.onFocusChanged.addListener(
  (windowId) => {
    console.log("Window ID: ", windowId);
    runtime.sendMessage(extensionId, {
      windowId,
    });
  },
  { windowTypes: ["normal"] }
);

// todo: in the error boundary/when catching the error(which would occur if the user isn't focused on a tab)
// todo: give user some feedback, the switch should probably not work/be disabled at that point
const modScrollbar = (op: ModOp, sendResponse: (arg: SWResponse) => void) => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    const currentTabId = tabs[0]?.id;
    if (!currentTabId) {
      console.error("Unable to get current tab ID");
      sendResponse({
        isScrollbarRemoved: false,
        message: "Couldn't get Tab ID. Try focusing on the Tab",
      });
      return;
    }

    const css = " ::-webkit-scrollbar { width: 0 !important; } ";

    const actionPromise =
      op === "REMOVE"
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
        // todo: revise implementation. Storage seems to always be in "bad" state
        storage.set({ isScrollbarRemoved: op === "REMOVE" }, () => {
          sendResponse({
            isScrollbarRemoved: op === "REMOVE",
            message:
              op === "REMOVE" ? "Scrollbar Removed!" : "Scrollbar added!",
          });
        });
      })
      .catch((err) => {
        console.error("Error modifying scrollbar:", err);
        sendResponse({
          isScrollbarRemoved: false,
          message: "Error modifying scrollbar",
        });
      });
  });
};

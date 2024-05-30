chrome.runtime.onMessage.addListener((message, sender) => {
  console.log("Message: ", message);
  console.log("Sender: ", sender);
  if (!message.shouldRemove) {
    getCurrentTab();
  }
});

export async function getCurrentTab() {
  const queryOpts = { active: true, lastFocusedWindow: true };
  const [tab] = await chrome.tabs.query(queryOpts);

  console.log(tab);
}

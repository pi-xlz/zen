/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { type Message } from "../lib/types";
import { STORAGE, WINDOWS } from "../lib/constants";

export const useZenState = () => {
  const [shouldRemoveScrollbar, setShouldRemoveScrollbar] = useState(false);
  // const WIN_ID = WINDOWS.getLastFocused().then((win) => win.id);

  useEffect(() => {
    STORAGE.get("isScrollbarRemoved", (items) => {
      if (items !== undefined) {
        setShouldRemoveScrollbar(items.isScrollbarRemoved);
      }
    });
    WINDOWS.getLastFocused((window) => {
      console.log("Last Focused Win: ", {
        windowId: window.id,
        windowType: window.type,
      });
    });
  }, []);

  const removeScrollbar = (arg: boolean) => {
    setShouldRemoveScrollbar(arg);
  };

  return {
    sendMessage,
    removeScrollbar,
    scrollbarState: shouldRemoveScrollbar,
  };
};

function sendMessage(message: Message) {
  chrome.runtime.sendMessage(message, (res) => console.log(res));
}

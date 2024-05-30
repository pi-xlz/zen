import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// const windows = chrome.windows;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export let CURRENT_WINDOW: undefined | Window = undefined;

// const getCurrentWindow = () => {
//   windows.getCurrent().then((window) => {
//     CURRENT_WINDOW = window;
//   });
// };

// getCurrentWindow();

// export const CURRENT_WINDOW = getCurrentWindow();

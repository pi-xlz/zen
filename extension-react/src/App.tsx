import type { Response } from "@/service_worker";
import { PopoutIcon, PowerIcon } from "./assets/icons/icons";
import NumberInput from "./components/number-input";
import { Switch } from "./components/switch";
import { useState, useEffect } from "react";

const storage = chrome.storage.local;

// todo: read scrollbar state from storage when extension loads
// todo: that is, synchronize the scrollbar state with the switch when page loads
export default function App() {
  const [shouldRemoveScrollbar, setShouldRemoveScrollbar] = useState(false);
  const handleToggle = () => {
    setShouldRemoveScrollbar((p) => !p);
  };

  chrome.runtime.sendMessage(
    { shouldRemoveScrollbar, message: "Remove the scrollbar!" },
    (response: Response) => {
      console.log("Worker's Response: ", response);
    }
  );

  // todo: synchronize UI with storage
  useEffect(() => {
    storage.get("isScrollbarRemoved", (items) => {
      console.log("Scrollar state(from local): ", items);
      setShouldRemoveScrollbar(items.isScrollbarRemoved);
    });
  }, [shouldRemoveScrollbar]);

  return (
    <div className="bg-[#111010] font-montreal">
      <header className="pt-8 px-7">
        <div className="bg-clr-header-bg bg-[url('/blob.svg')] bg-no-repeat w-[319px] flex justify-between items-center px-4 py-3 rounded-lg">
          <h1 className="text-clr-prmry font-oldschool font-medium relative top-1 text-xl">
            Zen
          </h1>
          <button>
            <PowerIcon />
          </button>
        </div>
        <p className="font-bric text-clr-prmry-txt text-[12px] mt-2">
          Read articles in &quot;peace nerds&quot;
        </p>
      </header>
      <main className="pt-8 px-7">
        <p
          className={`before:content-[url("/padding.svg")] before:mr-2 before:relative before:top-1 text-clr-prmry-txt`}
        >
          Whitespace/Padding(pixels):
        </p>
        <div className="mt-4"></div>
        <NumberInput />
        <div className="flex justify-between  items-center mt-5">
          <h2 className="text-clr-prmry-txt">Remove Scrollbar</h2>
          {/* // todo: check if there's a scrollbar present on the page, if there isn't disable the switch */}
          <Switch
            checked={shouldRemoveScrollbar}
            onCheckedChange={handleToggle}
          />
        </div>
      </main>
      <div className="mt-4"></div>
      <footer className="bg-clr-footer-bg flex items-center justify-center px-7 py-4">
        <button
          disabled
          className="w-[319px] bg-clr-footer-btn flex items-center justify-center gap-1 px-[100px] py-[10px] rounded-[5px] text-clr-prmry-txt cursor-not-allowed"
        >
          Use Floater{" "}
          <span>
            <PopoutIcon />
          </span>
        </button>
      </footer>
    </div>
  );
}

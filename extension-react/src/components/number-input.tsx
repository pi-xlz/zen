import { useState } from "react";
import { AddIcon, DashIcon } from "../assets/icons/icons";

const NumberInput = () => {
  const [paddingPx, setPaddingPx] = useState(200);
  return (
    <div className="flex justify-between border border-clr-border rounded-[24px] h-[72px] w-[319px] overflow-hidden">
      <button
        onClick={() => setPaddingPx((p) => p - 1)}
        className="py-4 px-5 border outline-none border-transparent border-r-clr-border bg-clr-input-bg"
      >
        <DashIcon />
      </button>
      <input
        className="bg-clr-input-bg outline-none text-clr-prmry-txt min-w-0 text-5xl text-center"
        type="text"
        // readOnly
        value={paddingPx}
        onChange={(e) => setPaddingPx(parseInt(e.target.value))}
      />
      <button
        onClick={() => setPaddingPx((p) => p + 1)}
        className="py-4 px-5 outline-none border border-transparent border-l-clr-border bg-clr-input-bg"
      >
        <AddIcon />
      </button>
    </div>
  );
};

export default NumberInput;

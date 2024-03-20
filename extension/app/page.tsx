import { PopoutIcon, PowerIcon } from "@/public/icons/icons";
import PaddingInput from "./components/padding-input";

const Home = () => {
  return (
    <>
      <header className="pt-8 px-7">
        <div className="bg-clr-header-bg bg-blob bg-no-repeat w-[319px] flex justify-between items-center px-4 py-3 rounded-lg">
          <h1 className="font-cursive text-clr-prmry leading-[-1] relative top-1">
            Zen
          </h1>
          <button>
            <PowerIcon />
          </button>
        </div>
        <p className="font-bric text-clr-prmry-txt text-[0.75rem] mt-2">
          Read articles in &quot;peace nerds&quot;
        </p>
      </header>
      <main className="pt-11 px-7">
        <p
          className={`before:content-[url("../public/icons/padding.svg")] before:mr-2 text-clr-prmry-txt`}
        >
          Whitespace/Padding(pixels):
        </p>
        <PaddingInput />
        <div className="flex justify-between items-center mt-5">
          <h2 className="text-clr-prmry-txt font-medium">Remove Scrollbar</h2>
          <button className="text-clr-prmry">Toggle</button>
        </div>
      </main>
      <p className="text-clr-prmry-txt text-[.625rem] text-center mb-3">
        Having issues? <span className="text-clr-prmry">Reach out!</span>
      </p>
      <footer className="bg-clr-footer-bg flex items-center justify-center px-7 py-4">
        <button className="bg-clr-footer-btn flex items-center gap-1 px-[100px] py-[10px] rounded-[5px] text-clr-prmry-txt active:scale-[.95]">
          Use Floater{" "}
          <span>
            <PopoutIcon />
          </span>
        </button>
      </footer>
    </>
  );
};

export default Home;

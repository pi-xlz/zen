import { PopoutIcon, PowerIcon } from "@/public/icons/icons";
import PaddingInput from "./components/padding-input";

const Home = () => {
  return (
    <>
      <header>
        <div>
          <h1 className="font-oldschool">Zen</h1>
          <div>
            <PowerIcon />
          </div>
        </div>
        <p className="font-bric">Read articles in &quot;peace nerds&quot;</p>
      </header>
      <main>
        <div>
          <p>Whitespace/Padding(pixels):</p>
        </div>
        <PaddingInput />
        <div>
          <h2>Remove Scrollbar</h2>
          <span>Toggle</span>
        </div>
      </main>
      <span>
        Having issues? <span>Reach out!</span>
      </span>
      <footer>
        <button>
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

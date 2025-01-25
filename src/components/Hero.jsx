import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumAI_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/groushan")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize any webpage using <br className="max-md:hidden" />
        <span className="orange_gradient">AI GPT-4</span>
      </h1>

      <h2 className="desc">
        Unlock the Power of Simplified Knowledge—an open-source summarizer
        designed to transform lengthy content into clear, concise, and effortlessly
        understandable summaries.
      </h2>
    </header>
  );
};

export default Hero;

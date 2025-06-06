import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/rahulsr-ai/article-summarizer")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text ">
        {" "}
        Summarize Article wth <br className="max-md:hidden" />
        <span className="orange_gradient "> OpenAi</span>
      </h1>
      <h2 className="desc">
        {" "}
        Simplify Your Reading with Sumize ,an open-source article summarizer
        that transform lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;

import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-3 pt-3">
        <img src={logo} alt="sumz_logo" className='w-28 object-contain' />
        <button type="button" onClick={() => window.open("https://github.com/AkashKumarSingh11032001/ai_summarizer")} className="black_btn">
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summerize Article with <br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT</span>
      </h1>
      <h2 className="desc">
      Streamline your perusing with Summize, an open-source article summerizer that change long articles into clear and brief rundowns. 
      </h2>
    </header>
  );
};

export default Hero;

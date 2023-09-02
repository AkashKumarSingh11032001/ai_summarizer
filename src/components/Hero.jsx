import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-3 pt-3">
        <img src={logo} alt="sumz_logo" className='"w-28 object-contain' />
        <button type="button" onClick={() => window.open("")} className="black_btn">
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summerize Article with <br/>
        <span className="orange_gradient">OpenAI GPT</span>
      </h1>
    </header>
  );
};

export default Hero;

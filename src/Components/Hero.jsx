import React from "react";
import logo from "../assets/logo.svg";
import emoji1 from "../assets/icons/emoji1.svg";
import emoji2 from "../assets/icons/emoji2.svg";
import emoji3 from "../assets/icons/emoji3.svg";
import emoji4 from "../assets/icons/emoji4.svg";

function Hero() {
  return (
    <section
      id="hero"
      className="py-14 relative lg:static lg:py-20 w-full min-h-screen"
    >
      <div className="container lg:relative  flex gap-12 justify-center h-full items-center flex-col">
        <div className=" h-screen flex flex-col absolute left-0 top-0  gap-32">
          <img
            src={emoji1}
            alt=""
            className="lg:w-32 w-24 h-full justify-between"
          />
          <h1 className="origin-top-left hidden lg:block rotate-[-28.99deg] text-white text-6xl font-normal font-['Good-Game']">
            HIDE THE PAIN
          </h1>
          <img
            src={emoji2}
            alt=""
            className="lg:w-32 mt-12 w-24 h-full justify-between"
          />
        </div>
        <img src={logo} alt="" />
        <div className="justify-start items-start gap-3 flex flex-wrap">
          <a
            href="https://t.me/HaroldCanHidePain"
            className="px-8 py-4 bg-[#5FFC67] rounded shadow justify-center items-center gap-2.5 flex"
          >
            <div className="text-black text-sm font-normal font-['Good-Game']">
              Join Telegram
            </div>
          </a>
          <a
            href="https://twitter.com/HaroldisPainles"
            className="px-8 py-4 bg-neutral-200 rounded shadow justify-center items-center gap-2.5 flex"
          >
            <div className="text-black text-sm font-normal font-['Good-Game']">
              Follow Twitter
            </div>
          </a>
        </div>
        <div className=" h-screen flex flex-col absolute right-0 top-0  gap-32">
          <img
            src={emoji3}
            alt=""
            className="lg:w-32 w-24 h-full justify-between"
          />
          <h1 className="origin-top-left hidden lg:block max-w-[300px] rotate-[-28.99deg] text-white text-6xl font-normal font-['Good-Game']">
            BE A STRONG HOLDER{" "}
          </h1>
          <img
            src={emoji4}
            alt=""
            className="lg:w-32 mt-12 w-24 h-full justify-between"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

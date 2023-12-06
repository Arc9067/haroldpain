import React from "react";
import x from "../assets/icons/x.svg";
import tg from "../assets/icons/tg.svg";

function Header() {
  return (
    <header className="w-full py-3 absolute top-0">
      <nav className="container flex justify-between items-center w-full">
        <a href="" className="">
          <div className="text-white text-3xl font-normal font-['Good-Game']">
            HEROLD
          </div>
        </a>

        <ul className=" justify-between items-center gap-24 hidden lg:flex">
          <li className="text-white text-base font-normal font-SpaceGrotesk">
            Home{" "}
          </li>
          <li className="text-white text-base font-normal font-SpaceGrotesk">
            About{" "}
          </li>{" "}
          <li className="text-white text-base font-normal font-SpaceGrotesk">
            Tokenomics{" "}
          </li>
        </ul>
        <div className="w-24 h-10 justify-start items-start gap-3 inline-flex">
          <div className="w-10 h-10 p-2 bg-[#5FFC67] rounded-lg justify-center items-center flex">
            <div className="w-6 h-6 relative flex-col justify-start items-start flex">
              <img src={x} alt="" />
            </div>
          </div>
          <div className="w-10 h-10 p-2 bg-[#5FFC67] rounded-lg justify-center items-center flex">
            <div className="w-6 h-6 relative flex-col justify-start items-start flex">
              {" "}
              <img src={tg} alt="" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

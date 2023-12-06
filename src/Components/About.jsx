import React from "react";
import star from "../assets/icons/star.svg";
import anime1 from "../assets/icons/anime1.svg";
import abt1 from "../assets/icons/abt1.svg";
import abt2 from "../assets/icons/abt2.svg";
import abt3 from "../assets/icons/abt3.svg";
import logo from "../assets/logo2.svg";

function About() {
  return (
    <section id="about" className="py-32 overflow-hidden w-full">
      <div className="container overflow-hidden">
        <div
          className="w-full flex
         flex-col"
        >
          <article className="relative w-max">
            <h1 className="text-white relative text-7xl font-normal font-['Good-Game'] rotate-[-3.67deg]">
              WHY HIDE THE <br /> PAIN
            </h1>
            {/* <img src={star} alt="" className=" top-0 right-0" /> */}
          </article>

          <article className="flex flex-col lg:flex-row lg:w-[80%] gap-10 items-center">
            <img src={anime1} alt="" />
            <div className=" text-white text-base font-normal font-['Space Grotesk'] leading-loose tracking-tight">
              The project is fully decentralized and community based. We just do
              our best to keep everyone together as an army. If you want to do
              something then do it, if someone asks for a hand out you can tell
              them that Pepe never paid for a thing. The project is fully
              decentralized and community based. The project is fully
              decentralized and community based. We just do our best to keep{" "}
            </div>
          </article>
          <div
            className="grid relative  mt-28 lg:grid-cols-2 justify-between
 items-center gap-20"
          >
            <div className="flex flex-col gap-20">
              <article className="flex gap-12 flex-col lg:flex-row items-start">
                <img src={abt1} alt="" />
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="text-white text-3xl font-normal font-['Good-Game']">
                    TRANSPARENCY & TRUST
                  </div>
                  <div className="w-96 text-white text-base font-normal font-['Space Grotesk'] leading-7 tracking-tight">
                    The project is fully decentralized and community based. We
                    just do our best to keep everyone together as an army. If
                    you want to do{" "}
                  </div>
                </div>
              </article>
              <article className="flex gap-12 flex-col lg:flex-row items-start">
                <img src={abt2} alt="" />
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="text-white text-3xl font-normal font-['Good-Game']">
                    TRANSPARENCY & TRUST
                  </div>
                  <div className="w-96 text-white text-base font-normal font-['Space Grotesk'] leading-7 tracking-tight">
                    The project is fully decentralized and community based. We
                    just do our best to keep everyone together as an army. If
                    you want to do{" "}
                  </div>
                </div>
              </article>{" "}
              <article className="flex gap-12 flex-col lg:flex-row items-start">
                <img src={abt3} alt="" />
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="text-white text-3xl font-normal font-['Good-Game']">
                    TRANSPARENCY & TRUST
                  </div>
                  <div className="w-96 text-white text-base font-normal font-['Space Grotesk'] leading-7 tracking-tight">
                    The project is fully decentralized and community based. We
                    just do our best to keep everyone together as an army. If
                    you want to do{" "}
                  </div>
                </div>
              </article>
            </div>
            <img
              src={logo}
              alt=""
              className="lg:absolute  -52 right-0 w-[30rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

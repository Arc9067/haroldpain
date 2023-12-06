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
              Harold, the internet's favorite meme-lord and master of hiding his
              pain, has finally taken the plunge into the world of
              cryptocurrency. Introducing: HaroldCoin, the token that promises
              to "bring joy and laughter to the blockchain, one transaction at a
              time." <br />
              <br /> Harold, ever the pragmatist, knows that life can be a
              rollercoaster of emotions, and with the crypto market being no
              exception, he wants to offer investors a way to laugh through the
              tears. "HaroldCoin is more than just an investment," he explains,
              "it's a community, a way of life. It's about embracing the
              absurdity of it all and finding humor in the midst of the chaos."
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
                    No rug pulls, just laughs!
                  </div>
                  <div className="w-96 text-white text-base font-normal font-['Space Grotesk'] leading-7 tracking-tight">
                    Majority of LP locked in multi-sig & some burned for good
                    measure. Contract locked with EverOwn for extra security.
                    Safe & sound, ready to laugh our way to the moon!
                  </div>
                </div>
              </article>
              <article className="flex gap-12 flex-col lg:flex-row items-start">
                <img src={abt2} alt="" />
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="text-white text-3xl font-normal font-['Good-Game']">
                    Fueling our laughter with every trade!
                  </div>
                  <div className="w-96 text-white text-base font-normal font-['Space Grotesk'] leading-7 tracking-tight">
                    With every HaroldCoin transaction, 2% automatically gets
                    added to our treasury wallet. This isn't just chump change –
                    it's the fuel that powers our marketing campaigns and drives
                    the development of amazing utilities. So not only are you
                    laughing all the way to the bank, you're also contributing
                    to the future growth and success of HaroldCoin. It's a
                    win-win situation, folks!
                  </div>
                </div>
              </article>{" "}
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

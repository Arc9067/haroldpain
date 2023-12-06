import React from "react";
import mics1 from "../assets/icons/mics1.svg";
import mics2 from "../assets/icons/mics2.svg";

function Mics() {
  return (
    <section className="py-32 w-full">
      <div className="container flex justify-center items-center gap-24 flex-col">
        <img src={mics1} alt="" />
        <img src={mics2} alt="" />
      </div>
    </section>
  );
}

export default Mics;

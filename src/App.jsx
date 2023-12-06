import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full relative bg-[#3B2224] text-white font-SpaceGrotesk">
      <Header />
      <Hero />
      <About />
      <Mics />
      <Footer />
    </div>
  );
}

export default App;

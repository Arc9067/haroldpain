import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Footer from "./Components/Footer";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
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

import React from "react";

function Footer() {
  return (
    <footer className="py-5 w-full bg-[#5FFC67]">
      <div className="container text-black flex justify-center flex justify-center items-center items-center">
        <p>
          Copyright © {new Date().getFullYear()} Harold All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

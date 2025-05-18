import React from "react";
import "./About.css";
import Aboutdetails from "./Aboutdetails";

const About = () => {
  return (
    <div className="bg-[#111c30] py-8 px-4 md:py-15 md:px-45">
      <div className="relative overflow-hidden pb-10 md:pb-14 text-center">
        <h2 className="relative z-10 mb-2 uppercase text-white text-3xl md:text-5xl py-3 font-semibold">About Me</h2>

        <div className="relative z-10 mx-auto h-1 w-40 bg-gradient-to-r from-transparent via-[#4ecca3] to-transparent rounded-full overflow-hidden">
          <span className="dot-circle absolute top-1/2 rounded-full bg-[#4ecca3]"></span>
        </div>

        <span
          className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-6xl md:text-9xl font-bold uppercase text-heading opacity-10 text-white"
          style={{ willChange: "transform" }}
        >
          About
        </span>
      </div>

      <div>
        <Aboutdetails />
      </div>
    </div>
  );
};

export default About;
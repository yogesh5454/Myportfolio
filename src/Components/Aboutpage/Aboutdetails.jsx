import React from "react";
import "./Aboutdetails.css";
import profile from "../images/profile.jpg";

const Aboutdetails = () => {
  const handleDownloadResume = () => {
   
    window.open('https://drive.google.com/file/d/1vOUahbAWtCkjTyktHHW0cUvLs4EAIq-w/view?usp=sharing', '_blank');
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-7 items-center">
        <div className="col-span-1 p-2 mx-auto max-w-xs sm:max-w-sm md:max-w-full">
          <div className="about-image">
            <div className="border-wrapper">
              <div className="border-image">
                <div className="dot-path">
                  <div className="animate-circle dot-1"></div>
                  <div className="animate-circle dot-2"></div>
                  <div className="animate-circle dot-3"></div>
                  <div className="animate-circle dot-4"></div>
                </div>
                
                <img
                  src={profile}
                  alt="Yogesh"
                  className="w-full h-auto md:h-120"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="details text-white px-4 md:px-0 mt-6 md:mt-0">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6">
            Hi, I am <span className="text-[#4ecca3]">Yogesh Sapkota</span>
          </h1>
          
          <ul className="space-y-2 md:space-y-3 text-base md:text-xl font-medium text-gray-300">
            <li className="flex flex-wrap">
              <span className="text-[#4ecca3] mr-2">●</span>
              <span className="w-24 md:w-28">First Name</span>
              <span className="mr-2">:</span> Yogesh
            </li>
            <li className="flex flex-wrap">
              <span className="text-[#4ecca3] mr-2">●</span>
              <span className="w-24 md:w-28">Last Name</span>
              <span className="mr-2">:</span> Sapkota
            </li>
            <li className="flex flex-wrap">
              <span className="text-[#4ecca3] mr-2">●</span>
              <span className="w-24 md:w-28">Age</span>
              <span className="mr-2">:</span> 21 years
            </li>
            <li className="flex flex-wrap">
              <span className="text-[#4ecca3] mr-2">●</span>
              <span className="w-24 md:w-28">Nationality</span>
              <span className="mr-2">:</span> Nepali
            </li>
            <li className="flex flex-wrap">
              <span className="text-[#4ecca3] mr-2">●</span>
              <span className="w-24 md:w-28">Languages</span>
              <span className="mr-2">:</span> English, Nepali, Hindi
            </li>
            <li className="flex flex-wrap">
              <span className="text-[#4ecca3] mr-2">●</span>
              <span className="w-24 md:w-28">Address</span>
              <span className="mr-2">:</span> Budhanilakantha, Kathmandu
            </li>
          </ul>

          <button 
            onClick={handleDownloadResume}
            className="relative cursor-pointer overflow-hidden px-4 py-2 text-black flex items-center gap-2 rounded-sm text-sm sm:text-base border-none mt-4 z-10 group"
          >
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-700 group-hover:text-black">
              Download Resume
            </span>
            <span className="absolute inset-0 bg-white translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-1000 ease-in-out z-0"></span>
            <span className="absolute inset-0 bg-[#72e3af] z-[-1]"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutdetails;
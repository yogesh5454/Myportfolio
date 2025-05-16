import React from "react";
import "./Aboutdetails.css";
const Aboudetails = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-7">
        <div className="col-span-1 p-2">
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
                  src="https://avatars.githubusercontent.com/u/84499534?v=4"
                  alt="Joseph Bieber"
                  className="h-120 w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="details text-white">
          <h1 className="text-4xl font-semibold mb-6">
            Hi, I am <span className="text-[#4ecca3]">Yogesh Sapkota</span>
          </h1>

          <ul className="space-y-3 text-xl font-medium text-gray-300">
            <li className="flex">
              <span className="text-[#4ecca3] mr-2">●</span>
              <span className="w-28">First Name</span>
              <span className="mr-2">:</span> Yogesh
            </li>
            <li className="flex">
              <span className="text-[#4ecca3] mr-2">●</span>
              <span className="w-28">Last Name</span>
              <span className="mr-2">:</span> Sapkota
            </li>
            <li className="flex">
              <span className="text-[#4ecca3] mr-2">●</span>
              <span className="w-28">Age</span>
              <span className="mr-2">:</span> 21 years
            </li>
            <li className="flex">
              <span className="text-[#4ecca3] mr-2">●</span>
              <span className="w-28">Nationality</span>
              <span className="mr-2">:</span> Nepali
            </li>
            <li className="flex">
              <span className="text-[#4ecca3] mr-2">●</span>
              <span className="w-28">Languages</span>
              <span className="mr-2">:</span> English, Nepali,Hindi
            </li>
            <li className="flex">
              <span className="text-[#4ecca3] mr-2">●</span>
              <span className="w-28">Address</span>
              <span className="mr-2">:</span> Budhanilakantha,Kathmandu
          
            </li>
         
          </ul>

          <button className="bg-[#4ecca3] py-2 px-3 mt-6 rounded-md text-lg text-black">Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Aboudetails;

import React, { useState } from "react";
import { CiShare1 } from "react-icons/ci";
import { RiShareBoxFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Projectsdatafun = ({
  image,
  title,
  description,
  liveDemoUrl,
  codeUrl,
  isMobile,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleRedirect = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleProjectClick = () => {
    if (isMobile) {
      setIsActive(!isActive);
    }
  };

  return (
    <div 
      className="bg-[#1b2336] rounded-lg overflow-hidden shadow-xl border border-gray-700 transition-transform duration-500 hover:-translate-y-2 m-2"
      onClick={isMobile ? handleProjectClick : undefined}
    >
      <div className="relative group overflow-hidden">
        <img
          className={`h-48 md:h-56 w-full object-cover transition-all duration-300 ${
            isMobile && isActive ? "blur-sm" : "group-hover:blur-sm"
          }`}
          src={image}
          alt={title}
        />
        
        <div 
          className={`absolute inset-0 flex items-center justify-center gap-5 transition-all duration-500 
            ${isMobile 
              ? isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full" 
              : "opacity-0 -translate-x-full group-hover:translate-x-0 group-hover:opacity-100"}`
          }
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRedirect(liveDemoUrl);
            }}
            className="w-10 text-xl cursor-pointer h-10 bg-[#4ecca3] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <RiShareBoxFill />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRedirect(codeUrl);
            }}
            className="w-10 text-xl cursor-pointer h-10 bg-[#4ecca3] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <FaGithub />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h1 className="text-lg md:text-xl text-white font-medium">{title}</h1>
        <h3 className="text-xs md:text-sm mt-1 text-gray-300">{description}</h3>
      </div>
    </div>
  );
};

export default Projectsdatafun;
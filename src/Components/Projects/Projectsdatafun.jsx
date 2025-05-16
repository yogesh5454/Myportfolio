import React from "react";
import { CiShare1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const Projectsdatafun = ({
  image,
  title,
  description,
  liveDemoUrl,
  codeUrl,
}) => {
  const handleRedirect = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <div className="' bg-[#1b2336] p-6 w-105 rounded-lg border shadow-2xl border-gray-700 transition-transform duration-500 delay-100 hover:-translate-y-2'">
      <div className="relative group overflow-hidden">
        <img
          className="h-60 w-full object-cover transition-all duration-300 group-hover:blur-sm"
          src={image}
          alt={title}
        />

        <div className="absolute inset-0  flex items-center justify-center gap-5 opacity-0 -translate-x-full group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
          <button
            onClick={() => handleRedirect(liveDemoUrl)}
            className="w-10 text-xl cursor-pointer h-10 bg-[#4ecca3] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <CiShare1 />
          </button>
          <button
            onClick={() => handleRedirect(codeUrl)}
            className="w-10 text-xl cursor-pointer h-10 bg-[#4ecca3] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <FaGithub />
          </button>
        </div>
      </div>

      <h1 className="text-xl text-white pt-4 font-medium">{title}</h1>
      <h3 className="text-sm pt-1 text-gray-300">{description}</h3>
    </div>
  );
};

export default Projectsdatafun;

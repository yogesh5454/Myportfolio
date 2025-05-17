import React from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { CiLinkedin, CiInstagram } from "react-icons/ci";

const Icons = () => {
  const icons = [FaFacebookF, FaGithub, CiLinkedin, CiInstagram];

  return (
    <div className="flex gap-3 pt-6">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="relative cursor-pointer w-10 h-10 overflow-hidden rounded-sm group"
        >
          <div className="absolute inset-0 flex items-center justify-center border border-gray-700 text-white transition-transform duration-300 group-hover:-translate-y-full">
            <Icon className="text-lg" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-teal-500 text-white transition-transform duration-300 translate-y-full group-hover:translate-y-0">
            <Icon className="text-lg" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Icons;

import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  const icons = [FaFacebookF, FaGithub, CiLinkedin, CiInstagram];

  return (
    <div className="bg-[#0f1d30] px-4 md:px-8 lg:px-16 flex flex-col sm:flex-row items-center justify-between border-t border-gray-700 py-4">
        <div className="flex gap-3 ">
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

      <div className="text-gray-400 text-sm">
        <h3>
          © 2025, All right reserved{" "}
          <span className="text-white font-medium">Yogesh Sapkota</span>
        </h3>
      </div>
    </div>
  );
};

export default Footer;

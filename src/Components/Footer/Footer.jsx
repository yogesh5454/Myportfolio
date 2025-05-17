import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  const icons = [FaFacebookF, FaGithub, CiLinkedin, CiInstagram];

  return (
    <div className="bg-[#0f1d30] px-4 md:px-8 lg:px-16 flex flex-col sm:flex-row items-center justify-between border-t border-gray-700 py-4">
      <div className="flex gap-2 mb-3 sm:mb-0">
        {icons.map((Icon, index) => (
          <a
            key={index}
            className="flex items-center justify-center w-8 h-8 text-white border border-gray-700 rounded-sm hover:bg-gray-700 transition-colors duration-300"
          >
            <Icon className="text-sm" />
          </a>
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

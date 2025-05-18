import React from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { CiLinkedin, CiInstagram } from "react-icons/ci";

const Icons = () => {
  const socialLinks = [
    { Icon: FaFacebookF, url: "https://www.facebook.com/yogesh.sapkota.940" },
    { Icon: FaGithub, url: "https://github.com/yogesh5454" },
    { Icon: CiLinkedin, url: "https://www.linkedin.com/in/yogesh-sapkota-12422021a/" },
    { Icon: CiInstagram, url: "https://www.instagram.com/yogesh__sapkota/" }
  ];
  
  return (
    <div className="flex gap-3 pt-6">
      {socialLinks.map(({ Icon, url }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative cursor-pointer w-10 h-10 overflow-hidden rounded-sm group block"
        >
          <div className="absolute inset-0 flex items-center justify-center border border-gray-700 text-white transition-transform duration-300 group-hover:-translate-y-full">
            <Icon className="text-lg" />
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center bg-[#4ecca3] text-white transition-transform duration-300 translate-y-full group-hover:translate-y-0">
            <Icon className="text-lg" />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Icons;
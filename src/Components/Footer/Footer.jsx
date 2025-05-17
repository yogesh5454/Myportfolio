import React from 'react';
import { FaFacebookF } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { CiLinkedin } from 'react-icons/ci';
import { CiInstagram } from 'react-icons/ci';
const Footer = () => {
      const icons = [FaFacebookF, FaGithub, CiLinkedin, CiInstagram];

  return (
    <div className='bg-[#0f1d30] px-45 flex items-center justify-between border-t-1 border-gray-700 py-5'>
        <div className="flex gap-3 text-white ">
      {icons.map((Icon, index) => (
        <div className='p-2 border border-gray-700 rounded-sm '> <Icon  key={index}  className='text-lg'/></div>
       
      ))}
    </div>
    <div className='text-white'>
        <h3>© 2025, All right reserved <span className='font-semibold'>Yogesh Sapkota</span> </h3>
    </div>
    </div>
  )
}

export default Footer

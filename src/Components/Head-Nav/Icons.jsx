import React from 'react';
import { FaFacebookF } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { CiLinkedin } from 'react-icons/ci';
import { CiInstagram } from 'react-icons/ci';

const Icons = () => {
  const icons = [FaFacebookF, FaGithub, CiLinkedin, CiInstagram];

  return (
    <div className="flex gap-3 text-white pt-6">
      {icons.map((Icon, index) => (
        <div className='p-2 border border-gray-700 rounded-sm '> <Icon  key={index}  className='text-lg'/></div>
       
      ))}
    </div>
  );
};

export default Icons;
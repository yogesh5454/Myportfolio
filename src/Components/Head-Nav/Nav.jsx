import React, { useState, useEffect } from 'react';
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => (document.body.style.overflow = 'auto');
  }, [menuOpen]);

  return (
    <div className='bg-[#0f1d30] px-4 sm:px-8 md:px-12 lg:px-20 py-4 relative z-50'>
      <div className='flex justify-between items-center'>
        <div className='logo'>
          <h1 className='text-[#72e3af] font-extrabold text-3xl sm:text-4xl'>YOGESH.</h1>
        </div>

        <div className='md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)} className='text-white text-2xl'>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className='hidden md:flex navbars text-white items-center gap-8 text-sm sm:text-base'>
          <a className='hover:underline underline-offset-8 decoration-[#72e3af] decoration-3' href="#">HOME</a>
          <a className='hover:underline underline-offset-8 decoration-[#72e3af] decoration-3' href="#">ABOUT</a>
          <a className='hover:underline underline-offset-8 decoration-[#72e3af] decoration-3' href="#">EXPERIENCE</a>
          <a className='hover:underline underline-offset-8 decoration-[#72e3af] decoration-3' href="#">WORKS</a>
          <a className='hover:underline underline-offset-8 decoration-[#72e3af] decoration-3' href="#">CONTACT</a>
        </div>

        <div className='hidden md:block resume'>
          <button className='bg-[#72e3af] px-4 py-2 text-black hover:bg-white flex items-center gap-2 rounded-sm text-sm sm:text-base'>
            Resume <IoDocumentTextOutline className="text-lg" />
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className='fixed top-0 left-0 w-full h-screen bg-[#0f1d30] flex flex-col items-center justify-center gap-6 z-40 text-white text-lg'>
          <button onClick={() => setMenuOpen(false)} className='absolute top-6 right-6 text-3xl text-[#72e3af]'>
            <FaTimes />
          </button>
          <a onClick={() => setMenuOpen(false)} className='hover:text-[#72e3af]' href="#">HOME</a>
          <a onClick={() => setMenuOpen(false)} className='hover:text-[#72e3af]' href="#">ABOUT</a>
          <a onClick={() => setMenuOpen(false)} className='hover:text-[#72e3af]' href="#"> RESUME</a>
          <a onClick={() => setMenuOpen(false)} className='hover:text-[#72e3af]' href="#">WORKS</a>
          <a onClick={() => setMenuOpen(false)} className='hover:text-[#72e3af]' href="#">06. CONTACT</a>
          <button className='bg-[#72e3af] px-6 py-2 text-black hover:bg-white rounded-sm text-base'>
            HIRE ME
          </button>
        </div>
      )}
    </div>
  );
}

export default Nav;

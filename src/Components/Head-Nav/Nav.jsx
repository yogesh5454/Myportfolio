import React, { useState, useEffect } from 'react';
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      const isScrolled = currentScrollY > window.innerHeight * 0.8;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setScrolled(isScrolled);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => (document.body.style.overflow = 'auto');
  }, [menuOpen]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className={`${scrolled ? 'fixed top-0 left-0 right-0 shadow-lg transition-transform duration-300 ease-in-out z-40' : 'relative z-40'} 
        ${visible || !scrolled ? 'translate-y-0' : '-translate-y-full'}
        ${scrolled ? 'border-b border-gray-800' : ''}
        bg-[#0f1d30] px-4 sm:px-8 md:px-12 lg:px-20 py-4 transition-all duration-300`}
    >
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
          <a 
            onClick={() => scrollToSection('home')} 
            className='hover:underline underline-offset-8 decoration-[#72e3af] decoration-3 cursor-pointer'
          >
            HOME
          </a>
          <a 
            onClick={() => scrollToSection('about')} 
            className='hover:underline underline-offset-8 decoration-[#72e3af] decoration-3 cursor-pointer'
          >
            ABOUT
          </a>
          <a 
            onClick={() => scrollToSection('resume')} 
            className='hover:underline underline-offset-8 decoration-[#72e3af] decoration-3 cursor-pointer'
          >
            RESUME
          </a>
          <a 
            onClick={() => scrollToSection('works')} 
            className='hover:underline underline-offset-8 decoration-[#72e3af] decoration-3 cursor-pointer'
          >
            WORKS
          </a>
          <a 
            onClick={() => scrollToSection('contact')} 
            className='hover:underline underline-offset-8 decoration-[#72e3af] decoration-3 cursor-pointer'
          >
            CONTACT
          </a>
        </div>

        <div className='hidden md:block resume'>
           <button className="relative cursor-pointer overflow-hidden px-4 py-2 text-black flex items-center gap-2 rounded-sm text-sm sm:text-base border-none z-10 group">
      <span className="relative z-10 flex items-center gap-2 transition-colors duration-700 group-hover:text-black">
        Resume <IoDocumentTextOutline className="text-lg" />
      </span>

      <span className="absolute inset-0 bg-white translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-1000 ease-in-out z-0"></span>

      <span className="absolute inset-0 bg-[#72e3af] z-[-1]"></span>
    </button>
        </div>
      </div>

      {menuOpen && (
        <div className='fixed inset-0 w-full h-screen bg-[#0f1d30] flex flex-col items-center justify-center gap-6 z-50 text-white text-lg pointer-events-auto'>
          <button onClick={() => setMenuOpen(false)} className='absolute top-6 right-6 text-3xl text-[#72e3af]'>
            <FaTimes />
          </button>
          <a onClick={() => scrollToSection('home')} className='hover:text-[#72e3af] cursor-pointer'>HOME</a>
          <a onClick={() => scrollToSection('about')} className='hover:text-[#72e3af] cursor-pointer'>ABOUT</a>
          <a onClick={() => scrollToSection('resume')} className='hover:text-[#72e3af] cursor-pointer'>RESUME</a>
          <a onClick={() => scrollToSection('works')} className='hover:text-[#72e3af] cursor-pointer'>WORKS</a>
          <a onClick={() => scrollToSection('contact')} className='hover:text-[#72e3af] cursor-pointer'>CONTACT</a>
          <button className='bg-[#72e3af] px-6 py-2 text-black hover:bg-white rounded-sm text-base transition-colors duration-300 mt-4'>
            Resume <IoDocumentTextOutline className="inline ml-2 text-lg" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Nav;
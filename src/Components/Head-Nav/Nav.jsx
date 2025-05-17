import React, { useState, useEffect } from 'react';
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import './animation.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we've scrolled down past the header (assuming header is 100vh)
      const isScrolled = currentScrollY > window.innerHeight * 0.8;
      
      // Handle navbar visibility with direction detection
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      
      setScrolled(isScrolled);
      setLastScrollY(currentScrollY);

      // Check which section is currently in view
      const sections = ['home', 'about', 'skills', 'resume', 'works', 'contact'];
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the section is in the viewport (or slightly above it)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => (document.body.style.overflow = 'auto');
  }, [menuOpen]);

  // Scroll to section function
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
      className={`${scrolled ? 'fixed top-0 left-0 right-0 shadow-lg z-50 nav-scrolled' : 'relative'} 
        ${visible || !scrolled ? 'translate-y-0' : '-translate-y-full'}
        ${scrolled ? 'border-b border-gray-800 bg-[#0f1d30]/95 backdrop-blur-sm' : 'bg-[#0f1d30]'}
        px-4 sm:px-8 md:px-12 lg:px-20 py-4 transition-all duration-300`}
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
            className={`hover:underline underline-offset-8 decoration-[#72e3af] decoration-3 cursor-pointer transition-colors duration-300 ${activeSection === 'home' ? 'nav-active text-teal-400' : ''}`}
          >
            HOME
          </a>
          <a 
            onClick={() => scrollToSection('about')} 
            className={`hover:underline underline-offset-8 decoration-[#72e3af] decoration-3 cursor-pointer transition-colors duration-300 ${activeSection === 'about' ? 'nav-active text-teal-400' : ''}`}
          >
            ABOUT
          </a>
          <a 
            onClick={() => scrollToSection('resume')} 
            className={`hover:underline underline-offset-8 decoration-[#72e3af] decoration-3 cursor-pointer transition-colors duration-300 ${activeSection === 'resume' ? 'nav-active text-teal-400' : ''}`}
          >
            RESUME
          </a>
          <a 
            onClick={() => scrollToSection('works')} 
            className={`hover:underline underline-offset-8 decoration-[#72e3af] decoration-3 cursor-pointer transition-colors duration-300 ${activeSection === 'works' ? 'nav-active text-teal-400' : ''}`}
          >
            WORKS
          </a>
          <a 
            onClick={() => scrollToSection('contact')} 
            className={`hover:underline underline-offset-8 decoration-[#72e3af] decoration-3 cursor-pointer transition-colors duration-300 ${activeSection === 'contact' ? 'nav-active text-teal-400' : ''}`}
          >
            CONTACT
          </a>
        </div>

        <div className='hidden md:block resume'>
          <button className='bg-[#72e3af] px-4 py-2 text-black hover:bg-white flex items-center gap-2 rounded-sm text-sm sm:text-base transition-colors duration-300'>
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
          <a onClick={() => scrollToSection('home')} className={`hover:text-[#72e3af] cursor-pointer transition-colors duration-300 ${activeSection === 'home' ? 'text-teal-400' : ''}`}>HOME</a>
          <a onClick={() => scrollToSection('about')} className={`hover:text-[#72e3af] cursor-pointer transition-colors duration-300 ${activeSection === 'about' ? 'text-teal-400' : ''}`}>ABOUT</a>
          <a onClick={() => scrollToSection('resume')} className={`hover:text-[#72e3af] cursor-pointer transition-colors duration-300 ${activeSection === 'resume' ? 'text-teal-400' : ''}`}>RESUME</a>
          <a onClick={() => scrollToSection('works')} className={`hover:text-[#72e3af] cursor-pointer transition-colors duration-300 ${activeSection === 'works' ? 'text-teal-400' : ''}`}>WORKS</a>
          <a onClick={() => scrollToSection('contact')} className={`hover:text-[#72e3af] cursor-pointer transition-colors duration-300 ${activeSection === 'contact' ? 'text-teal-400' : ''}`}>CONTACT</a>
          <button className='bg-[#72e3af] px-6 py-2 text-black hover:bg-white rounded-sm text-base transition-colors duration-300'>
            RESUME
          </button>
        </div>
      )}
    </div>
  );
}

export default Nav;
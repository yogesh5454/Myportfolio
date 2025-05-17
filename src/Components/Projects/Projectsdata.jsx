import React, { useState, useEffect } from "react";
import Projectsdatafun from "./Projectsdatafun";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import camera from "../images/camera.png";
import disaster from "../images/Disaster.png";
import ecommerce from "../images/Ecommerce.png";
import hosttar from "../images/Hosttar.png";
import nike from "../images/nike.png";
import noteapp from "../images/noteapp.png";
import portfolio from "../images/portfolio.png";
import solo from "../images/solo.png";

const Projectsdata = () => {
  const allProjects = [
    {
      image: ecommerce,
      title: "Ecommerce Website",
      description: "Ecommerce Website with different categories of product",
      liveDemoUrl: "https://ecommerceweb-six.vercel.app/",
      codeUrl: "https://github.com/yogesh5454/ecommerceweb",
      category: ["react"],
    },
    {
      image: disaster,
      title: "Disaster Management",
      description: "Disaster Management website for Kathmandu Metropolitan",
      liveDemoUrl: "https://disaster-managementktm.vercel.app/",
      codeUrl: "https://github.com/yogesh5454/DisasterManagementktm",
      category: ["react"],
    },
    {
      image: noteapp,
      title: "Noteapp",
      description: "Google Keep clone app where we can add/edit notes",
      liveDemoUrl: "https://noteapp-lovat.vercel.app/",
      codeUrl: "https://github.com/yogesh5454/Noteapp",
      category: ["js"],
    },
    {
      image: hosttar,
      title: "Hosttar Website",
      description: "Built Hosttar website",
      liveDemoUrl: "https://yogesh5454.github.io/hosttar.github.io/",
      codeUrl: "https://github.com/yogesh5454/hosttar.github.io",
      category: ["html&css"],
    },
    {
      image: solo,
      title: "Solo Website",
      description: "Built solo website",
      liveDemoUrl: "https://solo-psi.vercel.app/",
      codeUrl: "https://github.com/yogesh5454/Solo",
      category: ["html&css", "js"],
    },
    {
      image: portfolio,
      title: "Portfolio",
      description: "Built portfolio website for myself",
      liveDemoUrl: "https://portfolio-omega-three-15.vercel.app/",
      codeUrl: "https://github.com/yogesh5454/Portfolio",
      category: ["react"],
    },
    {
      image: camera,
      title: "Camshop",
      description: "Built camshop ecommerce website with add to cart features",
      liveDemoUrl: "https://camshop-teal.vercel.app/",
      codeUrl: "https://github.com/yogesh5454/Camshop",
      category: ["react", "js"],
    },
    {
      image: nike,
      title: "Nike Website",
      description: "Built Nike website which features products, reviews etc",
      liveDemoUrl: "https://nikewebsite-two.vercel.app/",
      codeUrl: "https://github.com/yogesh5454/Nikewebsite",
      category: ["react", "html&css"],
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(6);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const loadMoreProjects = () => {
    setVisibleProjects((prevCount) => prevCount + 6);
  };

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((project) =>
          project.category.includes(activeFilter)
        );

  const projectsToDisplay = filteredProjects.slice(0, visibleProjects);

  const handleFilterClick = (filter) => {
    if (filter !== activeFilter) {
      setActiveFilter(filter);
      setVisibleProjects(6);
    }
  };

  const filterOptions = [
    { id: "all", label: "ALL" },
    { id: "react", label: "REACT JS" },
    { id: "html&css", label: "HTML & CSS" },
    { id: "js", label: "NODE JS" },
  ];

  return (
    <div>
      {/* Filter Buttons */}
      <div className="text-white justify-center gap-2 md:gap-3 lg:gap-5 text-sm md:text-base lg:text-xl py-6 md:py-8 flex flex-wrap">
        {filterOptions.map((filter) => (
          <motion.button
            key={filter.id}
            className={`py-2 px-3 md:px-4 lg:px-6 shadow-lg rounded-lg transition-colors duration-300 cursor-pointer ${
              activeFilter === filter.id
                ? "bg-teal-500 text-black"
                : "bg-[#1b2336]"
            }`}
            onClick={() => handleFilterClick(filter.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter.label}
          </motion.button>
        ))}
      </div>

      <div className="flex flex-col items-center">
        {/* Project Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 justify-items-center" 
          layout
        >
          <AnimatePresence mode="wait">
            {projectsToDisplay.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="w-full"
              >
                <Projectsdatafun
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  liveDemoUrl={project.liveDemoUrl}
                  codeUrl={project.codeUrl}
                  isMobile={isMobile}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          {visibleProjects < filteredProjects.length && (
            <motion.button
              onClick={loadMoreProjects}
              className="px-5 py-2 font-medium rounded-md bg-teal-500 text-black cursor-pointer transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Projects
            </motion.button>
          )}

          <motion.button 
            className="flex items-center justify-center px-5 py-2 font-medium rounded-md bg-teal-500 text-black cursor-pointer transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="mr-2 text-lg" />
            <a href="https://github.com/yogesh5454" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </motion.button>
        </div>

        {/* Status Messages */}
        {visibleProjects >= filteredProjects.length &&
          filteredProjects.length > 0 && (
            <motion.button
              disabled
              className="mt-8 px-5 py-2 font-medium rounded-md bg-gray-400 text-gray-700 cursor-not-allowed transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              No More Projects
            </motion.button>
          )}

        {filteredProjects.length === 0 && (
          <motion.div
            className="mt-8 text-white text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No projects found for this category.
          </motion.div>
        )}
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-6 right-6">
        <button 
          className="w-10 h-10 bg-teal-500 text-gray-900 rounded-full flex items-center justify-center shadow-lg hover:bg-teal-400 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Projectsdata;
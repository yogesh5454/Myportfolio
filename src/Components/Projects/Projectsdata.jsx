import React, { useState } from "react";
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
      category: ["react", ],
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
      category: ["html&css","js"],
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
      category: ["react","js"],
    },
    {
      image: nike,
      title: "Nike Website",
      description: "Built Nike website which features products, reviews etc",
      liveDemoUrl: "https://nikewebsite-two.vercel.app/",
      codeUrl: "https://github.com/yogesh5454/Nikewebsite",
      category: ["react","html&css",],
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(6);
  const [activeFilter, setActiveFilter] = useState("all");

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

  return (
    <div>
      <div className="text-white justify-center gap-5 text-xl py-10 flex flex-wrap">
        {["all", "react", "html&css", "js"].map((filter) => (
          <motion.button
            key={filter}
            className={`py-2 px-6 shadow-2xl rounded-lg transition-colors duration-300 cursor-pointer ${
              activeFilter === filter
                ? "bg-[#4ecca3] text-black"
                : "bg-[#252f3c]"
            }`}
            onClick={() => handleFilterClick(filter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter === "all"
              ? "All"
              : filter === "html&css"
              ? "HTML & CSS"
              : filter.toUpperCase()}
          </motion.button>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <motion.div className="flex flex-wrap gap-9 justify-center" layout>
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
              >
                <Projectsdatafun
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  liveDemoUrl={project.liveDemoUrl}
                  codeUrl={project.codeUrl}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        <div className="flex gap-4">
          <div>
            {" "}
            {visibleProjects < filteredProjects.length && (
              <motion.button
                onClick={loadMoreProjects}
                className="mt-10 px-6 py-3 font-medium rounded-md bg-[#4ecca3] text-black cursor-pointer transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Load More Projects
              </motion.button>
            )}
          </div>

          <button className="mt-10 flex items-center px-6 py-3 font-medium rounded-md bg-[#4ecca3] text-black cursor-pointer transition-colors duration-300">
            <FaGithub className="mr-2 text-lg" />{" "}
            <a href="https://github.com/yogesh5454"> View More on GitHub</a>
          </button>
        </div>

        {visibleProjects >= filteredProjects.length &&
          filteredProjects.length > 0 && (
            <motion.button
              disabled
              className="mt-10 px-6 py-3 font-medium rounded-md bg-gray-400 text-gray-700 cursor-not-allowed transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              No More Projects
            </motion.button>
          )}

        {filteredProjects.length === 0 && (
          <motion.div
            className="mt-10 text-white text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No projects found for this category.
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projectsdata;

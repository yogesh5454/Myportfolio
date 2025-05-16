import React, { useState } from "react";
import Projectsdatafun from "./Projectsdatafun";

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
    },
    {
      image: disaster,
      title: "Disaster Management",
      description: "Disaster Mangement website for Kathmandu Metropolitan",
      liveDemoUrl: "https://disaster-managementktm.vercel.app/",
      codeUrl: "https://github.com/yogesh5454/DisasterManagementktm"
    },
    {
      image: noteapp,
      title: "Noteapp",
      description: "Google keep clone app where we can add edit note in that",
      liveDemoUrl: "https://noteapp-lovat.vercel.app/",
      codeUrl: "https://github.com/yogesh5454/Noteapp",
    },
    {
      image: hosttar,
      title: "Hosttar website",
      description: "Built Hostatr website",
      liveDemoUrl: "https://yogesh5454.github.io/hosttar.github.io/",
      codeUrl: "https://github.com/yogesh5454/hosttar.github.io",
    },
    {
      image: solo,
      title: "Solo website",
      description: "Built solo website",
      liveDemoUrl: "https://solo-psi.vercel.app/",
      codeUrl: "https://github.com/yogesh5454/Solo",
    },
    {
      image: portfolio,
      title: "Portfolio",
      description: "Built portfolio website for myself",
      liveDemoUrl: "https://portfolio-omega-three-15.vercel.app/",
      codeUrl: "https://github.com/yogesh5454/Portfolio",
    },
    {
      image: camera,
      title: "Camshop",
      description: "Built camshop ecommerce website with add to cart features",
      liveDemoUrl: "https://camshop-teal.vercel.app/",
      codeUrl: "https://github.com/yogesh5454/Camshop",
    },
    {
      image: nike,
      title: "Nike Website",
      description: "Built Nike website which features products, reviews etc",
      liveDemoUrl: "https://nikewebsite-two.vercel.app/",
      codeUrl: "https://github.com/yogesh5454/Nikewebsite",
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(6);
  
  const loadMoreProjects = () => {
    setVisibleProjects(prevCount => prevCount + 6);
  };
  
  const projectsToDisplay = allProjects.slice(0, visibleProjects);
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap gap-9 ">
        {projectsToDisplay.map((project, index) => (
          <Projectsdatafun
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            liveDemoUrl={project.liveDemoUrl}
            codeUrl={project.codeUrl}
          />
        ))}
      </div>
      
      <button 
        onClick={loadMoreProjects}
        disabled={visibleProjects >= allProjects.length}
        className={`mt-10 px-6 py-3 font-medium rounded-md transition-colors duration-300 ${
          visibleProjects < allProjects.length 
            ? "bg-[#4ecca3] text-black  cursor-pointer" 
            : "bg-gray-400 text-gray-700 cursor-not-allowed"
        }`}
      >
        {visibleProjects < allProjects.length ? "Load More Projects" : "No More Projects"}
      </button>
    </div>
  );
};

export default Projectsdata;
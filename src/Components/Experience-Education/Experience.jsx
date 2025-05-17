import React from 'react';
import { IoIosSchool } from "react-icons/io";
import { HiBuildingOffice } from "react-icons/hi2";

const Experience = () => {
  const educationData = [
    {
      period: "2018 – 2020",
      title: "Intermediate Level",
      institution: "Kathmandu Model Secondary School,Bagbazzar",
      description: "Completed higher secondary education with a focus on science. Studied core subjects including Physics, Chemistry, and Mathematics"
    },
    {
      period: "2021 – Present",
      title: "Bachelor of Science in Computer Science and Information Technology",
      institution: "Asian School of Management and Technology(Affiliated to T.U),Gongabu",
      description: "Pursuing a Bachelor's degree in CSIT. Completed coursework in programming languages (C, C++, C#), Data Structures & Algorithms (DSA),Web Technology and System Analysis & Design (SAD) across eight semesters."
    },
  ];

  const experienceData = [
    {
      period: "2025/feb - 2025/may",
      title: "Frontend Developer Intern",
      company: "Softtech Foundation",
      description: "During my internship as a Frontend Developer, I was responsible for building and enhancing responsive user interfaces using HTML, CSS, and JavaScript,React and Tailwind."
    },
  ];

  const TimelineItem = ({ period, title, subtitle, description }) => (
    <div className="relative pl-8 pb-8 md:pl-10">
      <div className="absolute left-2 top-4 w-4 h-4 rounded-full bg-gray-600 border-2 border-blue-900 z-10"></div>
      <div className="inline-block bg-gray-700 text-white text-xs md:text-sm px-3 py-1 rounded-full mb-2">
        {period}
      </div>
      <h3 className="text-teal-400 text-lg md:text-xl font-semibold m-0 mb-1">{title}</h3>
      <h4 className="text-white text-sm md:text-base m-0 mb-2">{subtitle}</h4>
      <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );

  return (
    <div className="bg-[#0f1d30] text-white px-4 md:px-6 lg:px-8 py-12">
      <div className="relative overflow-hidden pb-8 text-center">
        <h2 className="relative z-10 mb-2 uppercase text-white text-3xl md:text-4xl lg:text-5xl py-3 font-semibold">
          My Resume
        </h2>

        <div className="relative z-10 mx-auto h-1 w-28 md:w-40 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full overflow-hidden">
          <span className="dot-circle absolute top-1/2 rounded-full bg-teal-400"></span>
        </div>

        <span
          className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-6xl md:text-7xl lg:text-9xl font-bold uppercase text-heading opacity-10 text-white"
          style={{ willChange: "transform" }}
        >
          Resume
        </span>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {/* Education Section */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-teal-400 text-xl">
              <IoIosSchool />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold m-0">Educational Qualification</h2>
          </div>
          
          <div className="relative ">
                        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-600"></div>

            {educationData.map((item, index) => (
              <TimelineItem 
                key={index}
                period={item.period}
                title={item.title}
                subtitle={item.institution}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-teal-400 text-xl">
              <HiBuildingOffice />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold m-0">Working Experience</h2>
          </div>
          
 <div className="relative ">
                        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-600"></div>            {experienceData.map((item, index) => (
              <TimelineItem 
                key={index}
                period={item.period}
                title={item.title}
                subtitle={item.company}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to top button (as shown in the image) */}
      <div className="fixed bottom-6 right-6">
        <button 
          className="w-10 h-10 bg-teal-400 text-gray-900 rounded-full flex items-center justify-center shadow-lg hover:bg-teal-300 transition-colors"
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

export default Experience;
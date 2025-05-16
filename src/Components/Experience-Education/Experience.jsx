
import React from 'react';
import { IoIosSchool } from "react-icons/io";
import { HiBuildingOffice } from "react-icons/hi2";

const Experience = () => {
  const educationData = [
    {
      period: "2018 – 2020",
      title: "Intermediate Level",
      institution: "Kathmandu Model Secondary School,Bagbazzar",
      description: "Completed higher secondary education with a focus on science. Studied core subjects including Physics, Chemistry, and Mathematics"},
    {
      period: "2021 – Present",
      title: " Bachelor of Science in Computer Science and Information Technology",
      institution: "Asian School of Management and Technology(Affiliated to T.U),Gongabu",
      description: "Pursuing a Bachelor's degree in CSIT. Completed coursework in programming languages (C, C++, C#), Data Structures & Algorithms (DSA),Web Technology and System Analysis & Design (SAD) across eight semesters."
    },
   
  ];

  const experienceData = [
    {
      period: "2025/feb - 2025/may",
      title: "Frontend Developer Intern",
      company: "Softtech Foundation",
      description: "During my internship as a Frontend Developer , I was responsible for building and enhancing responsive user interfaces using HTML, CSS, and JavaScript,React and Tailwind. "
    },
  
  ];

  const TimelineItem = ({ period, title, subtitle, description }) => (
    <div className="relative mb-10 pl-16">
      <div className="absolute left-2 top-4 w-4 h-4 rounded-full bg-gray-600 border-2 border-blue-900 z-10"></div>
      <div className="inline-block bg-gray-800 text-white text-sm px-4 py-1 rounded-full mb-4">
        {period}
      </div>
      <h3 className="text-[#4ecca3] text-xl font-semibold m-0 mb-1">{title}</h3>
      <h4 className="text-white text-base m-0 mb-4">{subtitle}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );

  return (

    <div className="bg-[#0f1d30] text-white  px-45">
                <div className="relative overflow-hidden pb-14 text-center">
          <h2 className="relative z-10 mb-2 uppercase text-white text-5xl py-3 font-semibold">
            My Resume
          </h2>

          <div className="relative z-10 mx-auto h-1 w-40 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full overflow-hidden">
            <span className="dot-circle absolute top-1/2 rounded-full bg-teal-400"></span>
          </div>

          <span
            className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-10 text-white"
            style={{ willChange: "transform" }}
          >
            Resume
          </span>
        </div>
      <div className="flex  gap-8 py-10">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[#4ecca3] text-2xl"><IoIosSchool/></span>
            <h2 className="text-2xl font-semibold m-0">Educational Qualification</h2>
          </div>
          <div className="relative">
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

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[#4ecca3] text-2xl"><HiBuildingOffice/></span>
            <h2 className="text-2xl font-semibold m-0">Working Experience</h2>
          </div>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-600"></div>
            {experienceData.map((item, index) => (
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
    </div>
  );
};

export default Experience;
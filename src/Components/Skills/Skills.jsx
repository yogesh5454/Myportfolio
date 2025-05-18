import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { DiResponsive } from "react-icons/di";
import { SiJirasoftware } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      icons: <FaReact />,
      label: "React",
    },
    {
      label: "JavaScript",
      icons: <IoLogoJavascript />,
    },
    {
      label: "Html",
      icons: <TiHtml5 />,
    },
    {
      label: "Css",
      icons: <FaCss3 />,
    },
    {
      label: "Tailwind Css",
      icons: <RiTailwindCssFill />,
    },
    {
      label: "Bootstrap",
      icons: <FaBootstrap />,
    },
    {
      label: "Git",
      icons: <FaGitAlt />,
    },
    {
      label: "Responsive Design",
      icons: <DiResponsive />,
    },
    {
      label: "Jira",
      icons: <SiJirasoftware />,
    },
  ];

  return (
    <div>
      <div className="bg-[#111c30] py-8 px-4 md:py-15 md:px-45">
        <div className="relative overflow-hidden pb-8 md:pb-14 text-center">
          <h2 className="relative z-10 mb-2 uppercase text-white text-3xl md:text-5xl py-3 font-semibold">
            My Skills
          </h2>

          <div className="relative z-10 mx-auto h-1 w-40 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full overflow-hidden">
            <span className="dot-circle absolute top-1/2 rounded-full bg-[#4ecca3]"></span>
          </div>

          <span
            className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-6xl md:text-9xl font-bold uppercase text-heading opacity-10 text-white"
            style={{ willChange: "transform" }}
          >
            Skills
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
          {skills.map((skill, index) => (
            <div
              className="bg-[#1a2437] p-3 md:p-5 rounded-lg transition-transform duration-500 delay-100 hover:-translate-y-2 flex flex-col items-center"
              key={index}
            >
              <div className="text-[#4ecca3] text-4xl sm:text-5xl md:text-6xl lg:text-8xl pb-3 md:pb-7">
                {skill.icons}
              </div>
              <h1 className="text-white text-base sm:text-xl md:text-2xl pb-2 md:pb-4 font-semibold text-center">
                {skill.label}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
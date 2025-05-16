import React from 'react'
import Projectsdata from './Projectsdata'

const Projects = () => {
  return (
       <div className="bg-[#111c30] py-15 px-45">
      <div className="relative overflow-hidden pb-14 text-center">
        <h2 className="relative z-10 mb-2 uppercase text-white text-5xl py-3 font-semibold">My Projects</h2>

        <div className="relative z-10 mx-auto h-1 w-40 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full overflow-hidden">
          <span className="dot-circle absolute top-1/2 rounded-full bg-teal-400"></span>
        </div>

        <span
          className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-10 text-white"
          style={{ willChange: "transform" }}
        >
          Projects
        </span>
      </div>

      <div>
        <Projectsdata/>
      </div>
    </div>
  )
}

export default Projects

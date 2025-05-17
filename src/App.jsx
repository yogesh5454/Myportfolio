
import './App.css'
import About from './Components/Aboutpage/About'
import Finalcontact from './Components/Contact/Finalcontact'
import Experience from './Components/Experience-Education/Experience'
import Footer from './Components/Footer/Footer'
import Output from './Components/Head-Nav/Output'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'

function App() {

  return (
    <>
    <div id="output"> <Output/></div>
     
     <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="resume">
        <Experience />
      </div>
      <div id="works">
        <Projects />
      </div>
      <div id="contact">
        <Finalcontact />
      </div>
    <Footer/>
    </>
  )
}

export default App

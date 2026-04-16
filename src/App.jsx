import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Orbit from "./pages/Orbit";
import Contact from "./pages/Contact";

function App() {
  return (
    <main className="bg-obsidian min-h-screen text-white">
      <Navbar />
      <Home />         {/* Must have id="home" */}
      <About />        {/* Must have id="about" */}
      <Experience />   {/* Must have id="experience" */}
      <Skills />       {/* Must have id="skills" */}
      <Projects />     {/* Must have id="projects" */}
      <Testimonials /> {/* Must have id="testimonials" */}
      <Orbit />        {/* Must have id="orbit" */}
      <Contact />      {/* Must have id="contact" */}
    </main>
  );
}

export default App;
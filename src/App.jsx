import React from "react";
// Import using specific names
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Orbit from "./pages/Orbit";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Testimonials />
      <Orbit />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
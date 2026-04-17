import React, { useEffect } from "react";

// Global Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page Sections
import Home from "./pages/Home";
import About from "./pages/About";
import GitHubSection from "./components/GitHubSection"; // Your new Contributions Graph
import Experience from "./pages/Experience";
import Skills from "./pages/Skills"; 
import Projects from "./pages/Projects"; 
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Orbit from "./pages/Orbit";

function App() {
  // Ensures the page starts at the top on refresh
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#0a0a0a] selection:bg-purple-500/30 relative min-h-screen w-full">
      
      {/* 1. FIXED NAVIGATION */}
      <Navbar />

      {/* 2. THE CONTENT SECTIONS */}
      {/* Note: Each component should have an id (e.g., id="home") 
          inside its own file to match the Navbar links. 
      */}
      <div className="relative z-10 w-full">
        
        <Home />
        
        <About />

        {/* GitHub Graph acts as a bridge between About and Experience */}
        <GitHubSection />
        
        <Experience />
        
        <Skills />
        
        <Projects />
        
        <Testimonials />
        
        <Contact />
        
        <Orbit />
        
        <Footer />
        
      </div>

    </main>
  );
}

export default App;
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Journey", href: "#experience", id: "experience" },
    { name: "Arsenal", href: "#skills", id: "skills" },
    { name: "Vault", href: "#projects", id: "projects" },
    { name: "Echoes", href: "#testimonials", id: "testimonials" },
    { name: "Orbit", href: "#orbit", id: "orbit" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      // This margin tells the observer to trigger when the section is 40% from the top
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Target ALL sections that have an ID attribute
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] p-4 md:p-6 pointer-events-none">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <motion.div 
          className="text-white font-display text-xl tracking-tighter pointer-events-auto cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          SENGABO<span className="text-glow-violet italic font-medium">.JR</span>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-1 glass px-4 py-2 rounded-full border border-white/5 pointer-events-auto relative">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative text-[9px] md:text-[10px] uppercase tracking-widest px-2 md:px-3 py-1.5 transition-colors duration-500 font-bold ${
                activeSection === link.id ? "text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {link.name}
              
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-glow-violet rounded-full shadow-[0_0_10px_#a855f7]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
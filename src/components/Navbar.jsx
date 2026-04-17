import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Journey", href: "#experience" },
    { name: "Arsenal", href: "#skills" },
    { name: "Vault", href: "#projects" },
    { name: "Echoes", href: "#testimonials" },
    { name: "Orbit", href: "#orbit" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-white font-bold tracking-[0.4em] text-xs uppercase z-[110]"
        >
          Sengabo<span className="text-purple-500">.</span>Jr
        </motion.div>

        {/* DESKTOP LINKS - With Dot Indicator */}
        <div className="hidden lg:flex items-center gap-6 bg-black/40 backdrop-blur-xl px-8 py-3 rounded-full border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className="group relative flex flex-col items-center"
              >
                <span className={`text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"
                }`}>
                  {link.name}
                </span>
                
                {/* The Active Dot */}
                {isActive && (
                  <motion.div 
                    layoutId="activeDot"
                    className="absolute -bottom-2 w-1 h-1 bg-purple-500 rounded-full shadow-[0_0_8px_#a855f7]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 z-[110] relative"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"}`} />
        </button>

        {/* MOBILE OVERLAY */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-[105] lg:hidden"
            >
              <div className="flex flex-col items-center gap-10">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.a
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex flex-col items-center"
                    >
                      <span className={`text-4xl font-display uppercase tracking-tighter transition-all ${
                        isActive ? "text-purple-500 italic scale-110" : "text-white/60 hover:text-white"
                      }`}>
                        {link.name}
                      </span>
                      {isActive && (
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 shadow-[0_0_10px_#a855f7]" />
                      )}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
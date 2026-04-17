import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import codingMan from "../assets/images/coding-man-sitting.png";

const Home = () => {
  // The raw roles
  const roles = ["Frontend Wizard", "Designer", "Basketball Player", "Software Architect"];
  
  // Function to convert to "Firstupperrestlower" (Title Case)
  const formatWord = (str) => {
    return str.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === formatWord(roles[index]).length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 z-10">
        
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display leading-tight tracking-tighter uppercase text-white">
            Mugisha Benjamin <br />
            {/* The "Flexing" Dynamic Text */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-glow-violet to-glow-blue italic font-medium tracking-tight normal-case">
              {formatWord(roles[index]).substring(0, subIndex)}
              <span className="animate-pulse text-white font-normal ml-1">|</span>
            </span>
          </h1>
          
          <p className="mt-6 text-gray-400 max-w-sm text-base md:text-lg font-light leading-relaxed">
            Architecting digital masterpieces from <span className="text-white">Kigali</span>. 
            Blending code, design, and competitive spirit.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-white text-obsidian text-sm font-bold rounded-full hover:scale-105 transition-transform">View Works</a>
            <a href="#contact" className="px-6 py-3 border border-white/10 text-white text-sm font-bold rounded-full hover:bg-white/5 transition-all">Initiate</a>
          </div>
        </motion.div>

        <motion.div style={{ y: yImage }} className="relative flex justify-center">
          <div className="absolute w-64 h-64 bg-glow-violet/20 blur-[80px] rounded-full" />
          <img 
            src={codingMan} 
            alt="Wizard" 
            className="w-full max-w-[450px] object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
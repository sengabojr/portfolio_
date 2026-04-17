import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import codingMan from "../assets/images/coding-man-sitting.png";

const Home = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a] py-12 md:py-20"
    >
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          
          {/* LEFT CONTENT: Scaled Down Typography */}
          <div className="text-center lg:text-left lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4 flex items-center justify-center lg:justify-start gap-3"
            >
              <div className="w-6 h-[1px] bg-purple-500" />
              <span className="text-purple-500 text-[10px] uppercase tracking-[0.5em] font-bold">
                Software Architect
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-white leading-tight"
            >
              Sengabo <br />
              <span className="text-purple-500 italic font-light">Jr.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-gray-400 text-sm md:text-base max-w-sm mx-auto lg:mx-0 leading-relaxed font-light tracking-wide"
            >
              Building scalable digital systems with precision code 
              and a focus on high-end user experiences.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a href="#projects" className="px-8 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-purple-600 hover:text-white transition-all duration-500">
                View Vault
              </a>
              <a href="#contact" className="px-8 py-3 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white/5 transition-all">
                Contact
              </a>
            </motion.div>
          </div>

          {/* RIGHT CONTENT: Local Asset Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative group">
              <img 
                src={codingMan} 
                alt="Coding Man Sitting" 
                className="w-full max-w-[320px] md:max-w-[420px] h-auto object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.15)]"
              />
              
              {/* Subtle backglow focused behind the character */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-600/10 rounded-full blur-[70px] -z-10 group-hover:bg-purple-600/20 transition-all duration-700" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Vertical Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-700"
      >
        <ChevronDown size={20} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
};

export default Home;
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faBook, faSchool } from "@fortawesome/free-solid-svg-icons";

const educationData = [
  {
    title: "Software Development",
    institution: "Saint Laurent",
    period: "2024 — Present",
    description: "Deep-diving into full-stack architecture, modern JavaScript frameworks, and system design.",
    icon: faUserGraduate,
    color: "text-purple-500",
    glow: "shadow-[0_0_15px_#a855f7]"
  },
  {
    title: "Ordinary Level",
    institution: "GS Kirwa",
    period: "2020 — 2023",
    description: "Built a strong foundation in Mathematics and core sciences, sparking an interest in logic.",
    icon: faBook,
    color: "text-blue-400",
    glow: "shadow-[0_0_15px_#60a5fa]"
  },
  {
    title: "Primary Education",
    institution: "Ecole Primaire Saint Nicolas",
    period: "2013 — 2019",
    description: "Where the journey began. Developed early analytical skills and academic discipline.",
    icon: faSchool,
    color: "text-emerald-400",
    glow: "shadow-[0_0_15px_#34d399]"
  },
];

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="min-h-screen w-full bg-[#0a0a0a] py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-32 relative z-10">
        
        {/* Header */}
        <div className="mb-24 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white"
          >
            Academic <span className="text-purple-500 italic font-light">History</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Main Vertical Energy Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-purple-500/20" />

          <div className="space-y-20">
            {educationData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* 1. The Glowing Node (Dot) */}
                <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 z-30 ${item.glow}`} />

                {/* 2. The Horizontal Connector Line */}
                <div 
                  className={`absolute top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent z-20 hidden md:block
                  ${index % 2 === 0 ? "right-1/2 w-20" : "left-1/2 w-20"}`} 
                />
                
                {/* Mobile Connector Line */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-[1px] bg-purple-500/50 md:hidden z-20" />

                {/* 3. The Card */}
                <div className="w-full md:w-[40%] ml-16 md:ml-0">
                  <div className="bg-white/[0.02] backdrop-blur-md p-6 rounded-2xl transition-all hover:bg-white/[0.05] group relative overflow-hidden">
                    
                    {/* Subtle Corner Accent */}
                    <div className={`absolute top-0 left-0 w-1 h-full bg-purple-500/40`} />

                    <div className="flex items-center gap-3 mb-2">
                      <FontAwesomeIcon icon={item.icon} className={`${item.color} text-xs`} />
                      <span className="text-gray-500 text-[9px] uppercase tracking-[0.3em] font-bold">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-purple-400 text-[10px] font-bold mt-1 uppercase tracking-widest">
                      {item.institution}
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed mt-4 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for desktop symmetry */}
                <div className="hidden md:block w-[40%]" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    year: "2024 — Present",
    company: "Saint Laurent",
    role: "Frontend Architect",
    desc: "Spearheading luxury digital experiences, focusing on high-performance motion design and internal tool logic.",
  },
  {
    year: "2023 — 2024",
    company: "Midnight Labs",
    role: "Full Stack Developer",
    desc: "Built scalable SaaS dashboards and integrated MongoDB architectures for real-time data tracking.",
  },
  {
    year: "2022 — 2023",
    company: "Kigali Tech Hub",
    role: "UI/UX Engineer",
    desc: "Transformed complex user requirements into elegant Figma systems and translated them into pixel-perfect React code.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  // This creates a "Springy" animation for the line so it feels fluid
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" ref={ref} className="py-24 bg-obsidian relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl lg:text-7xl font-display uppercase tracking-tighter text-white mb-20 text-center"
        >
          The <span className="text-glow-violet italic">Journey</span>
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* THE GLOWING LINE */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-0 md:left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-glow-violet to-glow-blue origin-top shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          />

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* DOT INDICATOR */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-obsidian border-2 border-glow-violet rounded-full -translate-x-[7px] z-10 shadow-[0_0_10px_#a855f7]" />

                {/* CONTENT CARD */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`w-full md:w-5/12 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                >
                  <span className="text-glow-blue font-mono text-sm tracking-widest">{exp.year}</span>
                  <h3 className="text-2xl font-display text-white mt-2 uppercase">{exp.company}</h3>
                  <h4 className="text-glow-violet text-sm font-bold mb-4 uppercase tracking-tighter">{exp.role}</h4>
                  <p className="text-gray-400 font-light leading-relaxed">{exp.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
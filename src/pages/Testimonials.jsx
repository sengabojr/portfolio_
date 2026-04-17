import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faMagic } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO, TechFlow",
    text: "Working with Sengabo is like watching a digital architect at work. The attention to detail is unmatched.",
    color: "from-purple-500/20",
  },
  {
    name: "Sarah Chen",
    role: "Product Lead",
    text: "He doesn't just write code; he crafts experiences. Our conversion rate jumped by 40% after the redesign.",
    color: "from-blue-500/20",
  },
  {
    name: "Marcus Thorne",
    role: "Creative Director",
    text: "The 'Wizardry' isn't just a gimmick. The speed and smoothness of his animations are world-class.",
    color: "from-emerald-500/20",
  },
  {
    name: "Elena Vance",
    role: "Founder, Zenith",
    text: "A rare talent who understands the bridge between complex backends and high-end aesthetic frontends.",
    color: "from-pink-500/20",
  },
];

const Testimonials = () => {
  const targetRef = useRef(null);
  
  // 1. Track scroll progress through this specific section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 2. Map vertical scroll (0 to 1) to horizontal movement (-10% to -70%)
  // Adjust "-70%" based on how many cards you have
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"]);

  return (
    // The container height (300vh) determines how long the user has to scroll
    <section 
      id="testimonials" 
      ref={targetRef} 
      className="relative h-[300vh] bg-[#0a0a0a]"
    >
      {/* 3. The Sticky Container - keeps the content visible while scrolling */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Header Text */}
<div className="container mx-auto px-6 lg:px-20 mb-20 text-center">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative inline-block"
  >
    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-none">
      Echoes of <span className="text-purple-500 italic font-light">Wizardry</span>
    </h2>
    
    {/* Centered Sharp Underline */}
    <motion.div 
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "120px", opacity: 1 }}
      transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
      className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_12px_#a855f7]"
    />
  </motion.div>
</div>
        {/* 4. The Horizontal Track */}
        <motion.div style={{ x }} className="flex gap-8 px-10">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className={`flex-shrink-0 w-[350px] md:w-[450px] h-[300px] bg-gradient-to-br ${item.color} to-transparent backdrop-blur-md rounded-[3rem] border border-white/5 p-10 flex flex-col justify-between relative group overflow-hidden`}
            >
              {/* Decorative Icon */}
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <FontAwesomeIcon icon={faMagic} size="8x" />
              </div>

              <FontAwesomeIcon icon={faQuoteLeft} className="text-purple-500 text-3xl mb-4" />
              
              <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed italic">
                "{item.text}"
              </p>

              <div>
                <h4 className="text-white font-bold tracking-widest uppercase text-sm">{item.name}</h4>
                <p className="text-purple-400 text-[10px] uppercase tracking-[0.2em] mt-1">{item.role}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Visual Progress Bar (Bottom) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-white/10 overflow-hidden">
          <motion.div 
            style={{ scaleX: scrollYProgress }} 
            className="h-full bg-purple-500 origin-left"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
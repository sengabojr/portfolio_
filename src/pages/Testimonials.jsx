import { motion } from "framer-motion";
import { useRef } from "react";
import * as Lucide from "lucide-react";

const testimonials = [
  {
    quote: "Working with Sengabo Jr. is like watching digital wizardry. He turned our Figma designs into an optimized Next.js masterpiece faster than scheduled.",
    name: "Alex Johnson",
    role: "Product Lead @ Midnight",
    color: "violet",
  },
  {
    quote: "His frontend logic at Saint Laurent is flawless. The animations are fluid, and the code structure is intuitive and scalable.",
    name: "Sarah Chen",
    role: "Senior Architect @ YSL",
    color: "blue",
  },
  {
    quote: "Sengabo Jr. doesn't just write code; he drafts immersive digital experiences. The level of detail in his motion design is unmatched.",
    name: "Benjamin Mugisha",
    role: "Dev Manager @ K-Hub",
    color: "violet",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  return (
    <section id="testimonials" className="py-32 bg-obsidian overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        
        <div className="flex flex-col items-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-display uppercase tracking-tighter text-white text-center"
          >
            Echoes of <span className="text-glow-violet italic">Wizardry</span>
          </motion.h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-glow-violet to-transparent mt-4" />
        </div>

        {/* MASKED VIEWPORT */}
        <div className="relative">
          {/* Subtle Side Fades to indicate more content */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />

          <motion.div 
            ref={scrollRef} 
            className="flex gap-8 px-10 cursor-grab active:cursor-grabbing"
            drag="x"
            // dragConstraints ensures the user can't drag the cards off-screen permanently
            dragConstraints={{ right: 0, left: -800 }} 
          >
            {testimonials.map((t, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="flex-shrink-0 w-[85vw] md:w-[450px] lg:w-[500px] h-[400px] glass p-10 rounded-[3rem] border border-white/5 flex flex-col justify-between group relative overflow-hidden transition-colors duration-500 hover:border-white/20"
              >
                {/* Background Glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity rounded-full ${t.color === 'violet' ? 'bg-glow-violet' : 'bg-glow-blue'}`} />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <Lucide.Quote 
                      className={t.color === 'violet' ? 'text-glow-violet' : 'text-glow-blue'} 
                      size={40} 
                      strokeWidth={1}
                    />
                    <div className="flex gap-1 opacity-50">
                      {[...Array(5)].map((_, i) => <Lucide.Star key={i} size={12} fill="white" className="text-white" />)}
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light italic">
                    "{t.quote}"
                  </p>
                </div>
                
                <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-white/5">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-display text-white text-xl shadow-inner">
                     {t.name.charAt(0)}
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider">{t.name}</h4>
                      <p className={`text-[10px] tracking-[0.2em] uppercase mt-1 font-bold ${t.color === 'violet' ? 'text-glow-violet' : 'text-glow-blue'}`}>
                        {t.role}
                      </p>
                   </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="mt-16 flex flex-col items-center gap-2">
          <div className="w-40 h-[2px] bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-glow-violet"
              animate={{ x: [-40, 40] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
          <span className="text-[10px] text-gray-600 uppercase tracking-[0.3em]">Slide to Explore</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
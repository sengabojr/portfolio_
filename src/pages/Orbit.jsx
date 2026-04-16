import { motion } from "framer-motion";

const tools = [
  { name: "React", slug: "react", radius: 120, speed: 20 },
  { name: "Tailwind", slug: "tailwindcss", radius: 120, speed: 20, delay: 10 },
  { name: "Next.js", slug: "nextdotjs", radius: 190, speed: 30 },
  { name: "Node.js", slug: "nodedotjs", radius: 190, speed: 30, delay: 15 },
  { name: "Framer", slug: "framer", radius: 260, speed: 40 },
  { name: "MongoDB", slug: "mongodb", radius: 260, speed: 40, delay: 20 },
  { name: "Python", slug: "python", radius: 330, speed: 50 },
  { name: "Figma", slug: "figma", radius: 330, speed: 50, delay: 25 },
];

const Orbit = () => {
  return (
    <section id="orbit" className="py-32 bg-obsidian overflow-hidden relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-7xl font-display uppercase tracking-tighter text-white mb-10"
        >
          System <span className="text-glow-violet italic">Architecture</span>
        </motion.h2>

        {/* ORBITAL STAGE */}
        <div className="relative h-[700px] w-full flex items-center justify-center">
          
          {/* THE SUN (CENTER PROFILE) */}
          <div className="relative z-20 group">
            <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.4)] transition-transform duration-500 group-hover:scale-110">
              <span className="text-2xl font-display text-white italic tracking-tighter">STACK</span>
            </div>
            {/* Ambient Core Glow */}
            <div className="absolute inset-0 bg-glow-violet/20 blur-[40px] rounded-full animate-pulse" />
          </div>

          {/* THE ORBITAL TRACKS (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {[120, 190, 260, 330].map((r) => (
              <circle
                key={r}
                cx="50%"
                cy="50%"
                r={r}
                fill="none"
                stroke="white"
                strokeWidth="1"
                className="opacity-10"
                strokeDasharray="4 4"
              />
            ))}
          </svg>

          {/* THE PLANETS (TOOL ICONS) */}
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="absolute group"
              style={{
                "--radius": `${tool.radius}px`,
                "--speed": `${tool.speed}s`,
                "--delay": `-${tool.delay || 0}s`,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: tool.speed,
                repeat: Infinity,
                ease: "linear",
                delay: tool.delay || 0
              }}
            >
              {/* This inner div counter-rotates so the icon stays upright */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: tool.speed, repeat: Infinity, ease: "linear", delay: tool.delay || 0 }}
                style={{ translateX: `${tool.radius}px` }}
                className="relative"
              >
                <div className="p-3 bg-obsidian border border-white/10 rounded-xl glass hover:border-glow-violet/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300">
                  <img 
                    src={`https://cdn.simpleicons.org/${tool.slug}/ffffff`} 
                    alt={tool.name}
                    className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all"
                  />
                  
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-obsidian text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {tool.name}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background radial gradient for atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-glow-violet/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
};

export default Orbit;
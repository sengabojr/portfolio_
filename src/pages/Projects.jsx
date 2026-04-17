import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import * as Lucide from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Rwandan School Finder",
    category: "Web Architecture",
    description: "High-end digital platform for discovering and connecting with Rwandan schools.",
    tags: ["React", "Tailwind v4", "MongoDB Atlas"],
    link: "https://github.com/sengabojr/ocean-school-finder",
    color: "from-purple-500/20"
  },
  {
    id: 2,
    title: "Midnight Dash",
    category: "SaaS Solution",
    description: "An obsidian-themed analytics dashboard for monitoring real-time server wizardry.",
    tags: ["Next.js", "MongoDB", "Recharts"],
    link: "https://github.com/sengabojr",
    color: "from-blue-500/20"
  },
  {
    id: 3,
    title: "Kigali Connect",
    category: "Mobile App",
    description: "Cross-platform community application bridging the gap between local services in Rwanda.",
    tags: ["Flutter", "Firebase", "Dart"],
    link: "https://github.com/sengabojr",
    color: "from-emerald-500/20"
  }
];

const Projects = () => {
  const targetRef = useRef(null);
  
  // This tracks the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Moves the cards horizontally from 0% to -66% of the container width
  // Adjusted for 3 projects to ensure the last one stays in view
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section 
      id="projects" // This ID allows the Navbar to find this section
      ref={targetRef} 
      className="relative h-[300vh] bg-obsidian"
    >
      {/* Sticky wrapper keeps the viewport 'locked' while we scroll through projects */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Decorative Background Text */}
        <div className="absolute top-20 left-10 opacity-[0.03] pointer-events-none select-none">
          <h2 className="text-[25vw] font-display uppercase leading-none tracking-tighter text-white">
            Works
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-10 lg:px-20">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] w-[350px] md:h-[550px] md:w-[600px] lg:h-[600px] lg:w-[850px] flex-shrink-0 overflow-hidden rounded-[3rem] border border-white/5 bg-white/5 p-8 lg:p-12 transition-all hover:border-white/20"
            >
              {/* Dynamic Glow Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-[1px] bg-glow-violet"></span>
                    <span className="text-xs uppercase tracking-[0.3em] text-glow-blue font-bold">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl lg:text-8xl font-display uppercase tracking-tighter leading-[0.9] text-white">
                    {project.title}
                  </h3>
                  
                  <p className="mt-8 text-gray-400 text-lg max-w-lg font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] border border-white/10 px-4 py-1.5 rounded-full text-white/70 bg-white/5 backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
                    whileTap={{ scale: 0.9 }}
                    className="ml-auto w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-obsidian transition-colors"
                  >
                    <Lucide.ArrowUpRight size={28} />
                  </motion.a>
                </div>
              </div>

              {/* Geometric Mockup (The 'Magic Box') */}
              <div className="absolute -bottom-12 -right-12 w-1/2 h-1/2 bg-gradient-to-br from-white/10 to-transparent rounded-tl-[4rem] border-t border-l border-white/10 group-hover:translate-y-[-20px] group-hover:translate-x-[-20px] transition-transform duration-500 ease-out" />
            </motion.div>
          ))}
          
          {/* Final "Contact Me" Card to end the scroll gracefully */}
          <div className="h-[500px] w-[300px] flex-shrink-0 flex items-center justify-center">
             <a href="#contact" className="group flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full border border-dashed border-white/20 flex items-center justify-center group-hover:border-glow-violet transition-colors">
                  <Lucide.Plus className="text-white/20 group-hover:text-glow-violet" />
                </div>
                <p className="text-gray-500 uppercase text-[10px] tracking-widest">Next Masterpiece</p>
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
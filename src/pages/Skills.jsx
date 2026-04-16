import { motion } from "framer-motion";
import * as Lucide from "lucide-react";

// Helper component for the small tech tags
const TechBadge = ({ name }) => (
  <span className="px-2 py-1 text-[10px] bg-white/5 border border-white/10 rounded-md text-gray-300 font-medium">
    {name}
  </span>
);

const SkillCard = ({ title, level, icon: Icon, description, tech, className }) => {
  const IconComponent = Icon || Lucide.Code;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -5 }}
      className={`glass p-6 rounded-[2.5rem] border border-white/5 flex flex-col justify-between group hover:border-glow-violet/40 transition-all duration-500 ${className}`}
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-glow-violet/20 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all">
            <IconComponent className="text-white group-hover:text-glow-violet transition-colors" size={28} />
          </div>
          <span className="text-[9px] uppercase tracking-[0.2em] text-glow-blue font-bold opacity-70">
            {level}
          </span>
        </div>
        
        <h3 className="text-xl font-display font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed font-light mb-6">
          {description}
        </p>
      </div>

      {/* TECH STACK ICONS/TAGS AREA */}
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
        {tech.map((item) => (
          <TechBadge key={item} name={item} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 lg:px-20 bg-obsidian">
      <div className="container mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl lg:text-7xl font-display uppercase tracking-tighter text-white"
          >
            Technical <span className="text-glow-violet italic">Arsenal</span>
          </motion.h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-5"
        >
          {/* Frontend Card */}
          <SkillCard 
            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-white/5 to-glow-violet/5"
            title="Frontend Architecture"
            level="Mastery"
            icon={Lucide.LayoutDashboard} 
            description="Developing immersive, high-performance web applications with a focus on smooth motion and responsive logic."
            tech={['React', 'Next.js', 'Vite', 'Tailwind v4', 'Framer Motion', 'Three.js']}
          />

          {/* Logic/Backend Card */}
          <SkillCard 
            className="md:col-span-2"
            title="Systems & Logic"
            level="Advanced"
            icon={Lucide.Cpu}
            description="Robust server-side implementation and complex state management logic."
            tech={['JavaScript', 'Node.js', 'Python', 'Dart', 'Express']}
          />

          {/* Database Card (The New One) */}
          <SkillCard 
            title="Data & Auth"
            level="Advanced"
            icon={Lucide.Database}
            description="Architecting scalable database schemas and secure authentication."
            tech={['MongoDB', 'Firebase', 'SQL', 'Prisma']}
          />

          {/* Design/Mobile Card */}
          <SkillCard 
            title="UI & Mobile"
            level="Pro"
            icon={Lucide.Smartphone}
            description="Bridging the gap between Figma designs and native mobile performance."
            tech={['Flutter', 'Figma', 'Adobe Suite']}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
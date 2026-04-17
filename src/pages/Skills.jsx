import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faReact, faNodeJs, faJs, faPython, faDocker, faAws, faGitAlt, faEnvira, 
  faTypescript,
  faTailwindCss,
  faVsco,
  faWindows,
  faHtml5,
  faCss3
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode, faMobileScreen, faServer, faFire, faDiagramNext, faPhone, faMobile } from "@fortawesome/free-solid-svg-icons";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: faReact },
      { name: "Next.js", icon: faDiagramNext },
      { name: "Tailwind", icon: faTailwindCss }, // Substitute or use faJs
      { name: "TypeScript", icon: faTypescript },
      { name: "Python", icon: faPython }, 
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: faNodeJs },
      { name: "Express", icon: faServer },
      { name: "MongoDB", icon: faEnvira },
      { name: "PostgreSQL", icon: faDatabase },
      { name: "Firebase", icon: faFire },
    ]
  },
  {
    title: "Mobile & Tools",
    skills: [
      { name: "Flutter", icon: faMobileScreen },
      { name: "Docker", icon: faDocker },
      { name: "AWS", icon: faAws },
      { name: "Git", icon: faGitAlt },
      { name: "VS Code", icon: faVsco },
      { name: "Windows", icon: faWindows },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        
        <div className="mb-16 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center lg:justify-start gap-3 mb-4"
          >
            <div className="w-8 h-[1px] bg-purple-500" />
            <span className="text-purple-500 text-[10px] uppercase tracking-[0.5em] font-bold">
              Tech Stack
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white">
            The <span className="text-purple-500 italic font-light">Arsenal</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500"
            >
              <h3 className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold mb-10 group-hover:text-purple-500 transition-colors">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 group/item">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 group-hover/item:border-purple-500/50 group-hover/item:text-purple-500 transition-all duration-300">
                      <FontAwesomeIcon icon={skill.icon} className="text-lg" />
                    </div>
                    <span className="text-gray-400 text-sm font-light group-hover/item:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
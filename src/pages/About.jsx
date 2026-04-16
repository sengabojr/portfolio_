import { motion, useScroll, useTransform } from "framer-motion";
// 1. Import the standing wizard image
import standingWizard from "../assets/images/coding-man-standing.png";

const About = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax: The image moves slightly slower as you scroll through the section
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section id="about" className="relative min-h-screen py-20 px-6 lg:px-20 overflow-hidden bg-obsidian">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* THE STANDING WIZARD IMAGE */}
        <motion.div 
          style={{ y, opacity }} 
          className="order-2 lg:order-1 flex justify-center relative"
        >
          {/* Decorative Glow behind the man */}
          <div className="absolute inset-0 bg-glow-violet/10 blur-[100px] rounded-full scale-75" />
          
          <div className="relative w-full max-w-[350px] lg:max-w-[450px] glass rounded-3xl p-2 border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10" />
            
            {/* 2. The Actual Image */}
            <img 
              src={standingWizard} 
              alt="Mugisha Benjamin - The Architect" 
              className="w-full h-auto object-cover relative z-0 drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              onError={(e) => {
                console.error("Standing image failed. Check name: coding-man-standing.png");
                e.target.src = "https://via.placeholder.com/400x600?text=Wizard+Missing";
              }}
            />
          </div>
        </motion.div>

        {/* NARRATIVE CONTENT */}
        <motion.div 
          className="order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-7xl font-display mb-8 tracking-tighter uppercase">
            The <span className="text-glow-violet">Narrative</span>
          </h2>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
            <p>
              Born and raised in the vibrant energy of <span className="text-white font-medium">Nyamirambo, Kigali</span>, 
              my journey is a blend of technical logic and street-level creativity. 
              Currently refining my craft at <span className="text-white font-medium">Saint Laurent</span>, I see 
              software development as the modern-day wizardry.
            </p>
            <p>
              Whether it's the precision of a cross-over on the basketball court or the 
              structural integrity of a <span className="text-glow-blue font-medium">Next.js</span> architecture, 
              I play to win. I don't just ship features; I ship masterpieces.
            </p>

            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/10">
              <div>
                <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1">Base of Operations</h4>
                <p className="text-glow-blue">Kigali, Rwanda</p>
              </div>
              <div>
                <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1">Discipline</h4>
                <p className="text-glow-violet">Frontend Architecture</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
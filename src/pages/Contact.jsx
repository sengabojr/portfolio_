import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faInstagram, 
  faTwitter, 
  faFacebookF, 
  faGithub, 
  faWhatsapp, 
  faLinkedinIn 
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const socialLinks = [
    { name: "Instagram", icon: faInstagram, link: "https://instagram.com/sengabo_", color: "hover:text-pink-500" },
    { name: "X/Twitter", icon: faTwitter, link: "https://x.com/SengaboJr", color: "hover:text-blue-400" },
    { name: "Facebook", icon: faFacebookF, link: "https://facebook.com/sengabojr", color: "hover:text-blue-600" },
    { name: "GitHub", icon: faGithub, link: "https://github.com/sengabojr", color: "hover:text-white" },
    { name: "WhatsApp", icon: faWhatsapp, link: "https://wa.me/250792861849", color: "hover:text-green-500" },
    { name: "LinkedIn", icon: faLinkedinIn, link: "https://linkedin.com/in/sengabo-jr", color: "hover:text-blue-500" },
  ];

  return (
    <section 
      id="contact" 
      className="min-h-screen w-full flex items-center justify-center bg-obsidian relative overflow-hidden py-20"
    >
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow-violet/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: THE FORM SECTION */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-lg md:text-8xl font-display  tracking-tighter text-white leading-[0.85]">
                Initiate <br />
                <span className="text-glow-violet italic">Dialogue</span>
              </h2>
              <p className="mt-6 text-gray-400 max-w-md text-lg font-light leading-relaxed">
                The portal is open. Whether you have a project or a simple "hello," 
                reach out and let's manifest something extraordinary.
              </p>
            </div>

            <form className="space-y-4 max-w-lg" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-glow-violet transition-all text-sm tracking-widest"
              />
              <textarea 
                placeholder="YOUR MESSAGE" 
                rows="5"
                className="w-full bg-white/5 border border-white/10 rounded-3xl py-4 px-6 text-white outline-none focus:border-glow-violet transition-all text-sm tracking-widest resize-none"
              />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-white text-obsidian font-bold uppercase text-[10px] tracking-[0.4em] rounded-2xl hover:bg-glow-violet hover:text-white transition-all duration-500 flex items-center justify-center gap-3"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                Send Transmission
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT: THE SOCIAL GRID */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Direct Call Card */}
            <div className="glass p-10 rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent group relative overflow-hidden">
               <div className="flex items-center gap-3 text-glow-blue mb-4">
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="uppercase text-[10px] font-bold tracking-[0.4em]">Direct Line</span>
               </div>
               <a href="tel:+250792861849" className="text-3xl md:text-4xl font-display text-white tracking-tighter hover:text-glow-blue transition-colors">
                 +250 792 861 849
               </a>
            </div>

            {/* FontAwesome Social Icons Grid */}
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-6 rounded-3xl border border-white/5 bg-white/[0.03] text-gray-400 transition-all duration-300 ${item.color} hover:bg-white/[0.08] hover:border-white/20`}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-xl" />
                  <span className="uppercase text-[10px] font-bold tracking-widest">{item.name}</span>
                </a>
              ))}
            </div>

            {/* Status Indicator */}
            <div className="flex items-center justify-between px-8 py-5 glass rounded-2xl border border-white/5">
               <span className="text-[10px] uppercase text-gray-500 tracking-[0.2em]">Kigali, Rwanda</span>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                 <span className="text-[10px] uppercase text-green-500 font-bold tracking-widest">Live Now</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { 
  faInstagram, 
  faTwitter, 
  faGithub, 
  faLinkedinIn 
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="orbit" className="relative bg-[#0a0a0a] pt-32 pb-10 overflow-hidden">
      {/* 1. MASSIVE BACKGROUND NAME (WATERMARK) */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 select-none pointer-events-none w-full">
        <h2 className="text-[20vw] font-bold text-white/[0.03] uppercase tracking-tighter leading-none text-center">
          Sengabo
        </h2>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col items-center">
          
          {/* 2. GRAVITY BUTTON (Back to Top) */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -10 }}
            className="group flex flex-col items-center mb-20"
          >
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-4 group-hover:border-purple-500 transition-colors duration-500 relative">
              <FontAwesomeIcon icon={faArrowUp} className="text-white group-hover:text-purple-500 transition-colors" />
              {/* Pulsing Aura */}
              <div className="absolute inset-0 rounded-full bg-purple-500/0 group-hover:bg-purple-500/10 animate-ping" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.5em] text-gray-500 group-hover:text-white transition-colors">
              Return to Zenith
            </span>
          </motion.button>

          {/* 3. MAIN FOOTER GRID */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-end border-t border-white/5 pt-16">
            
            {/* Left: Brand Philosophy */}
            <div className="space-y-4">
              <div className="text-white font-bold tracking-[0.2em] text-xs uppercase">
                Sengabo<span className="text-purple-500">.</span>Jr
              </div>
              <p className="text-gray-500 text-xs leading-relaxed max-w-xs uppercase tracking-widest font-light">
                Crafting digital experiences where <span className="text-white">logic</span> meets <span className="text-white">wizardry</span>. 
                Based in Kigali, available worldwide.
              </p>
            </div>

            {/* Center: Quick Orbit */}
            <div className="flex justify-center gap-8">
              {[
                { icon: faInstagram, link: "https://instagram.com/sengabo_" },
                { icon: faTwitter, link: "https://x.com/SengaboJr" },
                { icon: faGithub, link: "https://github.com/sengabojr" },
                { icon: faLinkedinIn, link: "https://linkedin.com/in/sengabo-jr" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank" 
                  className="text-gray-500 hover:text-white transition-colors text-lg"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>

            {/* Right: Technical Specs */}
            <div className="text-right flex flex-col items-end gap-1">
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">
                System Status: <span className="text-green-500">Optimal</span>
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">
                © {currentYear} All Rights Reserved
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-8 h-[1px] bg-purple-500/50" />
                <span className="text-[9px] italic text-purple-500 font-light tracking-widest uppercase">
                  Designed by the Wizard
                </span>
              </div>
            </div>

          </div>

          {/* 4. FINAL BOTTOM BAR */}
          <div className="mt-24 w-full flex justify-center">
            <div className="text-[8px] text-gray-700 uppercase tracking-[0.8em]">
              Stay Curious • Stay Focused • Stay Digital
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
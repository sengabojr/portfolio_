import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GitHubSection = () => {
  const [Calendar, setCalendar] = useState(null);

  useEffect(() => {
    const loadLib = async () => {
      try {
        const mod = await import("react-github-calendar");
        const Component = mod.GitHubCalendar || mod.default || mod;
        setCalendar(() => Component);
      } catch (error) {
        console.error("Error loading GitHub Calendar:", error);
      }
    };
    loadLib();
  }, []);

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-white/90">
            Code <span className="text-purple-500 italic font-light">Activity</span>
          </h2>
        </motion.div>

        {/* Removed background and border, added a fade-out mask for mobile scroll */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-4xl overflow-x-auto flex justify-center custom-scrollbar [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:[mask-image:none]">
            {Calendar ? (
              <Calendar
                username="yegor256"
                blockSize={12}
                blockMargin={5}
                fontSize={13}
                theme={{
                   dark: ["#161b22", "#4c1d95", "#7c3aed", "#a855f7", "#d8b4fe"],
                }}
                style={{
                  cursor: 'crosshair'
                }}
              />
            ) : (
              <div className="h-[120px] flex items-center justify-center">
                <p className="text-purple-500/20 text-[10px] uppercase tracking-[0.5em] animate-pulse">
                  Syncing Pulse...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
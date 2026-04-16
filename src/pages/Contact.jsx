import { motion } from "framer-motion";
import * as Lucide from "lucide-react";

const Contact = () => {
  const socials = [
    { name: "Email", icon: Lucide.Mail, value: "sengabojr@gmail.com", href: "mailto:sengabojr@gmail.com" },
    { name: "WhatsApp", icon: Lucide.Phone, value: "+250 792 861 849", href: "https://wa.me/250792861849" },
    { name: "GitHub", icon: Lucide.Github || Lucide.GithubIcon, value: "sengabojr", href: "https://github.com/sengabojr" },
    { name: "X", icon: Lucide.Twitter || Lucide.TwitterIcon, value: "@SengaboJr", href: "https://x.com/SengaboJr" },
  ];

  return (
    <section id="contact" className="py-20 px-10 relative">
      <div className="container mx-auto max-w-4xl glass p-12 rounded-[40px] border border-white/10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-display mb-4 italic uppercase tracking-tighter text-white">
            Initiate Connection
          </h2>
          <p className="text-gray-400">Operating from Kigali. Available for global projects.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {socials.map((social) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/5"
              >
                {/* Check if icon exists before rendering to prevent 'undefined' crash */}
                {IconComponent ? (
                  <IconComponent className="text-purple-500" size={24} />
                ) : (
                  <div className="w-6 h-6 bg-white/10 rounded-full" /> 
                )}
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{social.name}</p>
                  <p className="text-lg font-medium text-white">{social.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact; // THIS LINE IS CRITICAL
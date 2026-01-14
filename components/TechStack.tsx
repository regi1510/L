import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  "React", "TypeScript", "Next.js", "Three.js", "WebGL", "Node.js", "GraphQL", "PostgreSQL",
  "TailwindCSS", "Framer Motion", "AWS", "Docker", "Python", "Solidity", "Rust"
];

const TechStack: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden relative z-10 bg-black">
      <div className="mb-12 text-center">
         <h3 className="text-stone-500 font-mono text-xs tracking-[0.3em] uppercase">Powered By</h3>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-12 items-center group-hover:[animation-play-state:paused]">
          {[...techs, ...techs, ...techs].map((tech, index) => (
            <motion.span 
                key={index} 
                whileHover={{ scale: 1.1, color: "#f59e0b" }}
                className="text-3xl md:text-5xl font-display font-bold text-white/20 transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-12 items-center ml-12 group-hover:[animation-play-state:paused]">
           {[...techs, ...techs, ...techs].map((tech, index) => (
            <motion.span 
                key={index} 
                whileHover={{ scale: 1.1, color: "#f59e0b" }}
                className="text-3xl md:text-5xl font-display font-bold text-white/20 transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
      
      {/* Gradients to fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default TechStack;
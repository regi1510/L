import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const experiences = [
    {
        year: "2023 - Present",
        role: "Senior Creative Developer",
        company: "Nova Digital",
        desc: "Leading the immersive web team, building award-winning 3D experiences for Fortune 500 clients."
    },
    {
        year: "2021 - 2023",
        role: "Frontend Engineer",
        company: "TechFlow Inc.",
        desc: "Architected the core design system and migrated the legacy platform to Next.js, improving performance by 300%."
    },
    {
        year: "2019 - 2021",
        role: "UI/UX Designer",
        company: "Pixel Studio",
        desc: "Designed and prototyped mobile applications for fintech startups, focusing on user retention and accessibility."
    }
];

const Experience: React.FC = () => {
  const ref = useRef(null);
  
  return (
    <section ref={ref} className="py-32 relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
             <h2 className="text-amber-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">Career Path</h2>
             <h3 className="text-4xl md:text-5xl font-display font-bold text-white">The <span className="text-gradient-gold">Journey</span></h3>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
            {experiences.map((exp, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="mb-16 relative pl-12"
                >
                    {/* Dot */}
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                        <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                        <span className="font-mono text-amber-500 text-sm">{exp.year}</span>
                    </div>
                    <div className="text-lg text-stone-400 mb-2">{exp.company}</div>
                    <p className="text-stone-500 leading-relaxed font-light">{exp.desc}</p>
                </motion.div>
            ))}
        </div>
    </section>
  );
};

export default Experience;
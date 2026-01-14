import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        q: "Do you work with startups?",
        a: "Absolutely. I love the energy of startups. I offer specialized packages for MVPs that focus on speed to market without sacrificing quality."
    },
    {
        q: "What is your typical timeline?",
        a: "A standard branding and web project takes 4-8 weeks. Complex WebGL experiences may take 10-12 weeks depending on asset production requirements."
    },
    {
        q: "Do you offer post-launch support?",
        a: "Yes. I believe in long-term partnerships. I offer retainer packages for updates, optimization, and scaling your platform as you grow."
    },
    {
        q: "What makes your code 'high performance'?",
        a: "I prioritize bundle size, efficient React rendering patterns, and GPU-accelerated animations. I strictly adhere to Core Web Vitals metrics."
    }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 relative z-10 max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
             <h2 className="text-amber-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">Inquiries</h2>
             <h3 className="text-4xl font-display font-bold text-white">Common <span className="text-gradient-gold">Questions</span></h3>
        </div>

        <div className="flex flex-col gap-4">
            {faqs.map((item, index) => (
                <div key={index} className="border border-white/5 bg-white/[0.02] rounded-2xl overflow-hidden backdrop-blur-sm hover:border-white/10 transition-colors">
                    <button 
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left"
                    >
                        <span className="text-lg font-bold text-stone-200">{item.q}</span>
                        <div className={`p-2 rounded-full border border-white/10 transition-colors ${openIndex === index ? 'bg-amber-500 text-black' : 'text-stone-400'}`}>
                            {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                    </button>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-stone-400 leading-relaxed">
                                    {item.a}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    </section>
  );
};

export default FAQ;
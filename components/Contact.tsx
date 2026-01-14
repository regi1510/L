import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

const Particles = () => {
    // Generate random particles
    const particles = Array.from({ length: 20 });
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-amber-500/20 rounded-full"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                        y: [null, Math.random() * -100 + "%"],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        width: Math.random() * 10 + 5 + "px",
                        height: Math.random() * 10 + 5 + "px",
                    }}
                />
            ))}
        </div>
    )
}

const Contact: React.FC = () => {
  return (
    <section className="py-32 relative z-10" id="contact">
        <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-stone-900 to-black border border-white/10 rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
                
                <Particles />
                
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                    <div>
                        <h2 className="text-amber-500 font-mono text-sm tracking-[0.3em] uppercase mb-6">Initiate Protocol</h2>
                        <h3 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
                            Let's Build <br />
                            <span className="text-gradient-gold">The Future.</span>
                        </h3>
                        <p className="text-stone-400 text-lg mb-12 max-w-md">
                            Have a project in mind? I'm currently available for freelance projects and open to long-term partnerships.
                        </p>
                        
                        <div className="flex flex-col gap-6">
                            <a href="mailto:hello@nova.dev" className="flex items-center gap-4 text-white hover:text-amber-500 transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-amber-500/50 transition-colors">
                                    <Mail size={20} />
                                </div>
                                <span className="text-xl">hello@nova.dev</span>
                            </a>
                            <div className="flex items-center gap-4 text-stone-400">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-xl">San Francisco, CA (Remote)</span>
                            </div>
                        </div>
                    </div>

                    <form className="flex flex-col gap-6 bg-white/[0.02] p-8 rounded-3xl border border-white/5 backdrop-blur-md">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-mono text-stone-500 uppercase">Name</label>
                                <input type="text" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-mono text-stone-500 uppercase">Email</label>
                                <input type="email" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-mono text-stone-500 uppercase">Message</label>
                            <textarea rows={4} className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none" placeholder="Tell me about your project..." />
                        </div>
                        
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-4 bg-amber-500 text-black font-bold py-5 rounded-xl hover:bg-amber-400 transition-all flex items-center justify-center gap-2 group"
                        >
                            Send Transmission
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;
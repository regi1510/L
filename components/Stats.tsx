import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring } from 'framer-motion';

const stats = [
  { value: 5, label: "Years Experience", suffix: "+" },
  { value: 50, label: "Projects Delivered", suffix: "+" },
  { value: 12, label: "Awards Won", suffix: "" },
  { value: 100, label: "Client Satisfaction", suffix: "%" },
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const springValue = useSpring(0, { bounce: 0, duration: 2000 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (inView) {
            springValue.set(value);
        }
    }, [inView, value, springValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return <span ref={ref}>{displayValue}{suffix}</span>;
}

const Stats: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-black/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-6xl font-display font-bold text-white mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-sm font-mono text-amber-500 uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
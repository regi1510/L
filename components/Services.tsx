import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Environment, TorusKnot, Ring } from '@react-three/drei';
import { ArrowUpRight, Palette, Globe, Smartphone, Cpu, Database, Command } from 'lucide-react';
import * as THREE from 'three';

const services = [
  {
    id: "01",
    title: "UI/UX Design",
    desc: "Forging digital interfaces that feel inevitable. We blend behavioral science with high-fidelity aesthetics.",
    icon: Palette,
    color: "#f59e0b",
    tags: ["User Research", "Design Systems", "Prototyping"]
  },
  {
    id: "02",
    title: "Web Engineering",
    desc: "Architecting the web of tomorrow. Utilizing Next.js, WebGL, and edge computing for lightning-fast apps.",
    icon: Globe,
    color: "#3b82f6",
    tags: ["React / Next.js", "WebGL / Three.js", "Performance"]
  },
  {
    id: "03",
    title: "Mobile Ecosystems",
    desc: "Native-grade experiences for every device using React Native for fluid, robust applications.",
    icon: Smartphone,
    color: "#ec4899",
    tags: ["React Native", "iOS & Android", "Expo"]
  },
  {
    id: "04",
    title: "Immersive 3D",
    desc: "Breaking the fourth wall of the browser with interactive 3D configurators and storytelling.",
    icon: Cpu,
    color: "#8b5cf6",
    tags: ["R3F", "GLSL Shaders", "Physics"]
  },
  {
    id: "05",
    title: "Backend Systems",
    desc: "Scalable, secure, and serverless. Resilient APIs and database structures that grow with you.",
    icon: Database,
    color: "#10b981",
    tags: ["Node.js", "PostgreSQL", "Cloud Architecture"]
  }
];

// --- 3D Quantum Core ---

const QuantumCore = ({ activeColor }: { activeColor: string }) => {
    const meshRef = useRef<any>(null);
    const ring1Ref = useRef<any>(null);
    const ring2Ref = useRef<any>(null);
    const materialRef = useRef<any>(null);
    
    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.2;
            meshRef.current.rotation.y = t * 0.3;
        }
        if (ring1Ref.current) {
            ring1Ref.current.rotation.x = t * 0.1;
            ring1Ref.current.rotation.z = Math.sin(t * 0.2) * 0.5;
        }
        if (ring2Ref.current) {
            ring2Ref.current.rotation.y = t * 0.15;
            ring2Ref.current.rotation.x = Math.cos(t * 0.2) * 0.5;
        }
        if(materialRef.current) {
            materialRef.current.color.lerp(new THREE.Color(activeColor), delta * 2);
        }
    });

    return (
        <Float speed={4} rotationIntensity={0.5} floatIntensity={1}>
            {/* Main Core */}
            <TorusKnot ref={meshRef} args={[0.8, 0.3, 128, 16]} position={[0,0,0]}>
                <MeshTransmissionMaterial
                    ref={materialRef}
                    backside
                    backsideThickness={5}
                    thickness={2}
                    chromaticAberration={1}
                    anisotropy={0.5}
                    distortion={0.5}
                    distortionScale={0.5}
                    temporalDistortion={0.5}
                    iridescence={1}
                    color={activeColor}
                    background={new THREE.Color("#0c0a09")}
                />
            </TorusKnot>

            {/* Data Rings */}
            <group ref={ring1Ref}>
                 <Ring args={[1.8, 1.82, 64]} renderOrder={1}>
                    <meshBasicMaterial color={activeColor} transparent opacity={0.3} side={THREE.DoubleSide} />
                 </Ring>
            </group>
            
            <group ref={ring2Ref}>
                 <Ring args={[2.2, 2.21, 64]} rotation={[Math.PI/2, 0, 0]} renderOrder={1}>
                    <meshBasicMaterial color="#ffffff" transparent opacity={0.15} side={THREE.DoubleSide} />
                 </Ring>
            </group>

             {/* Inner Light */}
             <pointLight position={[0,0,0]} intensity={10} color={activeColor} distance={5} />
        </Float>
    );
};

const ScrambleText = ({ text, isActive }: { text: string, isActive: boolean }) => {
    const [display, setDisplay] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    useEffect(() => {
        if (!isActive) { setDisplay(text); return; }
        let iteration = 0;
        let interval: any = null;
        interval = setInterval(() => {
            setDisplay(
                text.split("").map((letter, index) => {
                        if (index < iteration) { return text[index]; }
                        return chars[Math.floor(Math.random() * chars.length)];
                    }).join("")
            );
            if (iteration >= text.length) { clearInterval(interval); }
            iteration += 1 / 2;
        }, 30);
        return () => clearInterval(interval);
    }, [text, isActive]);
    return <span>{display}</span>;
};

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 relative z-10 bg-[#050505] overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[150px] transition-colors duration-1000 ease-in-out opacity-20"
            style={{ backgroundColor: services[activeIndex].color }}
          />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1 flex flex-col gap-4">
             <div className="mb-12">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-amber-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 flex items-center gap-3"
                >
                    <Command size={14} /> Our Capabilities
                </motion.h2>
                <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-display font-bold text-white leading-tight"
                >
                    Creative <span className="text-gradient-gold">Arsenal</span>
                </motion.h3>
             </div>

             <LayoutGroup>
                 {services.map((service, index) => {
                     const isActive = activeIndex === index;
                     return (
                         <motion.div
                            layout
                            key={service.id}
                            onClick={() => setActiveIndex(index)}
                            onHoverStart={() => setActiveIndex(index)}
                            className={`group relative border border-white/5 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${isActive ? 'bg-white/5 border-white/10' : 'hover:bg-white/[0.02] hover:border-white/10'}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                         >
                             {isActive && (
                                 <motion.div 
                                    layoutId="activeGlow"
                                    className="absolute inset-0 border-2 rounded-2xl pointer-events-none z-10"
                                    style={{ borderColor: service.color }}
                                    transition={{ duration: 0.3 }}
                                 />
                             )}
                             <div className="p-6 md:p-8 relative z-20">
                                 <div className="flex items-center justify-between mb-4">
                                     <div className="flex items-center gap-6">
                                         <span className={`font-mono text-sm transition-colors duration-300 ${isActive ? 'text-white' : 'text-stone-600'}`}>
                                             {service.id}
                                         </span>
                                         <h4 className={`text-xl md:text-3xl font-display font-bold uppercase transition-colors duration-300 ${isActive ? 'text-white' : 'text-stone-400'}`}>
                                            <ScrambleText text={service.title} isActive={isActive} />
                                         </h4>
                                     </div>
                                     <motion.div 
                                        animate={{ rotate: isActive ? 45 : 0, scale: isActive ? 1.2 : 1 }}
                                        className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-stone-600'}`}
                                     >
                                         <ArrowUpRight size={24} />
                                     </motion.div>
                                 </div>

                                 <AnimatePresence>
                                     {isActive && (
                                         <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                         >
                                             <div className="pt-2 pl-10 md:pl-12">
                                                 <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                                                     {service.desc}
                                                 </p>
                                                 <div className="flex flex-wrap gap-2 mb-6">
                                                     {service.tags.map((tag, i) => (
                                                         <span key={i} className="px-3 py-1 rounded-full text-xs font-mono border border-white/10 bg-white/5 text-stone-300">
                                                             {tag}
                                                         </span>
                                                     ))}
                                                 </div>
                                                 <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest" style={{ color: service.color }}>
                                                     <div className="w-8 h-[1px]" style={{ backgroundColor: service.color }} />
                                                     Explore Projects
                                                 </div>
                                             </div>
                                         </motion.div>
                                     )}
                                 </AnimatePresence>
                             </div>
                             {isActive && (
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
                             )}
                         </motion.div>
                     );
                 })}
             </LayoutGroup>
          </div>

          <motion.div 
            className="order-1 lg:order-2 h-[400px] lg:h-[600px] w-full relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 pointer-events-none lg:hidden" />
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <directionalLight position={[-10, -10, -5]} intensity={0.5} color={services[activeIndex].color} />
                  <Environment preset="city" />
                  <QuantumCore activeColor={services[activeIndex].color} />
              </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
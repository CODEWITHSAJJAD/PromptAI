'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { GlowBackground } from '@/components/ui/GlowBackground';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const ServicesHero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#FFDCD9]/30 overflow-hidden">
            <GlowBackground />
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <AnimatedSection direction="right">
                        <div className="space-y-8">
                            <h2 className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em] font-mono">Our Capability</h2>
                            <h1 className="text-5xl md:text-9xl font-black text-[#262424] leading-[0.85] tracking-tighter mb-8">
                                What We <br /> Do
                            </h1>
                            <p className="text-xl md:text-2xl font-bold text-[#262424] leading-tight max-w-xl">
                                Helping organisations plan, introduce and adopt AI in practical ways.
                            </p>
                            <div className="pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#FF3500] text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest shadow-2xl shadow-[#FF3500]/20 hover:bg-[#FF3500]/90 transition-all"
                                >
                                    View Services
                                </motion.button>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="left" delay={0.2} className="relative hidden lg:block">
                        <div className="relative w-full aspect-square flex items-center justify-center">
                            {/* Workflow Animation */}
                            <svg viewBox="0 0 400 400" className="w-[100%] h-[100%]">
                                {/* Flow Path */}
                                <motion.path
                                    d="M 50 200 Q 125 100 200 200 T 350 200"
                                    fill="none"
                                    stroke="#FF3500"
                                    strokeWidth="2"
                                    strokeOpacity="0.1"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                />

                                {/* Steps/Nodes */}
                                {[
                                    { x: 50, y: 200, label: "01" },
                                    { x: 200, y: 200, label: "02" },
                                    { x: 350, y: 200, label: "03" }
                                ].map((node, i) => (
                                    <React.Fragment key={i}>
                                        <motion.circle
                                            cx={node.x} cy={node.y} r="25"
                                            fill="#262424"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.5 + (i * 0.5), type: "spring" }}
                                        />
                                        <motion.text
                                            x={node.x} y={node.y + 5}
                                            textAnchor="middle"
                                            fill="#FFDCD9"
                                            fontSize="12"
                                            fontWeight="bold"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1 + (i * 0.5) }}
                                        >
                                            {node.label}
                                        </motion.text>
                                        {/* Pulse Effect */}
                                        <motion.circle
                                            cx={node.x} cy={node.y} r="25"
                                            stroke="#FF3500"
                                            strokeWidth="2"
                                            fill="none"
                                            animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                        />
                                    </React.Fragment>
                                ))}

                                {/* Moving Pulse along the path */}
                                <motion.circle
                                    r="4"
                                    fill="#FF3500"
                                    animate={{
                                        offsetDistance: ["0%", "100%"]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    style={{
                                        offsetPath: 'path("M 50 200 Q 125 100 200 200 T 350 200")',
                                    }}
                                />
                            </svg>
                        </div>
                    </AnimatedSection>
                </div>
            </Container>
        </section>
    );
};

export default ServicesHero;

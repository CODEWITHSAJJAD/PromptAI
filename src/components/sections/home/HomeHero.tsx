'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { GlowBackground } from '@/components/ui/GlowBackground';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const HomeHero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-[#FFDCD9]/30">
            <GlowBackground />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <AnimatedSection direction="right">
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-2 bg-[#FF3500]/10 rounded-full border border-[#FF3500]/20">
                                <span className="text-[#FF3500] text-xs font-black uppercase tracking-[0.2em]">The Vision</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#262424] leading-[0.85] tracking-tighter">
                                Helping organisations <br /> get ready for AI.
                            </h1>
                            <p className="text-xl md:text-2xl font-bold text-[#262424] leading-tight max-w-2xl">
                                AI is changing how we work. The organisations that succeed won’t just implement AI — they’ll teach their people how to use it.
                            </p>
                            <div className="pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#FF3500] text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest shadow-2xl shadow-[#FF3500]/20 hover:bg-[#FF3500]/90 transition-all"
                                >
                                    Start Your Journey
                                </motion.button>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="left" delay={0.2} className="relative hidden lg:block">
                        <div className="relative w-full aspect-square flex items-center justify-center">
                            {/* Neural Network Animation */}
                            <svg viewBox="0 0 400 400" className="w-[120%] h-[120%] opacity-40">
                                <defs>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* Connection Lines */}
                                {[
                                    [100, 100, 200, 200], [100, 100, 100, 300], [100, 100, 200, 100],
                                    [200, 200, 300, 100], [200, 200, 300, 300], [200, 200, 100, 300],
                                    [300, 300, 300, 100], [100, 300, 300, 300]
                                ].map(([x1, y1, x2, y2], i) => (
                                    <React.Fragment key={i}>
                                        <motion.line
                                            x1={x1} y1={y1} x2={x2} y2={y2}
                                            stroke="#FF3500" strokeWidth="1" strokeOpacity="0.2"
                                        />
                                        <motion.circle
                                            r="2" fill="#FF3500" filter="url(#glow)"
                                            animate={{
                                                cx: [x1, x2],
                                                cy: [y1, y2],
                                                opacity: [0, 1, 0]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: i * 0.5,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    </React.Fragment>
                                ))}

                                {/* Nodes */}
                                {[
                                    { x: 100, y: 100 }, { x: 200, y: 200 }, { x: 300, y: 300 },
                                    { x: 100, y: 300 }, { x: 300, y: 100 }, { x: 200, y: 100 }
                                ].map((node, i) => (
                                    <motion.circle
                                        key={i}
                                        cx={node.x} cy={node.y} r="4"
                                        fill="#FF3500"
                                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.7 }}
                                        filter="url(#glow)"
                                    />
                                ))}
                            </svg>
                        </div>
                    </AnimatedSection>
                </div>
            </Container>
        </section>
    );
};

export default HomeHero;

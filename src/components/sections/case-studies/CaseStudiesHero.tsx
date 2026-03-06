'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { GlowBackground } from '@/components/ui/GlowBackground';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const CaseStudiesHero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
            <GlowBackground />
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <AnimatedSection direction="right">
                        <div className="space-y-8">
                            <h2 className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em] font-mono">Case Studies</h2>
                            <h1 className="text-5xl md:text-9xl font-black text-[#262424] leading-[0.85] tracking-tighter mb-8">
                                Success <br /> Stories
                            </h1>
                            <p className="text-xl md:text-2xl font-bold text-[#262424] leading-tight max-w-xl">
                                Examples of AI adoption in practice.
                            </p>
                            <div className="pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#FF3500] text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest shadow-2xl shadow-[#FF3500]/20 hover:bg-[#FF3500]/90 transition-all"
                                >
                                    Read Our Success
                                </motion.button>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="left" delay={0.2} className="relative hidden lg:block">
                        <div className="relative w-full aspect-square flex items-center justify-center">
                            {/* Animated Charts */}
                            <div className="w-80 h-64 bg-[#262424] rounded-[2rem] p-8 relative overflow-hidden flex items-end gap-3 justify-center shadow-2xl">
                                {[40, 70, 50, 90, 60, 85].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                                        className="w-8 bg-[#FF3500] rounded-t-lg relative group"
                                    >
                                        <div className="absolute top-[-25px] left-1/2 -translate-x-1/2 text-[10px] font-black text-[#FF3500] opacity-0 group-hover:opacity-100 transition-opacity">+{h}%</div>
                                    </motion.div>
                                ))}
                                {/* Line Graph Overlay */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                                    <motion.path
                                        d="M 40 200 L 100 150 L 160 180 L 220 100 L 280 130 L 340 50"
                                        fill="none"
                                        stroke="#FFDCD9"
                                        strokeWidth="3"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    />
                                </svg>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </Container>
        </section>
    );
};

export default CaseStudiesHero;

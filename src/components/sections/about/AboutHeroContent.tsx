'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { GlowBackground } from '@/components/ui/GlowBackground';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const AboutHero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 bg-white overflow-hidden">
            <GlowBackground />
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <AnimatedSection direction="right">
                        <div className="space-y-8">
                            <h2 className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em] font-mono">About Us</h2>
                            <h1 className="text-5xl md:text-9xl font-black text-[#262424] leading-[0.85] tracking-tighter mb-8">
                                Helping people <br /> work with AI.
                            </h1>
                            <p className="text-xl md:text-2xl font-bold text-[#262424] leading-tight max-w-xl">
                                We are a team of change managers and strategic leads who believe that AI is a tool for people.
                            </p>
                            <div className="pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#FF3500] text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest shadow-2xl shadow-[#FF3500]/20 hover:bg-[#FF3500]/90 transition-all"
                                >
                                    Our Mission
                                </motion.button>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="left" delay={0.2} className="relative hidden lg:block">
                        <div className="relative w-full aspect-square flex items-center justify-center">
                            {/* Team Connection Animation */}
                            <svg viewBox="0 0 400 400" className="w-full h-full opacity-60">
                                {/* Connection Lines */}
                                <motion.path
                                    d="M 100 200 C 150 100, 250 100, 300 200 S 150 300, 100 200"
                                    fill="none"
                                    stroke="#FF3500"
                                    strokeWidth="1"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                                {/* Nodes (People) */}
                                {[
                                    { x: 100, y: 200 }, { x: 300, y: 200 },
                                    { x: 200, y: 120 }, { x: 200, y: 280 }
                                ].map((node, i) => (
                                    <React.Fragment key={i}>
                                        <motion.circle
                                            cx={node.x} cy={node.y} r="15"
                                            fill="#262424"
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                                        />
                                        <motion.circle
                                            cx={node.x} cy={node.y} r="20"
                                            stroke="#FF3500"
                                            strokeWidth="1"
                                            fill="none"
                                            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                        />
                                    </React.Fragment>
                                ))}
                            </svg>
                        </div>
                    </AnimatedSection>
                </div>
            </Container>
        </section>
    );
};

const AboutPromise = () => {
    return (
        <section className="py-24 md:py-48 bg-[#FFDCD9]/20 overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32 items-center">
                    <AnimatedSection direction="right">
                        <GlassCard className="aspect-[4/5] md:aspect-[3/4] p-16 flex flex-col justify-center text-center bg-white/60 border-white relative overflow-hidden group">
                            <div className="absolute inset-x-0 top-0 h-2 bg-[#FF3500] scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                            <div className="space-y-8 relative z-10">
                                <div className="text-8xl md:text-9xl font-black text-[#FF3500] leading-none tracking-tighter">100%</div>
                                <div className="text-xl font-black uppercase tracking-[0.3em] text-[#262424]">Impact Focus</div>
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#FF3500]/5 rounded-full blur-3xl" />
                        </GlassCard>
                    </AnimatedSection>

                    <div className="space-y-16">
                        <AnimatedSection direction="left" delay={0.2}>
                            <h2 className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em] mb-8">Our Promise</h2>
                            <p className="text-3xl md:text-6xl font-black text-[#262424] leading-[1.1] tracking-tighter">
                                For every long-term client engagement we hire young people from disadvantaged backgrounds.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection direction="left" delay={0.4}>
                            <div className="space-y-8 border-l-4 border-[#FF3500]/30 pl-12 py-4">
                                <h3 className="text-xs font-black uppercase tracking-widest text-[#262424]/40">Why the Promise</h3>
                                <p className="text-lg md:text-2xl text-[#262424]/70 font-bold leading-relaxed tracking-tight">
                                    We believe everyone deserves access to opportunities in technology and digital careers, regardless of their starting point.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export { AboutHero, AboutPromise };

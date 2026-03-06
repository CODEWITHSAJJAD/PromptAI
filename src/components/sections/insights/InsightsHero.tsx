'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { GlowBackground } from '@/components/ui/GlowBackground';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const InsightsHero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#FFDCD9]/30 overflow-hidden">
            <GlowBackground />
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <AnimatedSection direction="right">
                        <div className="space-y-8">
                            <h2 className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em] font-mono">Latest Insights</h2>
                            <h1 className="text-5xl md:text-9xl font-black text-[#262424] leading-[0.85] tracking-tighter mb-8">
                                AI <br /> Insights
                            </h1>
                            <p className="text-xl md:text-2xl font-bold text-[#262424] leading-tight max-w-xl">
                                Understanding the evolving world of AI.
                            </p>
                            <div className="pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#FF3500] text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest shadow-2xl shadow-[#FF3500]/20 hover:bg-[#FF3500]/90 transition-all"
                                >
                                    Read Insights
                                </motion.button>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="left" delay={0.2} className="relative hidden lg:block">
                        <div className="relative w-full aspect-square flex items-center justify-center">
                            {/* Floating Article Cards */}
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 100, rotate: 10 * i }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        rotate: -5 * i,
                                        y: i === 1 ? [-20, 20, -20] : [20, -20, 20]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.2
                                    }}
                                    className={`absolute w-48 h-64 bg-white rounded-3xl shadow-xl border border-black/5 p-6 space-y-4`}
                                    style={{
                                        zIndex: 10 - i,
                                        left: `${20 + (i * 15)}%`,
                                        top: `${20 + (i * 10)}%`
                                    }}
                                >
                                    <div className="w-full h-2 bg-[#FF3500]/20 rounded-full" />
                                    <div className="w-2/3 h-2 bg-[#FFDCD9] rounded-full" />
                                    <div className="pt-8 space-y-2">
                                        <div className="w-full h-1 bg-black/5" />
                                        <div className="w-full h-1 bg-black/5" />
                                        <div className="w-4/5 h-1 bg-black/5" />
                                    </div>
                                    <div className="absolute bottom-6 right-6">
                                        <div className="w-6 h-6 rounded-full bg-[#FF3500]" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </Container>
        </section>
    );
};

export default InsightsHero;

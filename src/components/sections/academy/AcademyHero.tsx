'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { GlowBackground } from '@/components/ui/GlowBackground';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const AcademyHero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#FFDCD9]/30 overflow-hidden">
            <GlowBackground />
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <AnimatedSection direction="right">
                        <div className="space-y-8">
                            <h2 className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em] mb-4">PromptAI Academy</h2>
                            <h1 className="text-5xl md:text-9xl font-black text-[#262424] leading-[0.85] tracking-tighter mb-8">
                                Practical <br /> AI Skills
                            </h1>
                            <p className="text-xl md:text-2xl font-bold text-[#262424] leading-tight max-w-xl">
                                A place to build real AI skills.
                            </p>
                            <div className="pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#FF3500] text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest shadow-2xl shadow-[#FF3500]/20 hover:bg-[#FF3500]/90 transition-all"
                                >
                                    Explore Academy
                                </motion.button>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="left" delay={0.2} className="relative hidden lg:block">
                        <div className="relative w-full aspect-square flex items-center justify-center">
                            {/* Learning Board Animation */}
                            <div className="relative w-64 h-64 bg-[#262424] rounded-[2rem] shadow-2xl border-4 border-[#FF3500]/20 p-8 flex flex-col justify-between">
                                <div className="space-y-2">
                                    <motion.div
                                        animate={{ width: ["0%", "80%", "0%"] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="h-1 bg-[#FF3500]"
                                    />
                                    <motion.div
                                        animate={{ width: ["0%", "60%", "0%"] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
                                        className="h-1 bg-[#FFDCD9]/30"
                                    />
                                    <motion.div
                                        animate={{ width: ["0%", "70%", "0%"] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                                        className="h-1 bg-[#FFDCD9]/30"
                                    />
                                </div>
                                <div className="flex justify-end pt-12">
                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 5, repeat: Infinity }}
                                        className="text-[#FF3500] text-6xl font-black"
                                    >AI</motion.div>
                                </div>
                            </div>

                            {/* Floating Icons */}
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        y: [0, -30, 0],
                                        rotate: [0, 45, -45, 0],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 4 + i,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.5
                                    }}
                                    className="absolute w-12 h-12 bg-[#FF3500]/10 backdrop-blur-xl border border-[#FF3500]/20 rounded-xl flex items-center justify-center text-[#FF3500] font-black"
                                    style={{
                                        top: `${20 + (i * 20)}%`,
                                        left: `${10 + (i * 25)}%`
                                    }}
                                >
                                    {["?", "!", "@", "#"][i]}
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </Container>
        </section>
    );
};

export default AcademyHero;

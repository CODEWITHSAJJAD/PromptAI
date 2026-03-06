'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const AdoptionDeepDive = () => {
    return (
        <section className="py-24 md:py-64 bg-white space-y-32 md:space-y-64 overflow-hidden">
            <Container>
                {/* AI Adoption */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
                    <AnimatedSection direction="right">
                        <GlassCard className="bg-[#262424] text-[#FFDCD9] p-12 md:p-24 shadow-3xl border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF3500]/10 rounded-full blur-[100px] -z-10 group-hover:scale-110 transition-transform duration-1000" />
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">Our Journey</h2>
                            <p className="text-xl md:text-2xl font-bold leading-relaxed mb-8">
                                Introducing AI into an organisation requires more than just tools. It requires strategy, change management and training.
                            </p>
                            <div className="w-24 h-1.5 bg-[#FF3500]" />
                        </GlassCard>
                    </AnimatedSection>
                    <AnimatedSection direction="left" delay={0.2}>
                        <div className="space-y-12">
                            <h3 className="text-4xl md:text-7xl font-black text-[#262424] leading-[0.9] tracking-tighter">AI Transformation</h3>
                            <p className="text-xl text-[#262424]/70 font-medium leading-relaxed max-w-xl">
                                PromptAI supports organisations across the full AI adoption journey — from early exploration through to workforce training and long-term adoption. Our services include strategy development, adoption planning and hands-on training designed to help teams build real capability.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-8">
                                {["Habit Stacking", "Digital Dexterity", "Frictionless UI", "Psychological Safety"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-[#FF3500]" />
                                        <span className="text-xs font-black uppercase tracking-widest text-[#262424]/60">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* AI Training & Workshops */}
                <div className="mt-32 md:mt-64 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
                    <AnimatedSection direction="right" delay={0.4} className="lg:order-2">
                        <div className="space-y-12">
                            <h3 className="text-4xl md:text-7xl font-black text-[#FF3500] leading-[0.9] tracking-tighter uppercase">End User Training</h3>
                            <p className="text-xl md:text-2xl font-bold text-[#262424] leading-tight max-w-xl">
                                Helping teams learn how to use AI in their daily work.
                            </p>
                            <p className="text-lg text-[#262424]/70 font-medium leading-relaxed">
                                Our training sessions focus on helping people understand what AI can do and how to use it responsibly. Through practical exercises, participants learn how to use AI tools for research, writing, and analysis.
                            </p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection direction="left" delay={0.2} className="lg:order-1">
                        <GlassCard className="p-12 md:p-24 bg-[#FFDCD9]/30 border-black/5 shadow-none aspect-square flex items-center justify-center text-center overflow-hidden">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="space-y-8"
                            >
                                <h2 className="text-5xl md:text-7xl font-black text-[#262424] tracking-tighter mb-8 uppercase">Workshops</h2>
                                <div className="text-xs font-black uppercase tracking-[0.3em] text-[#FF3500]">Hands-on Execution</div>
                            </motion.div>
                        </GlassCard>
                    </AnimatedSection>
                </div>
            </Container>
        </section>
    );
};

export default AdoptionDeepDive;

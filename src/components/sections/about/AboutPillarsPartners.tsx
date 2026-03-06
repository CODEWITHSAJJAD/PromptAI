'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const AboutPillars = () => {
    return (
        <section className="py-24 md:py-48 bg-white overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 md:gap-48">
                    <div className="space-y-24">
                        <AnimatedSection direction="right">
                            <div className="space-y-12">
                                <h2 className="text-[#262424]/40 text-xs font-black uppercase tracking-[0.3em]">The Difference</h2>
                                <ul className="space-y-10">
                                    {["Extension of CSR", "Behavioural science approach", "Experienced change managers"].map((diff, i) => (
                                        <li key={i} className="flex items-center gap-8 group">
                                            <div className="w-12 h-12 rounded-2xl bg-[#FFDCD9] flex items-center justify-center group-hover:bg-[#FF3500] group-hover:text-white transition-colors duration-500">
                                                <div className="w-4 h-4 rounded-full border-4 border-current" />
                                            </div>
                                            <span className="text-2xl md:text-4xl font-black text-[#262424] tracking-tighter uppercase leading-none">{diff}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="right" delay={0.2}>
                            <div className="space-y-12 border-t border-black/5 pt-24">
                                <h2 className="text-[#262424]/40 text-xs font-black uppercase tracking-[0.3em]">Our Philosophy</h2>
                                <p className="text-4xl md:text-7xl font-black text-[#262424] tracking-tighter leading-[0.9]">
                                    Grounding AI in <span className="text-[#FF3500]">Humanity</span>.
                                </p>
                                <p className="text-lg text-[#262424]/70 font-medium leading-relaxed mt-12 max-w-xl">
                                    PromptAI was started with a simple belief: the organisations that succeed with AI will be the ones that prioritise people. We focus on the human side of AI adoption, grounded in behavioural science and change management principles.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection direction="left" delay={0.4}>
                        <GlassCard className="bg-[#262424] text-white p-12 md:p-24 relative h-full flex flex-col justify-center overflow-hidden border-white/5 shadow-3xl group">
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#FF3500]/10 to-transparent pointer-events-none" />
                            <div className="relative z-10 space-y-12">
                                <h2 className="text-[#FF3500] text-xs font-black uppercase tracking-[0.3em] font-mono">Our Why</h2>
                                <p className="text-4xl md:text-6xl font-black leading-[1] tracking-tighter">
                                    AI can help create workplaces that are both productive and fulfilling.
                                </p>
                                <div className="pt-8">
                                    <div className="w-16 h-1 bg-[#FF3500] group-hover:w-full transition-all duration-1000" />
                                </div>
                            </div>
                        </GlassCard>
                    </AnimatedSection>
                </div>
            </Container>
        </section>
    );
};

export const AboutPartners = () => {
    return (
        <section className="py-24 bg-[#FFDCD9]/10 overflow-hidden">
            <Container>
                <AnimatedSection>
                    <GlassCard className="flex flex-col md:flex-row items-center justify-between gap-16 p-12 md:p-24 bg-white/60 border-white group">
                        <div className="space-y-8 text-center md:text-left max-w-xl">
                            <div className="inline-block px-4 py-2 bg-[#FF3500]/10 rounded-full border border-[#FF3500]/20">
                                <span className="text-[#FF3500] text-[10px] font-black uppercase tracking-widest">Global Partnership</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-[#262424] tracking-tighter leading-[0.9] uppercase">Microsoft AI Cloud Partner</h2>
                            <p className="text-lg md:text-xl text-[#262424]/70 font-bold tracking-tight">PromptAI is a member of the Microsoft AI Cloud Partner Programme, driving enterprise-ready AI solutions.</p>
                        </div>
                        <div className="shrink-0 flex items-center justify-center w-48 h-48 border-[12px] border-[#FF3500] rounded-full rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-700 shadow-2xl relative">
                            <div className="absolute inset-0 bg-[#FF3500]/10 rounded-full animate-ping opacity-20" />
                            <span className="font-black text-[#FF3500] text-6xl tracking-tighter">MS</span>
                        </div>
                    </GlassCard>
                </AnimatedSection>
            </Container>
        </section>
    );
};

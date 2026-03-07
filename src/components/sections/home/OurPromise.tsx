'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const OurPromise = () => {
    return (
        <section className="py-24 md:py-48 bg-white overflow-hidden">
            <Container>
                <div className="max-w-5xl mx-auto space-y-24 md:space-y-32">
                    <AnimatedSection>
                        <div className="text-center space-y-8">
                            <h2 className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em] font-mono">The Promise</h2>
                            <p className="text-4xl md:text-7xl font-black text-[#262424] leading-[1.1] tracking-tighter">
                                Working with PromptAI means businesses can support disadvantaged young people in London.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <GlassCard className="p-12 md:p-24 relative group overflow-hidden border-black/5 bg-[#FFDCD9]/10">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="text-[12rem] font-black leading-none tracking-tighter">AI</span>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className="space-y-8 relative z-10">
                                    <p className="text-2xl md:text-3xl font-black text-[#262424] leading-tight tracking-tight">
                                        For every contract longer than 12 months, we hire one young person from an underprivileged background.
                                    </p>
                                    <p className="text-lg text-[#262424]/70 font-medium leading-relaxed">
                                        We train them in AI, marketing and business skills, ensuring your business impact extends beyond technology.
                                    </p>
                                </div>
                                <div className="relative group/video">
                                    <div className="aspect-video bg-[#262424] rounded-[2rem] overflow-hidden shadow-2xl flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700 relative">
                                        <iframe
                                            className="absolute inset-0 w-full h-full"
                                            src="https://www.youtube.com/embed/3m3OV0urOkg?si=0ma_9_7CQjfNbQXp"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    {/* Decorative element */}
                                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#FF3500]/10 rounded-full blur-3xl" />
                                </div>
                            </div>
                        </GlassCard>
                    </AnimatedSection>
                </div>
            </Container>
        </section>
    );
};

export default OurPromise;

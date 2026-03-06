'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const Pillars = () => {
    return (
        <section className="py-24 md:py-48 bg-white overflow-hidden">
            <Container>
                <div className="space-y-32 md:space-y-64">
                    {/* Mission Section */}
                    <AnimatedSection className="text-center max-w-5xl mx-auto space-y-12">
                        <h2 className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em]">Our Mission</h2>
                        <blockquote className="text-4xl md:text-7xl font-black text-[#262424] leading-tight tracking-tighter">
                            &quot;We&apos;re on a mission to empower people to <span className="relative inline-block">be on the right side of AI
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="absolute bottom-2 left-0 h-3 bg-[#FF3500]/20 -z-10"
                                />
                            </span> one prompt at a time.&quot;
                        </blockquote>
                    </AnimatedSection>

                    {/* Approach & Why */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32">
                        <AnimatedSection direction="right">
                            <div className="space-y-8">
                                <h3 className="text-xs font-black uppercase tracking-widest text-[#FF3500]">Our Approach</h3>
                                <p className="text-3xl md:text-5xl font-black text-[#262424] tracking-tighter leading-none">
                                    Long-term relationships built on human trust.
                                </p>
                                <p className="text-lg text-[#262424]/70 font-medium leading-relaxed max-w-md">
                                    PromptAI builds deep partnerships to support organisations throughout their AI adoption journey.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="left" delay={0.2}>
                            <div className="bg-[#FFDCD9]/20 p-12 md:p-20 rounded-[4rem] border border-[#FF3500]/5 space-y-8">
                                <h3 className="text-xs font-black uppercase tracking-widest text-[#FF3500]">Our Why</h3>
                                <p className="text-2xl md:text-4xl font-black text-[#262424] tracking-tighter leading-none">
                                    Productive and fulfilling workplaces.
                                </p>
                                <p className="text-lg text-[#262424]/70 font-medium leading-relaxed">
                                    AI can help create environments where people focus on what matters most.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Pillars;

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useContent } from '@/hooks/useContent';

const WorkshopBenefits = () => {
    const { getContent } = useContent();
    const benefitsData = getContent('academy')?.benefits as any;

    const tagline = benefitsData?.tagline || "Learning Environment";
    const title = benefitsData?.title || "PromptAI Academy is a learning environment designed to help individuals and teams develop practical AI capability.";
    const items = benefitsData?.items?.length ? benefitsData.items : [
        { title: "Understanding AI", description: "Deep dive into AI potential." },
        { title: "Responsible Use", description: "Governance and security basics." },
        { title: "Creativity with AI", description: "New ways of thinking and making." },
        { title: "High Satisfaction", description: "Improved workplace wellbeing." }
    ];
    const programmesTitle = benefitsData?.programmesTitle || "Programmes";
    const programmesSubtitle = benefitsData?.programmesSubtitle || "The academy provides access to structured learning programmes, live workshops and hands-on training sessions led by experienced practitioners.";
    const programmesDesc1 = benefitsData?.programmesDesc1 || "Participants will be able to book courses, attend workshops and access guidance from AI mentors who help translate theory into real-world use.";
    const programmesDesc2 = benefitsData?.programmesDesc2 || "The goal is to create a place where people can continuously build their skills as AI evolves.";

    return (
        <section className="py-24 md:py-48 bg-white overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    {/* Benefits Section */}
                    <div className="space-y-16">
                        <AnimatedSection direction="right">
                            <h2 className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em] mb-8">{tagline}</h2>
                            <p className="text-3xl md:text-5xl font-black text-[#262424] leading-tight tracking-tighter">
                                {title}
                            </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            {items.map((item: any, i: number) => (
                                <AnimatedSection key={i} delay={i * 0.1}>
                                    <div className="space-y-4 group">
                                        <div className="w-12 h-1 bg-[#FF3500]/20 group-hover:w-full transition-all duration-500" />
                                        <h4 className="text-xl font-black uppercase tracking-tighter">{item.title}</h4>
                                        <p className="text-[#262424]/60 font-medium">{item.description}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>

                    {/* Outcomes Section */}
                    <AnimatedSection direction="left" delay={0.2}>
                        <GlassCard className="bg-[#262424] text-white p-12 md:p-20 border-white/10 shadow-3xl">
                            <div className="relative z-10 space-y-12">
                                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">{programmesTitle}</h2>
                                <p className="text-xl font-bold leading-relaxed mb-8">
                                    {programmesSubtitle}
                                </p>
                                <p className="text-lg text-white/70 font-medium pb-8 border-b border-white/10">
                                    {programmesDesc1}
                                </p>
                                <p className="text-lg text-white/50 font-medium">
                                    {programmesDesc2}
                                </p>
                            </div>
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                        </GlassCard>
                    </AnimatedSection>
                </div>
            </Container>
        </section>
    );
};

export default WorkshopBenefits;

'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const studies = [
    {
        client: "WPP",
        challenge: "Scaling AI tools across a fragmented global creative network.",
        solution: "Bespoke AI adoption framework focused on creative workflows and tool governance.",
        results: "30% increase in productivity for creative operations teams."
    },
    {
        client: "Refinitiv",
        challenge: "Integrating generative AI into data-heavy analytical environments.",
        solution: "PROSCI-led change management strategy to shift analyst mindsets.",
        results: "Successful rollout to over 5,000 analysts with 85% adoption rate."
    },
    {
        client: "StellarUp",
        challenge: "Developing a roadmap for AI-driven mentorship matching.",
        solution: "Behavioural science audit to optimize AI-human interactions in the platform.",
        results: "Improved matching accuracy and user engagement by 40%."
    }
];

const CaseStudiesGrid = () => {
    return (
        <section className="py-24 md:py-48 bg-[#FFDCD9]/20 overflow-hidden">
            <Container>
                <div className="space-y-16 max-w-4xl mb-24">
                    <AnimatedSection direction="right">
                        <p className="text-2xl md:text-4xl font-black text-[#262424] leading-tight">
                            Every organisation approaches AI differently. In this section we share examples of our work with organisations exploring AI adoption.
                        </p>
                        <p className="text-lg text-[#262424]/70 font-medium leading-relaxed mt-8">
                            These case studies highlight the challenges organisations face, the approaches used to introduce AI and the lessons learned along the way. They demonstrate how organisations move from experimentation to practical use across teams.
                        </p>
                    </AnimatedSection>
                </div>
                <div className="space-y-12">
                    {studies.map((study, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <GlassCard className="p-12 md:p-24 border-black/5 bg-white/80 group">
                                <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
                                    <span className="text-[15rem] font-black tracking-tighter leading-none">{study.client[0]}</span>
                                </div>

                                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                                    <div className="space-y-12">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-1 bg-[#FF3500]" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-[#FF3500]">Client: {study.client}</span>
                                        </div>
                                        <h3 className="text-4xl md:text-7xl font-black text-[#262424] tracking-tighter leading-[0.9]">
                                            Empowering {study.client} with modern AI.
                                        </h3>
                                    </div>
                                    <div className="space-y-12 pt-8">
                                        <div className="space-y-4">
                                            <h4 className="text-xs font-black uppercase tracking-widest text-[#262424]/40">The Challenge</h4>
                                            <p className="text-xl font-bold text-[#262424] leading-tight">{study.challenge}</p>
                                        </div>
                                        <div className="space-y-4 border-t border-black/5 pt-12">
                                            <h4 className="text-xs font-black uppercase tracking-widest text-[#262424]/40">The Solution</h4>
                                            <p className="text-lg text-[#262424]/70 font-medium leading-relaxed">{study.solution}</p>
                                        </div>
                                        <div className="space-y-4 bg-[#262424] text-[#FFDCD9] p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-8">
                                                <div className="w-10 h-10 border-2 border-[#FF3500] rounded-full flex items-center justify-center animate-pulse">
                                                    <div className="w-2 h-2 bg-[#FF3500] rounded-full" />
                                                </div>
                                            </div>
                                            <h4 className="text-xs font-black uppercase tracking-widest opacity-40">Key Result</h4>
                                            <p className="text-2xl md:text-3xl font-black tracking-tight leading-none">{study.results}</p>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </AnimatedSection>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default CaseStudiesGrid;

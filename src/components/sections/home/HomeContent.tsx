'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';
import { useContent } from '@/hooks/useContent';

const HomeContent = () => {
    const { getContent } = useContent();
    const adoptingAI = getContent('home')?.adoptingAI as { title?: string; subtitle?: string; description?: string } | null;
    const buildingCapability = getContent('home')?.buildingCapability as { title?: string; subtitle?: string; description?: string; features?: { title: string; desc: string }[] } | null;

    const adoptingTitle = adoptingAI?.title || "Adopting AI tools";
    const adoptingSubtitle = adoptingAI?.subtitle || "PromptAI helps organisations introduce AI in a way that people can actually adopt.";
    const adoptingDesc = adoptingAI?.description || "We work with leadership teams to understand their goals, design practical strategies for introducing AI into the workplace, and deliver training that helps teams build real confidence using AI tools.";

    const buildingTitle = buildingCapability?.title || "Building Capability";
    const buildingSubtitle = buildingCapability?.subtitle || "Our focus is not just technology. It’s helping people learn how to work effectively with AI.";
    const buildingDesc = buildingCapability?.description || "Through workshops, scenario-based learning and structured adoption programmes, we help organisations move from AI curiosity to real capability.";
    const features = buildingCapability?.features?.length ? buildingCapability.features : [
        { title: "Governance", desc: "Safe AI usage." },
        { title: "Security", desc: "Protecting data." },
        { title: "Impact", desc: "Measurable ROI." },
        { title: "Culture", desc: "Human-centric." }
    ];

    return (
        <section className="py-24 md:py-48 bg-white space-y-32 md:space-y-64 overflow-hidden">
            <Container>
                {/* AI for Business Segment */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
                    <AnimatedSection direction="right">
                        <div className="space-y-12">
                            <h2 
                                className="text-4xl md:text-7xl font-black text-[#262424] leading-[0.9] tracking-[-0.05em] whitespace-pre-line"
                                dangerouslySetInnerHTML={{
                                    __html: adoptingTitle
                                        .replace('AI tools', '<span class="text-[#FF3500]">AI tools</span>')
                                        .replace(/\n/g, '<br/>')
                                }}
                            />
                            <p className="text-xl md:text-2xl font-bold text-[#262424] leading-tight">
                                {adoptingSubtitle}
                            </p>
                            <p className="text-lg text-[#262424]/70 font-medium leading-relaxed max-w-xl">
                                {adoptingDesc}
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="left" delay={0.2}>
                        <GlassCard className="aspect-square relative flex items-center justify-center p-12 border-black/5 bg-[#FFDCD9]/20 shadow-none">
                            <div className="absolute inset-20 border-2 border-[#FF3500]/10 rounded-full animate-pulse" />
                            <div className="absolute inset-10 border border-[#FF3500]/5 rounded-[3rem] rotate-12" />
                            <div className="text-[10rem] font-black text-[#FF3500]/10">AI</div>
                        </GlassCard>
                    </AnimatedSection>
                </div>

                {/* AI Adoption Segment */}
                <div className="mt-32 md:mt-64 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
                    <AnimatedSection direction="right" delay={0.2} className="lg:order-2">
                        <div className="space-y-12">
                            <h2 
                                className="text-4xl md:text-7xl font-black text-[#262424] leading-[0.9] tracking-tighter whitespace-pre-line"
                                dangerouslySetInnerHTML={{
                                    __html: buildingTitle
                                        .replace('Capability', '<span class="text-[#FF3500]">Capability</span>')
                                        .replace(/\n/g, '<br/>')
                                }}
                            />
                            <p className="text-xl md:text-2xl font-bold text-[#262424] leading-tight">
                                {buildingSubtitle}
                            </p>
                            <p className="text-lg text-[#262424]/70 font-medium leading-relaxed max-w-xl">
                                {buildingDesc}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {features.map((item, i) => (
                                    <div key={i} className="space-y-2 border-l-2 border-[#FF3500] pl-4">
                                        <h4 className="text-xs font-black uppercase tracking-widest">{item.title}</h4>
                                        <p className="text-xs text-[#262424]/60 font-bold">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="left" className="lg:order-1">
                        <div className="relative p-12 bg-[#262424] rounded-[4rem] text-[#FFDCD9] aspect-[4/3] flex flex-col justify-center gap-8 shadow-2xl relative overflow-hidden group">
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FF3500] rounded-full blur-[100px] opacity-20 -z-10 group-hover:opacity-30 transition-opacity" />
                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none max-w-xs">Driving Adoption at Scale</h3>
                            <div className="w-20 h-2 bg-[#FF3500]" />
                        </div>
                    </AnimatedSection>
                </div>
            </Container>
        </section>
    );
};

export default HomeContent;

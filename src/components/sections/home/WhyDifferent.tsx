'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useContent } from '@/hooks/useContent';

const defaultDiffData = [
    { title: "Extension of your CSR", desc: "We work with charities to help young people from disadvantaged backgrounds gain skills and work opportunities.", icon: "CSR" },
    { title: "New Approach to Adoption", desc: "We combine PROSCI change management with behavioural economics to drive AI adoption in organisations.", icon: "ADPT" },
    { title: "Experienced Team", desc: "Our team has delivered transformation projects for major brands including WPP, Howdens, Admiral, Refinitiv and Jaguar Land Rover.", icon: "TEAM" }
];

const WhyDifferent = () => {
    const { getContent } = useContent();
    const whyDifferent = getContent('home')?.whyDifferent as { title?: string; items?: Array<{ title: string; description: string }> } | null;
    
    const sectionTitle = whyDifferent?.title || "Why We're Different";
    const items = whyDifferent?.items?.map((item, i) => ({
        title: item.title,
        desc: item.description,
        icon: defaultDiffData[i]?.icon || `ITEM${i + 1}`
    })) || defaultDiffData;

    return (
        <section className="py-24 md:py-48 bg-[#FFDCD9]/20 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#262424 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <Container>
                <div className="space-y-24">
                    <AnimatedSection className="max-w-3xl">
                        <h2 className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em] mb-8">{sectionTitle}</h2>
                        <p className="text-4xl md:text-6xl font-black text-[#262424] leading-[1.1] tracking-tighter">
                            Bridging the gap between strategy and human adoption.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {items.map((item: { title: string; desc: string; icon: string }, i: number) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <GlassCard className="h-full group p-10 md:p-14 border-black/5 bg-white/60">
                                    <div className="flex flex-col h-full gap-12">
                                        <div className="flex items-center justify-between">
                                            <div className="w-16 h-16 rounded-2xl bg-[#FF3500] flex items-center justify-center text-white font-black text-xs tracking-widest shadow-xl shadow-[#FF3500]/20">
                                                {item.icon}
                                            </div>
                                            <div className="text-[4rem] font-black opacity-5 group-hover:opacity-10 transition-opacity">0{i + 1}</div>
                                        </div>
                                        <div className="space-y-6 flex-grow">
                                            <h3 className="text-2xl font-black text-[#262424] uppercase tracking-tighter leading-none">{item.title}</h3>
                                            <p className="text-[#262424]/70 font-medium leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                        <div className="pt-4 border-t border-black/5">
                                            <div className="flex items-center gap-2 text-[#FF3500] font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                                                Learn More
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default WhyDifferent;

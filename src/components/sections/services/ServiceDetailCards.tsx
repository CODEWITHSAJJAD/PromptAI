'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useContent } from '@/hooks/useContent';

const defaultServices = [
    { title: "AI Strategy & Planning", description: "Before introducing AI tools, organisations need clarity on where AI can genuinely create value. We work with leadership teams to explore opportunities, identify risks and define a practical approach.", tag: "Strategy" },
    { title: "Change & Adoption", description: "One of the biggest challenges with AI is not implementation — it is adoption. We help organisations design user adoption strategies that support teams as they begin using AI tools.", tag: "Adoption" },
    { title: "In-House Team Training", description: "We work with internal teams to build the skills and confidence they need to guide adoption across the organisation, including training in AI fundamentals and prompting techniques.", tag: "Capability" }
];

const ServiceDetailCards = () => {
    const { getContent } = useContent();
    const detailCards = getContent('services')?.detailCards as { items: Array<{ title: string; description: string; tag?: string }> } | null;
    
    const services = detailCards?.items?.map((item, i) => ({
        title: item.title,
        description: item.description,
        tag: item.tag || defaultServices[i]?.tag || "Service"
    })) || defaultServices;

    return (
        <section className="py-24 md:py-48 bg-white overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {services.map((service: { title: string; description: string; tag: string }, index: number) => (
                        <AnimatedSection key={index} delay={index * 0.1} className="h-full">
                            <GlassCard className="h-full flex flex-col p-12 md:p-16 border-black/5 bg-[#FFDCD9]/10 hover:bg-white transition-colors duration-700">
                                <div className="h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-12">
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF3500]">{service.tag}</div>
                                        <div className="w-2 h-2 rounded-full bg-[#FF3500]" />
                                    </div>
                                    <div className="flex-grow flex flex-col space-y-6 mb-12">
                                        <h3 className="text-3xl md:text-5xl font-black text-[#262424] tracking-tighter uppercase leading-none">
                                            {service.title}
                                        </h3>
                                        <p className="text-lg text-[#262424]/70 font-medium leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className="pt-8 flex items-center gap-2 text-[#262424] font-black text-[10px] uppercase tracking-widest border-t border-black/5 mt-auto">
                                        Explore Service
                                        <svg className="w-4 h-4 text-[#FF3500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
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

export default ServiceDetailCards;

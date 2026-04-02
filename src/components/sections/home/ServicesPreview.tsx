'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useContent } from '@/hooks/useContent';

const defaultServices = [
    { title: "Change", desc: "Structured readiness and risk assessment for smooth transformation.", tag: "Strategy" },
    { title: "Adoption", desc: "Onboarding users and integrating AI into daily operational habits.", tag: "Integration" },
    { title: "Training", desc: "Upskilling teams with prompt engineering and AI governance skills.", tag: "Skills" }
];

const ServicesPreview = () => {
    const { getContent } = useContent();
    const servicesData = getContent('services')?.detailCards as { items?: Array<{ title?: string; description?: string; tag?: string }> } | null;
    
    const sectionTitle = (getContent('home') as { servicesPreview?: { title?: string } })?.servicesPreview?.title || "Services Overview";
    const services = servicesData?.items?.map((item, i) => ({
        title: item.title || defaultServices[i]?.title || "Service",
        desc: item.description || defaultServices[i]?.desc || "",
        tag: item.tag || defaultServices[i]?.tag || "Service"
    })) || defaultServices;

    return (
        <section className="py-24 md:py-48 bg-[#262424] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#FF3500]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#FF3500]/5 rounded-full blur-[100px] pointer-events-none" />

            <Container>
                <div className="space-y-24">
                    <AnimatedSection className="text-center space-y-6">
                        <h2 className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em]">Our Expertise</h2>
                        <h3 className="text-4xl md:text-8xl font-black text-white tracking-tighter leading-none">
                            {sectionTitle}
                        </h3>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service: { title: string; desc: string; tag: string }, i: number) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <GlassCard className="h-full bg-white/5 border-white/10 hover:border-[#FF3500]/30 group p-12">
                                    <div className="space-y-12">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[#FF3500] font-black text-[10px] uppercase tracking-widest">{service.tag}</span>
                                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 bg-[#FF3500] rounded-full" />
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <h4 className="text-4xl font-black text-white uppercase tracking-tighter">{service.title}</h4>
                                            <p className="text-white/60 font-medium leading-relaxed group-hover:text-white/80 transition-colors">
                                                {service.desc}
                                            </p>
                                        </div>
                                        <div className="pt-8 flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest group-hover:text-[#FF3500] transition-colors">
                                            View Details
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
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

export default ServicesPreview;

'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import tarynImage from '@/assets/Taryn Nixon.png';
import babakImage from '@/assets/Babak Daemi.png';

const founders = [
    {
        name: "Taryn Nixon",
        role: "AI Adoption Lead",
        bio: "AI Adoption Lead with 15 years of experience in change management and digital transformation across global enterprises.",
        image: tarynImage
    },
    {
        name: "Babak Daemi",
        role: "Strategic Lead",
        bio: "Marketing and behavioural economics specialist with over 20 years of experience in change management and digital transformation.",
        image: babakImage
    }
];

const Founders = () => {
    return (
        <section className="py-24 md:py-48 bg-white overflow-hidden">
            <Container>
                <AnimatedSection className="text-center mb-32">
                    <h2 className="text-[#262424]/40 text-xs font-black uppercase tracking-[0.3em] mb-4">Leadership</h2>
                    <h3 className="text-4xl md:text-7xl font-black text-[#262424] tracking-tighter uppercase leading-none">The Co-Founders</h3>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-6xl mx-auto">
                    {founders.map((founder, index) => (
                        <AnimatedSection key={index} delay={index * 0.2}>
                            <GlassCard className="group flex flex-col p-12 md:p-16 gap-12 border-black/5 bg-[#FFDCD9]/10 items-center md:items-start text-center md:text-left transition-all duration-700">
                                <div className="w-full aspect-[4/5] bg-[#262424]/5 rounded-[3rem] overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-700">
                                    <Image
                                        src={founder.image}
                                        alt={founder.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#262424]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className="w-full h-1 bg-[#FF3500] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-4xl font-black text-[#262424] tracking-tighter uppercase leading-none">{founder.name}</h3>
                                        <p className="text-[#FF3500] font-black uppercase tracking-widest text-[10px]">{founder.role}</p>
                                    </div>
                                    <p className="text-lg text-[#262424]/70 font-medium leading-relaxed max-w-sm">
                                        {founder.bio}
                                    </p>
                                </div>
                            </GlassCard>
                        </AnimatedSection>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Founders;

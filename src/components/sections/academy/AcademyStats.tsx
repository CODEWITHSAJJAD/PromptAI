'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const stats = [
    { label: "employees using AI", value: 75, suffix: "%" },
    { label: "using unapproved tools", value: 78, suffix: "%" },
    { label: "hesitant to adopt AI", value: 52, suffix: "%" },
    { label: "businesses impacted", value: 100, suffix: "%" }
];

const AcademyStats = () => {
    return (
        <section className="py-24 md:py-48 bg-white">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <GlassCard className="p-10 border-black/5 bg-[#FFDCD9]/10 text-center space-y-4 group">
                                <div className="text-5xl md:text-7xl font-black text-[#FF3500] tracking-tighter">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="text-xs font-black uppercase tracking-widest text-[#262424]/60 group-hover:text-[#262424] transition-colors">
                                    {stat.label}
                                </p>
                            </GlassCard>
                        </AnimatedSection>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default AcademyStats;

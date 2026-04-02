'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

import { useContent } from '@/hooks/useContent';

const defaultStats = [
    { label: "employees using AI", value: "75%" },
    { label: "using unapproved tools", value: "78%" },
    { label: "hesitant to adopt AI", value: "52%" },
    { label: "businesses impacted", value: "100%" }
];

const AcademyStats = () => {
    const { getContent } = useContent();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const academyContent = getContent('academy') as any;
    const statsItems = academyContent?.stats?.items || defaultStats;

    return (
        <section className="py-24 md:py-48 bg-white">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {statsItems.map((stat: any, i: number) => {
                        const statValueStr = String(stat.value);
                        const numericValue = parseInt(statValueStr.replace(/[^0-9]/g, '')) || 0;
                        const prefixMatch = statValueStr.match(/^[^0-9]+/);
                        const suffixMatch = statValueStr.match(/[^0-9]+$/);
                        const prefix = prefixMatch ? prefixMatch[0] : "";
                        const suffix = suffixMatch ? suffixMatch[0] : "";

                        return (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <GlassCard className="p-10 border-black/5 bg-[#FFDCD9]/10 text-center space-y-4 group h-full flex flex-col justify-center">
                                    <div className="text-5xl md:text-7xl font-black text-[#FF3500] tracking-tighter flex items-center justify-center">
                                        {prefix}<AnimatedCounter value={numericValue} suffix={suffix} />
                                    </div>
                                    <p className="text-xs font-black uppercase tracking-widest text-[#262424]/60 group-hover:text-[#262424] transition-colors">
                                        {stat.label}
                                    </p>
                                </GlassCard>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default AcademyStats;

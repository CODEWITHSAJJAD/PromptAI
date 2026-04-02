/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useRef } from 'react';
import { useContent } from '@/hooks/useContent';

const defaultTimelineData = [
    { year: "1980s", title: "Computers enter offices", description: "The first step towards digital workplaces." },
    { year: "1997", title: "Email primary communication", description: "Standardization of electronic messaging." },
    { year: "2006", title: "Cloud computing norm", description: "Data access becomes decentralized." },
    { year: "2024", title: "AI revolution begins", description: "Microsoft Copilot and Google Gemini transform operations." }
];

const AITimeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });
    const { getContent } = useContent();
    const timelineDataFromCMS = getContent('academy')?.timeline as any;
    
    const tagline = timelineDataFromCMS?.tagline || "The Evolution";
    const title = timelineDataFromCMS?.title || "AI is Here";
    const timelineData = timelineDataFromCMS?.items?.length ? timelineDataFromCMS.items : defaultTimelineData;

    return (
        <section ref={containerRef} className="py-24 md:py-48 bg-[#262424] text-white relative overflow-hidden">
            {/* Gradient glow background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#FF3500]/5 to-transparent pointer-events-none" />

            <Container>
                <div className="space-y-32">
                    <AnimatedSection className="text-center space-y-8">
                        <h2 className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em]">{tagline}</h2>
                        <h3 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">{title}</h3>
                    </AnimatedSection>

                    <div className="relative max-w-4xl mx-auto px-4 md:px-0">
                        {/* Vertical Progress Line */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-translate-x-1/2">
                            <motion.div
                                style={{ scaleY: scrollYProgress }}
                                className="w-full h-full bg-[#FF3500] origin-top shadow-[0_0_20px_rgba(255,53,0,0.5)]"
                            />
                        </div>

                        <div className="space-y-32">
                            {timelineData.map((item: any, i: number) => (
                                <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Timeline Marker */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: false, margin: "-20%" }}
                                        className="absolute left-[20px] md:left-1/2 w-8 h-8 bg-[#FF3500] rounded-full border-4 border-[#262424] md:-translate-x-1/2 z-10 shadow-lg"
                                    />

                                    {/* Content Card */}
                                    <div className={`w-full md:w-[45%] pl-12 md:pl-0 pt-2 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <AnimatedSection direction={i % 2 === 0 ? 'left' : 'right'}>
                                            <div className="space-y-4">
                                                <div className="text-3xl md:text-6xl font-black text-[#FF3500] tracking-tighter leading-none">{item.year}</div>
                                                <h4 className="text-xl md:text-2xl font-black tracking-tighter leading-none uppercase">{item.title}</h4>
                                                <p className="text-white/60 font-medium leading-relaxed">{item.description}</p>
                                            </div>
                                        </AnimatedSection>
                                    </div>
                                    {/* Padding for grid */}
                                    <div className="hidden md:block w-[45%]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AITimeline;

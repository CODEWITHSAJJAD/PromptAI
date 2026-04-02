/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { GlowBackground } from '@/components/ui/GlowBackground';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useContent } from '@/hooks/useContent';

const ContactHero = () => {
    const { getContent } = useContent();
    const heroData = getContent('contact')?.hero as any;

    const tagline = heroData?.tagline || "Get in Touch";
    const title = heroData?.title || "Get in \n Touch.";
    const subtitle = heroData?.subtitle || "Ready to start your AI adoption journey?";
    const description1 = heroData?.description1 || "If you are interested in how AI can support your organisation, or if you would like to learn more about our training programmes and workshops, we would like to hear from you.";
    const description2 = heroData?.description2 || "Contact us to discuss your goals and how we can help your team build practical AI capability.";
    const phone = heroData?.phone || "+44 2071673013";
    const email = heroData?.email || "hello@promptaiglobal.com";

    // helper to render title with bold brand color if there is a dot or last word
    const renderTitle = () => {
        if (title.includes('\n')) {
            const parts = title.split('\n');
            return (
                <>
                    {parts[0]} <br /> <span className="text-[#FF3500]">{parts[1]}</span>
                </>
            );
        }
        return title;
    };

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 bg-white overflow-hidden">
            <GlowBackground />
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div className="space-y-16">
                        <div className="space-y-8">
                            <AnimatedSection direction="right">
                                <h2 className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em] mb-4 font-mono">{tagline}</h2>
                                <h1 className="text-5xl md:text-9xl font-black text-[#262424] leading-[0.85] tracking-tighter mb-8 whitespace-pre-line">
                                    {renderTitle()}
                                </h1>
                                <p className="text-xl md:text-2xl font-bold text-[#262424] leading-tight max-w-xl mb-12">
                                    {subtitle}
                                </p>
                                <div className="space-y-6 text-lg text-[#262424]/70 font-medium leading-relaxed mb-12 max-w-xl">
                                    <p>{description1}</p>
                                    <p>{description2}</p>
                                </div>
                            </AnimatedSection>

                            {/* Message Sending Animation */}
                            <AnimatedSection direction="up" delay={0.4} className="relative hidden lg:block h-32">
                                <svg viewBox="0 0 400 100" className="w-full h-full">
                                    <motion.path
                                        d="M 50 50 L 350 50"
                                        stroke="#FF3500"
                                        strokeWidth="2"
                                        strokeDasharray="10 10"
                                        strokeOpacity="0.2"
                                    />
                                    <motion.path
                                        d="M 50 50 L 350 50"
                                        stroke="#FF3500"
                                        strokeWidth="2"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <motion.g
                                        animate={{ x: [0, 300] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <rect x="40" y="40" width="20" height="15" fill="#FF3500" rx="2" />
                                        <path d="M 40 40 L 50 48 L 60 40" stroke="white" strokeWidth="1" fill="none" />
                                    </motion.g>
                                </svg>
                            </AnimatedSection>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                            <AnimatedSection direction="right" delay={0.2}>
                                <div className="space-y-6 group">
                                    <h3 className="text-xs font-black uppercase tracking-widest text-[#262424]/40">Phone</h3>
                                    <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-2xl md:text-3xl font-black text-[#262424] tracking-tighter hover:text-[#FF3500] transition-colors leading-none">{phone}</a>
                                    <div className="w-8 h-1 bg-[#FF3500] group-hover:w-full transition-all duration-500" />
                                </div>
                            </AnimatedSection>
                            <AnimatedSection direction="right" delay={0.3}>
                                <div className="space-y-6 group">
                                    <h3 className="text-xs font-black uppercase tracking-widest text-[#262424]/40">Email</h3>
                                    <a href={`mailto:${email}`} className="text-2xl md:text-3xl font-black text-[#262424] tracking-tighter hover:text-[#FF3500] transition-colors leading-none truncate block">{email}</a>
                                    <div className="w-8 h-1 bg-[#FF3500] group-hover:w-full transition-all duration-500" />
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>

                    <AnimatedSection direction="left" delay={0.4}>
                        <GlassCard className="p-10 md:p-20 bg-white/60 border-white shadow-3xl">
                            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 gap-12">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="relative group">
                                            <input type="text" placeholder="Full Name" className="peer w-full bg-white/40 border-b-2 border-black/5 px-4 py-4 focus:border-[#FF3500] outline-none transition-all placeholder-transparent" />
                                            <label className="absolute left-4 top-4 text-[10px] font-black uppercase tracking-widest opacity-40 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-[10px] peer-focus:text-[#FF3500] pointer-events-none">Full Name</label>
                                        </div>
                                        <div className="relative group">
                                            <input type="text" placeholder="Company" className="peer w-full bg-white/40 border-b-2 border-black/5 px-4 py-4 focus:border-[#FF3500] outline-none transition-all placeholder-transparent" />
                                            <label className="absolute left-4 top-4 text-[10px] font-black uppercase tracking-widest opacity-40 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-[10px] peer-focus:text-[#FF3500] pointer-events-none">Company</label>
                                        </div>
                                    </div>
                                    <div className="relative group">
                                        <input type="email" placeholder="Email Address" className="peer w-full bg-white/40 border-b-2 border-black/5 px-4 py-4 focus:border-[#FF3500] outline-none transition-all placeholder-transparent" />
                                        <label className="absolute left-4 top-4 text-[10px] font-black uppercase tracking-widest opacity-40 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-[10px] peer-focus:text-[#FF3500] pointer-events-none">Email Address</label>
                                    </div>
                                    <div className="relative group">
                                        <textarea rows={4} placeholder="Your Message" className="peer w-full bg-white/40 border-b-2 border-black/5 px-4 py-4 focus:border-[#FF3500] outline-none transition-all resize-none placeholder-transparent"></textarea>
                                        <label className="absolute left-4 top-4 text-[10px] font-black uppercase tracking-widest opacity-40 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-[10px] peer-focus:text-[#FF3500] pointer-events-none">Your Message</label>
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: "#FF3500" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-[#262424] text-white py-8 rounded-3xl text-sm font-black uppercase tracking-widest transition-all shadow-2xl"
                                >
                                    Send Inquiry
                                </motion.button>
                            </form>
                        </GlassCard>
                    </AnimatedSection>
                </div>
            </Container>
        </section>
    );
};

export default ContactHero;

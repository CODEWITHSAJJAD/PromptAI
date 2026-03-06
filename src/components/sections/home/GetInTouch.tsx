'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const GetInTouch = () => {
    return (
        <section className="py-24 md:py-48 bg-[#FFDCD9]/20 relative overflow-hidden">
            {/* Background glowing elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FF3500]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#FF3500]/10 rounded-full blur-[100px]" />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <AnimatedSection direction="right">
                        <div className="space-y-12">
                            <h2 className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em]">Let&apos;s Talk</h2>
                            <h3 className="text-5xl md:text-8xl font-black text-[#262424] tracking-tighter leading-none">
                                Get in <br /> Touch
                            </h3>
                            <div className="space-y-8 pt-12">
                                <p className="text-xl md:text-2xl font-bold text-[#262424] leading-tight">
                                    Ready to start your AI journey?
                                    Our team is here to help.
                                </p>
                                <div className="space-y-4">
                                    <a href="mailto:hello@promptaiglobal.com" className="block text-2xl font-black text-[#FF3500] hover:underline transition-all">hello@promptaiglobal.com</a>
                                    <a href="tel:+442071673013" className="block text-lg font-bold text-[#262424] hover:opacity-70 transition-opacity">+44 2071673013</a>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="left" delay={0.2}>
                        <GlassCard className="p-10 md:p-16 border-white/40 bg-white/60 shadow-2xl">
                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-4">Name</label>
                                        <input type="text" className="w-full bg-white/50 border border-black/5 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#FF3500] outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-4">Company</label>
                                        <input type="text" className="w-full bg-white/50 border border-black/5 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#FF3500] outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-4">Email</label>
                                    <input type="email" className="w-full bg-white/50 border border-black/5 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#FF3500] outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-4">Message</label>
                                    <textarea rows={4} className="w-full bg-white/50 border border-black/5 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#FF3500] outline-none transition-all resize-none"></textarea>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-[#262424] text-white py-6 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-[#FF3500] transition-colors shadow-xl"
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </GlassCard>
                    </AnimatedSection>
                </div>
            </Container>
        </section>
    );
};

export default GetInTouch;

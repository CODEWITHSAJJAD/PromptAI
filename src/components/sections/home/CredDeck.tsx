'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { useContent } from '@/hooks/useContent';

const CredDeck = () => {
    const { getContent } = useContent();
    const credDeckData = getContent('home')?.credDeck as { title?: string; description?: string } | null;
    const title = credDeckData?.title || "Get a \n Cred Deck";
    const description = credDeckData?.description || "Use our form to request a pitch deck and learn more about our team, our purpose and our AI adoption methodology.";

    return (
        <section className="py-24 md:py-40 bg-[#FFDCD9]">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-[#262424] leading-[0.9] tracking-tighter mb-8 whitespace-pre-line">
                            {title}
                        </h2>
                        <p className="text-lg md:text-xl text-[#262424]/70 font-medium leading-relaxed max-w-md">
                            {description}
                        </p>
                        <div className="mt-12">
                            <button className="bg-[#FF3500] text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-xl hover:scale-105 active:scale-95">
                                Book a Consultation
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#262424]/40 ml-4">Full Name</label>
                                <input type="text" placeholder="Your Name" className="w-full bg-[#FFDCD9]/30 border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#FF3500] outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#262424]/40 ml-4">Email Address</label>
                                <input type="email" placeholder="hello@company.com" className="w-full bg-[#FFDCD9]/30 border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#FF3500] outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#262424]/40 ml-4">Message (Optional)</label>
                                <textarea rows={3} placeholder="Tell us about your project..." className="w-full bg-[#FFDCD9]/30 border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#FF3500] outline-none transition-all resize-none"></textarea>
                            </div>
                            <button className="w-full bg-[#262424] text-white py-5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-[#262424]/90 transition-all">
                                Request Deck
                            </button>
                        </form>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default CredDeck;

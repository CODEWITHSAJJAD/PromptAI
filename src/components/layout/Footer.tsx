import React from 'react';
import { Container } from '@/components/ui/Container';

const Footer = () => {
    return (
        <footer className="bg-[#FFDCD9] py-10 md:py-12">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                    {/* Left */}
                    <div className="flex flex-col gap-4">
                        <div className="text-2xl font-black tracking-tighter text-[#262424] uppercase">
                            PromptAI
                        </div>
                        <p className="text-[#262424] font-bold text-sm tracking-tight">
                            Empowering Your People With AI
                        </p>
                    </div>

                    {/* Middle */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-[#262424] text-xs font-black uppercase tracking-widest opacity-40">
                            Quick Links
                        </h4>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                            {['Home', 'Services', 'Academy', 'Case Studies', 'Insights', 'About', 'Contact'].map((link) => (
                                <a key={link} href="#" className="text-sm font-bold text-[#262424] hover:opacity-70 transition-opacity">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-[#262424] text-xs font-black uppercase tracking-widest opacity-40">
                            Contact
                        </h4>
                        <div className="flex flex-col gap-4">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#262424]/40 mb-1">Phone</p>
                                <a href="tel:+442071673013" className="text-lg font-bold text-[#262424] hover:opacity-70 transition-opacity">
                                    +44 2071673013
                                </a>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#262424]/40 mb-1">Email</p>
                                <a href="mailto:hello@promptaiglobal.com" className="text-lg font-bold text-[#262424] hover:opacity-70 transition-opacity">
                                    hello@promptaiglobal.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 md:mt-12 pt-6 border-t border-[#262424]/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#262424]/40">
                    <p>© 2024 PromptAI. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export { Footer };

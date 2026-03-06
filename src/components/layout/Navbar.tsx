'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import logo from '@/assests/Prompt AI Logo_Primary Orange_RGB.svg';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Academy', href: '/academy' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Insights', href: '/insights' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFDCD9] py-4 md:py-6 border-b border-[#262424]/5">
            <Container className="flex items-center justify-between">
                <a href="/" className="block w-40 md:w-48">
                    <Image src={logo} alt="PromptAI Logo" className="w-full h-auto" priority />
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-4">
                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#262424]">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 rounded-md hover:bg-[#FFE9E6] transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <button className="bg-[#FF3500] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all ml-4">
                        Contact Us
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-[#262424] block"
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-6 h-0.5 bg-[#262424] block"
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-[#262424] block"
                    />
                </button>
            </Container>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#FFDCD9] border-t border-[#262424]/5 overflow-hidden"
                    >
                        <Container className="py-8 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-bold text-[#262424] px-4 py-3 rounded-md hover:bg-[#FFE9E6] transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="bg-[#FF3500] text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest w-full mt-4">
                                Contact Us
                            </button>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export { Navbar };

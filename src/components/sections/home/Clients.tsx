'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { LogoMarquee } from '@/components/ui/LogoMarquee';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const clientLogos = [
    "WPP",
    "Refinitiv",
    "StellarUp",
    "Howden",
    "Admiral",
    "Jaguar",
    "Land Rover",
    "Howdens"
];

const Clients = () => {
    return (
        <section className="py-20 bg-[#FFDCD9]/10 overflow-hidden">
            <Container>
                <AnimatedSection className="text-center space-y-8 mb-16">
                    <h4 className="text-[#262424]/40 text-xs font-black uppercase tracking-[0.3em]">Trusted by Global Brands</h4>
                </AnimatedSection>
            </Container>

            <LogoMarquee logos={clientLogos} />
        </section>
    );
};

export default Clients;

'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { LogoMarquee } from '@/components/ui/LogoMarquee';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useContent } from '@/hooks/useContent';

const defaultClientLogos = [
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
    const { getContent } = useContent();
    const clientsData = getContent('home')?.clients as { title?: string; logos?: string[] } | null;
    const title = clientsData?.title || "Trusted by Global Brands";
    const clientLogos = clientsData?.logos?.length ? clientsData.logos : defaultClientLogos;

    return (
        <section className="py-20 bg-[#FFDCD9]/10 overflow-hidden">
            <Container>
                <AnimatedSection className="text-center space-y-8 mb-16">
                    <h4 className="text-[#262424]/40 text-xs font-black uppercase tracking-[0.3em]">{title}</h4>
                </AnimatedSection>
            </Container>

            <LogoMarquee logos={clientLogos} />
        </section>
    );
};

export default Clients;

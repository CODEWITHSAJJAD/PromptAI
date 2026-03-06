import React from 'react';
import { Container } from '@/components/ui/Container';

const features = [
    {
        title: "Extension of your CSR",
        description: "We work with charities to help young people from disadvantaged backgrounds get into work and learn new skills."
    },
    {
        title: "New Approach to Adoption",
        description: "We use PROSCI training and behavioural economics to build effective AI adoption strategies."
    },
    {
        title: "Experienced Team of Change Managers",
        description: "Our co-founder has led projects for brands like WPP, Howdens, Admiral, Refinitiv and Jaguar Land Rover."
    }
];

const WhyDifferent = () => {
    return (
        <section className="py-20 md:py-32 bg-white">
            <Container>
                <div className="mb-16">
                    <h2 className="text-[#262424] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
                        Why We&apos;re Different
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col gap-6">
                            <div className="w-12 h-1 bg-[#FF3500]" />
                            <h3 className="text-2xl md:text-3xl font-black text-[#262424] leading-tight tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="text-[#262424]/70 leading-relaxed text-lg">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export { WhyDifferent };

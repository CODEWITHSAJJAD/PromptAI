import React from 'react';
import { Container } from '@/components/ui/Container';

const HomeHero = () => {
    return (
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-white">
            <Container>
                <div className="max-w-4xl">
                    <h2 className="text-[#FF3500] text-sm md:text-base font-bold uppercase tracking-widest mb-6">
                        What We Do
                    </h2>
                    <h1 className="text-4xl md:text-7xl font-black text-[#262424] leading-[0.9] tracking-tighter mb-10">
                        AI Adoption <br className="hidden md:block" /> for Business
                    </h1>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                        <p className="flex-1 text-lg md:text-xl text-[#262424] leading-relaxed font-medium">
                            We help businesses and their people adopt AI to drive greater productivity.
                            We use Change Management, Traditional Adoption such as PROSCI,
                            Product Training and principles from Behavioural Science to nudge
                            people to utilise AI for greater efficiency, effectiveness and productivity at work.
                        </p>
                        <p className="flex-1 text-lg md:text-xl text-[#262424]/70 leading-relaxed">
                            Our approach starts with business leaders so we understand the challenges,
                            the objectives and the purpose behind the desire to integrate AI into
                            business working practice.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export { HomeHero };

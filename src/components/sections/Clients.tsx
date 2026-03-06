import React from 'react';
import { Container } from '@/components/ui/Container';

const Clients = () => {
    return (
        <section className="py-20 md:py-32 bg-gray-50">
            <Container>
                <h2 className="text-[#262424] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-16 text-center">
                    Who We&apos;ve Worked With
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 opacity-40 grayscale">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="h-20 md:h-24 bg-white rounded-xl border border-black/5 flex items-center justify-center p-8">
                            <span className="text-[#262424] font-black tracking-tighter text-xl">LOGO {i}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export { Clients };

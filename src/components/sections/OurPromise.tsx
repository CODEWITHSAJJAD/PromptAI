import React from 'react';
import { Container } from '@/components/ui/Container';

const OurPromise = () => {
    return (
        <section className="py-20 md:py-32 bg-[#FFDCD9]">
            <Container>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-[#262424] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-8">
                        Our Promise
                    </h2>
                    <p className="text-2xl md:text-4xl font-black text-[#262424] leading-tight tracking-tight mb-10">
                        Working with PromptAI means businesses can help us to support disadvantaged
                        young people in London. Put simply, we will hire one young person from an
                        underprivileged background for every contract we sign that is 12 months or longer.
                    </p>
                    <p className="text-lg md:text-xl text-[#262424]/70 mb-12">
                        Watch our video below to find out more.
                    </p>

                    {/* Video Placeholder */}
                    <div className="aspect-video w-full bg-[#262424] rounded-3xl flex items-center justify-center overflow-hidden group cursor-pointer relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity group-hover:opacity-0" />
                        <div className="w-20 h-20 bg-[#FF3500] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                            <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export { OurPromise };

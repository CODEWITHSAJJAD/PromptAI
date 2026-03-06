'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LogoMarqueeProps {
    logos: string[];
}

export const LogoMarquee = ({ logos }: LogoMarqueeProps) => {
    // Duplicate logos for seamless loop
    const duplicatedLogos = [...logos, ...logos, ...logos];

    return (
        <div className="relative w-full overflow-hidden py-10">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FFDCD9] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FFDCD9] to-transparent z-10" />

            <motion.div
                animate={{ x: [0, -100 * logos.length] }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="flex items-center gap-20 whitespace-nowrap px-10"
            >
                {duplicatedLogos.map((logo, i) => (
                    <div key={i} className="flex items-center justify-center min-w-[150px]">
                        <span className="text-3xl font-black text-[#262424]/20 hover:text-[#FF3500]/40 transition-colors uppercase tracking-widest">
                            {logo}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { animations } from '@/lib/animations';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
    className?: string;
}

const SectionTitle = ({
    title,
    subtitle,
    align = 'center',
    className,
}: SectionTitleProps) => {
    const alignmentClasses = {
        left: 'text-left items-start',
        center: 'text-center items-center',
        right: 'text-right items-end',
    };

    return (
        <div className={cn('flex flex-col mb-12 md:mb-20', alignmentClasses[align], className)}>
            {subtitle && (
                <motion.span
                    {...animations.fadeIn}
                    className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                {...animations.fadeIn}
                transition={{ ...animations.fadeIn.transition, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
            >
                {title}
            </motion.h2>
        </div>
    );
};

export { SectionTitle };

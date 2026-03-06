'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverLift?: boolean;
    glowOnHover?: boolean;
}

export const GlassCard = ({
    children,
    className = "",
    hoverLift = true,
    glowOnHover = true
}: GlassCardProps) => {
    return (
        <motion.div
            whileHover={hoverLift ? { y: -10 } : {}}
            className={cn(
                "relative bg-white/40 backdrop-blur-xl border border-white/20 rounded-[2.5rem] overflow-hidden transition-all duration-500",
                glowOnHover && "hover:shadow-[0_20px_50px_-15px_rgba(255,53,0,0.15)] hover:border-[#FF3500]/30",
                className
            )}
        >
            {children}
            {glowOnHover && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF3500]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            )}
        </motion.div>
    );
};

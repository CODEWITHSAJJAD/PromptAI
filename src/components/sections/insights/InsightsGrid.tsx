/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useContent } from '@/hooks/useContent';

import img1 from '@/assets/PromptAI_WebsiteImage-300x169.webp';
import img2 from '@/assets/PromptAI_WebsiteImage2-300x169.webp';
import img3 from '@/assets/PromptAI_WebsiteImage5-300x169.webp';
import img4 from '@/assets/PromptAI_WebsiteImageGETREADYFORAI-300x169.webp';

const defaultArticles = [
    {
        category: "Strategy",
        title: "AI adoption strategies for enterprise organisations",
        date: "March 2024",
        readTime: "5 min read",
        image: img1
    },
    {
        category: "Science",
        title: "Behavioural science and the human side of technology",
        date: "Feb 2024",
        readTime: "8 min read",
        image: img2
    },
    {
        category: "Future",
        title: "The future of workplace AI: Beyond the hype",
        date: "Jan 2024",
        readTime: "6 min read",
        image: img3
    },
    {
        category: "Governance",
        title: "AI governance for organisations: A structured approach",
        date: "Dec 2023",
        readTime: "10 min read",
        image: img4
    }
];

const images = [img1, img2, img3, img4];

const InsightsGrid = () => {
    const { getContent } = useContent();
    const iv = getContent('insights') as any;
    const intro = iv?.intro || {
        title: "AI is evolving quickly and organisations need to stay informed about how these changes affect the future of work.",
        subtitle: "In the Insights section we explore several key topics that shape the modern workplace:",
        topics: [
            "AI adoption trends and statistics",
            "AI and human skills evolution",
            "LLMs in modern organisations",
            "AI-enabled productivity",
            "Future of work research"
        ]
    };

    const articlesData = iv?.articles as Array<{ id: string; title: string; excerpt?: string; category: string; date: string; readTime?: string }> | null;
    
    const articles = articlesData?.map((article, index) => ({
        category: article.category,
        title: article.title,
        date: article.date,
        readTime: article.readTime || "5 min read",
        excerpt: article.excerpt,
        image: images[index % images.length]
    })) || defaultArticles;

    return (
        <section className="py-24 md:py-48 bg-white overflow-hidden">
            <Container>
                <div className="space-y-16 max-w-4xl mb-24">
                    <AnimatedSection direction="right">
                        <p className="text-2xl md:text-3xl font-black text-[#262424] leading-tight">
                            {intro.title}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            <div className="space-y-4">
                                <p className="text-lg text-[#262424]/70 font-medium leading-relaxed">
                                    {intro.subtitle}
                                </p>
                                <ul className="space-y-3">
                                    {intro.topics.map((item: string, i: number) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-[#262424]/80 uppercase tracking-tight">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF3500]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {articles.map((article, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <div className="group cursor-pointer space-y-10">
                                <div className="aspect-[16/10] bg-[#FFDCD9]/20 rounded-[3.5rem] overflow-hidden relative border border-black/5">
                                    <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF3500]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="absolute top-10 left-10">
                                        <span className="bg-[#262424] text-white text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full">
                                            {article.category}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-700">
                                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-3xl text-[#FF3500]">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6 px-4">
                                    <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest opacity-40">
                                        <span>{article.date}</span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF3500]" />
                                        <span>{article.readTime}</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black text-[#262424] leading-[1.1] tracking-tighter group-hover:text-[#FF3500] transition-colors duration-500">
                                        {article.title}
                                    </h3>
                                    <div className="pt-4 flex items-center gap-2 text-[#FF3500] font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                                        Read Deep Dive
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default InsightsGrid;

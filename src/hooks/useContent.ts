'use client';

import { useState, useEffect, useCallback } from 'react';

interface ContentData {
  home: Record<string, unknown>;
  services: Record<string, unknown>;
  caseStudies: Record<string, unknown>;
  academy: Record<string, unknown>;
  about: Record<string, unknown>;
  contact: Record<string, unknown>;
  insights: Record<string, unknown>;
}

const defaultContent: ContentData = {
  home: {
    hero: { tagline: "GET READY FOR AI", title: "Ready for AI?", subtitle: "We help organisations plan, introduce and adopt AI in practical ways." },
    promise: { title: "Our Promise", content: "We combine deep technical expertise with business acumen to deliver AI solutions." },
    whyDifferent: { title: "Why We're Different", items: [{ title: "Strategic Approach", description: "We don't just build AI, we integrate it." }, { title: "Practical Implementation", description: "Focus on tangible outcomes." }, { title: "Custom Solutions", description: "Every business is unique." }] },
    clients: { title: "Trusted by Global Brands", logos: ["WPP", "Refinitiv", "StellarUp", "Howden", "Admiral", "Jaguar", "Land Rover", "Howdens"] },
    credDeck: { title: "Get a Cred Deck", description: "Use our form to request a pitch deck." },
    adoptingAI: { title: "Adopting AI tools", subtitle: "PromptAI helps organisations introduce AI in a way that people can actually adopt.", description: "We work with leadership teams." },
    buildingCapability: { title: "Building Capability", subtitle: "Our focus is not just technology.", description: "Through workshops and training." },
    servicesPreview: { title: "Our Services" },
    pillars: { missionQuote: "We're on a mission to empower people to be on the right side of AI.", approachTitle: "Our Approach", approachHeading: "Long-term relationships built on human trust.", whyTitle: "Our Why", whyHeading: "Productive and fulfilling workplaces." },
    getInTouch: { title: "Get in Touch", subtitle: "Ready to start your AI journey?" }
  },
  services: {
    hero: { tagline: "Our Capability", title: "What We Do", subtitle: "Helping organisations plan, introduce and adopt AI." },
    detailCards: { items: [{ title: "AI Strategy & Consulting", description: "Comprehensive AI roadmap", icon: "brain" }, { title: "Implementation Services", description: "End-to-end development", icon: "code" }, { title: "Training & Enablement", description: "Hands-on workshops", icon: "graduation" }] },
    adoptionDeepDive: { title: "Adoption Deep Dive", content: "Successful AI implementation goes beyond technology." },
    founders: { title: "Our Team", members: [{ name: "Taryn Nixon", role: "Co-Founder & CEO", bio: "Leading AI strategist" }, { name: "Babak Daemi", role: "Co-Founder & CTO", bio: "Technical visionary" }] }
  },
  caseStudies: {
    hero: { tagline: "Success Stories", title: "Case Studies", subtitle: "Real results from real clients." },
    studies: [
      { id: "1", client: "WPP", challenge: "Scaling AI tools across a global creative network.", solution: "Bespoke AI adoption framework.", results: "30% increase in productivity.", tags: ["Advertising"] },
      { id: "2", client: "Refinitiv", challenge: "Integrating generative AI into data environments.", solution: "PROSCI change management strategy.", results: "85% adoption rate.", tags: ["Data", "Analytics"] }
    ]
  },
  academy: {
    hero: { tagline: "Learn AI", title: "AI Academy", subtitle: "Comprehensive training programs." },
    stats: { title: "By The Numbers", items: [{ value: "500+", label: "Professionals Trained" }, { value: "50+", label: "Organizations" }, { value: "95%", label: "Satisfaction Rate" }] },
    benefits: { title: "Workshop Benefits", items: [{ title: "Hands-on Learning", description: "Practical exercises" }, { title: "Expert Instructors", description: "Industry practitioners" }, { title: "Flexible Formats", description: "In-person, virtual" }] },
    timeline: { title: "AI Journey", items: [{ year: "Week 1-2", title: "Foundation", description: "Understanding AI fundamentals" }, { year: "Week 3-4", title: "Implementation", description: "Building solutions" }, { year: "Week 5-6", title: "Optimization", description: "Refining initiatives" }] }
  },
  about: {
    hero: { tagline: "About Us", title: "We're on a mission to make AI accessible", subtitle: "Founded by industry veterans." },
    promise: { title: "Our Promise", content: "We combine deep technical expertise with business acumen." },
    founders: { title: "Meet Our Team", members: [{ name: "Taryn Nixon", role: "Co-Founder & CEO", bio: "Leading AI strategist" }, { name: "Babak Daemi", role: "Co-Founder & CTO", bio: "Technical visionary" }] }
  },
  contact: {
    hero: { tagline: "Get In Touch", title: "Let's Talk AI", subtitle: "Ready to transform your business?", email: "hello@promptai.com", phone: "+1 (555) 123-4567", address: "123 Innovation Drive" },
    footer: { email: "hello@promptai.com", phone: "+1 (555) 123-4567", address: "123 Innovation Drive" }
  },
  insights: {
    hero: { tagline: "Latest Insights", title: "AI Insights", subtitle: "Stay updated with the latest trends." },
    articles: [
      { id: "1", title: "The Future of AI in Business", excerpt: "Exploring how AI transforms operations.", category: "AI Trends", date: "2024-01-15" },
      { id: "2", title: "Building an AI Strategy", excerpt: "A comprehensive guide to AI strategy.", category: "Strategy", date: "2024-01-10" },
      { id: "3", title: "AI Adoption Best Practices", excerpt: "Key factors for successful implementation.", category: "Implementation", date: "2024-01-05" }
    ]
  }
};

export function useContent() {
  const [content, setContent] = useState<ContentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchContent = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/content');
      if (res.ok) {
        const data = await res.json();
        setContent(data);
      } else {
        setContent(defaultContent);
      }
    } catch {
      setContent(defaultContent);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  const getContent = useCallback((section: keyof ContentData) => {
    return content?.[section] || defaultContent[section] || null;
  }, [content]);

  return { content, isLoading, getContent, refresh: fetchContent };
}
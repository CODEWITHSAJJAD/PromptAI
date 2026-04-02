import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const COOKIE_NAME = 'admin_session';

const DATA_DIR = path.join(process.cwd(), 'data');
const CONTENT_FILE = path.join(DATA_DIR, 'content.json');

function sanitizeString(str: string): string {
  if (typeof str !== 'string') return '';
  // Removing HTML entity encoding to allow safe HTML spans and regular apostrophes/quotes
  return str.slice(0, 10000);
}

function sanitizeContent(obj: unknown): unknown {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj === 'string') return sanitizeString(obj);
  if (Array.isArray(obj)) return obj.map(sanitizeContent);
  if (typeof obj === 'object') {
    const sanitized: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj)) {
      sanitized[key] = sanitizeContent(value);
    }
    return sanitized;
  }
  return obj;
}

function isAuthenticated(request: NextRequest): boolean {
  const cookieStore = request.cookies;
  const session = cookieStore.get(COOKIE_NAME);
  return session?.value === 'authenticated';
}

async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
}

async function getContent() {
  try {
    await ensureDataDir();
    const data = await readFile(CONTENT_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return getDefaultContent();
  }
}

function getDefaultContent() {
  return {
    home: {
      hero: { tagline: "GET READY FOR AI", title: "Ready for AI?", subtitle: "We help organisations plan, introduce and adopt AI in practical ways." },
      promise: { title: "Our Promise", content: "We combine deep technical expertise with business acumen to deliver AI solutions." },
      whyDifferent: { title: "Why We're Different", items: [{ title: "Strategic Approach", description: "We don't just build AI, we integrate it." }, { title: "Practical Implementation", description: "Focus on tangible outcomes." }, { title: "Custom Solutions", description: "Every business is unique." }] },
      getInTouch: { title: "Get In Touch", subtitle: "Ready to transform your business with AI?" }
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
        { id: "1", client: "Enterprise Corp", title: "AI-Powered Customer Service", description: "Reduced support costs by 40%.", tags: ["AI", "Customer Service"] },
        { id: "2", client: "FinanceHub", title: "Predictive Analytics", description: "Improved forecasting accuracy by 60%.", tags: ["ML", "Finance"] },
        { id: "3", client: "HealthTech Plus", title: "Automated Medical Processing", description: "Reduced processing time by 85%.", tags: ["NLP", "Healthcare"] }
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
      footer: { email: "hello@promptai.com", phone: "+1 (555) 123-4567", address: "123 Innovation Drive", linkedin: "https://linkedin.com/company/promptai", twitter: "https://twitter.com/promptai" }
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
}

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const content = await getContent();
  return NextResponse.json(content);
}

export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    const body = await request.json();
    const sanitizedContent = sanitizeContent(body);
    await ensureDataDir();
    await writeFile(CONTENT_FILE, JSON.stringify(sanitizedContent, null, 2));
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 });
  }
}

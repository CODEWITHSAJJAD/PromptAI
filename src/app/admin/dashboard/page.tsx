'use client';

import { Container } from '@/components/ui/Container';
import { 
  Home, 
  Briefcase, 
  GraduationCap, 
  Users, 
  Mail, 
  BookOpen,
  Eye,
  Lightbulb
} from 'lucide-react';
import Link from 'next/link';

const pages = [
  { 
    href: '/admin/dashboard/home', 
    label: 'Home Page', 
    description: 'Edit hero, promise, why different, services preview, and more',
    icon: Home,
    preview: '/'
  },
  { 
    href: '/admin/dashboard/services', 
    label: 'Services', 
    description: 'Edit services hero, detail cards, adoption content, and team',
    icon: Briefcase,
    preview: '/services'
  },
  { 
    href: '/admin/dashboard/case-studies', 
    label: 'Case Studies', 
    description: 'Add, edit, or remove case studies',
    icon: BookOpen,
    preview: '/case-studies'
  },
  { 
    href: '/admin/dashboard/insights', 
    label: 'Insights', 
    description: 'Add, edit, or remove insights articles',
    icon: Lightbulb,
    preview: '/insights'
  },
  { 
    href: '/admin/dashboard/academy', 
    label: 'Academy', 
    description: 'Edit academy stats, benefits, timeline, and hero',
    icon: GraduationCap,
    preview: '/academy'
  },
  { 
    href: '/admin/dashboard/about', 
    label: 'About', 
    description: 'Edit about content, team members, and pillars',
    icon: Users,
    preview: '/about'
  },
  { 
    href: '/admin/dashboard/contact', 
    label: 'Contact', 
    description: 'Edit contact details, email, phone, address',
    icon: Mail,
    preview: '/contact'
  },
];

export default function DashboardHome() {
  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome to the Dashboard</h1>
        <p className="text-white/60">Manage your website content below</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => {
          const Icon = page.icon;
          return (
            <div
              key={page.href}
              className="bg-[#262424] rounded-xl p-6 border border-white/10 hover:border-[#FF3500]/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-[#FF3500]/10 rounded-lg">
                  <Icon className="text-[#FF3500]" size={24} />
                </div>
                <a
                  href={page.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Eye size={16} />
                  View
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{page.label}</h3>
              <p className="text-white/60 text-sm mb-4">{page.description}</p>
              
              <Link
                href={page.href}
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#FF3500] text-white rounded-lg hover:bg-[#FF3500]/90 transition-colors"
              >
                Edit {page.label}
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

'use client';

import { useAdmin } from '@/app/admin/context/AdminContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { 
  LayoutDashboard, 
  Home, 
  Briefcase, 
  GraduationCap, 
  Users, 
  Mail, 
  BookOpen,
  LogOut,
  Save,
  Lightbulb,
  Settings
} from 'lucide-react';

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/dashboard/home', label: 'Home', icon: Home },
  { href: '/admin/dashboard/services', label: 'Services', icon: Briefcase },
  { href: '/admin/dashboard/case-studies', label: 'Case Studies', icon: BookOpen },
  { href: '/admin/dashboard/insights', label: 'Insights', icon: Lightbulb },
  { href: '/admin/dashboard/academy', label: 'Academy', icon: GraduationCap },
  { href: '/admin/dashboard/about', label: 'About', icon: Users },
  { href: '/admin/dashboard/contact', label: 'Contact', icon: Mail },
  { href: '/admin/dashboard/settings', label: 'Settings', icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, logout, saveAllContent, content } = useAdmin();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/admin/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#262424]">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const handleSave = async () => {
    await saveAllContent();
    alert('Content saved successfully!');
  };

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <header className="bg-[#262424] border-b border-white/10 sticky top-0 z-50">
        <Container>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
              {content && (
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                  Saved
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-[#FF3500] text-white rounded-lg hover:bg-[#FF3500]/90 transition-colors"
              >
                <Save size={18} />
                Save Changes
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </Container>
      </header>

      <div className="flex">
        <aside className="w-64 bg-[#262424] border-r border-white/10 min-h-[calc(100vh-64px)]">
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#FF3500] text-white'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  {item.label}
                </a>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

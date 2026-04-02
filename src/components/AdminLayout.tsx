'use client';

import { AdminProvider } from '@/app/admin/context/AdminContext';

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminProvider>{children}</AdminProvider>;
}

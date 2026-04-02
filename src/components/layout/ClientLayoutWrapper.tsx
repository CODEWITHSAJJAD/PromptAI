'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  links: any[]; // Links passed down from server layout
}

export function ClientLayoutWrapper({ children, links }: ClientLayoutWrapperProps) {
  const pathname = usePathname();
  // Check if current route is part of the admin panel
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar links={links} />}
      <main>{children}</main>
      {!isAdminRoute && <Footer />}
    </>
  );
}

'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ContentData {
  home: Record<string, unknown>;
  services: Record<string, unknown>;
  caseStudies: Record<string, unknown>;
  academy: Record<string, unknown>;
  about: Record<string, unknown>;
  contact: Record<string, unknown>;
  insights: Record<string, unknown>;
}

interface AdminContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  content: ContentData | null;
  login: (password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  updateContent: (section: string, data: unknown) => void;
  saveAllContent: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState<ContentData | null>(null);

  useEffect(() => {
    checkAuth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/admin/auth');
      const data = await res.json();
      setIsAuthenticated(data.authenticated);
      if (data.authenticated) {
        fetchContent();
      }
    } catch {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchContent = async () => {
    try {
      const res = await fetch('/api/admin/content');
      if (!res.ok) {
        console.error('Failed to fetch content:', res.status);
        return;
      }
      const data = await res.json();
      setContent(data);
    } catch (error) {
      console.error('Failed to fetch content:', error);
    }
  };

  const login = async (password: string): Promise<boolean> => {
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      console.log('Login response:', data);
      if (data.success) {
        setIsAuthenticated(true);
        await fetchContent();
        return true;
      }
      console.log('Login failed:', data.error);
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    setIsAuthenticated(false);
    setContent(null);
  };

  const updateContent = (section: string, data: unknown): void => {
    if (!content) return;
    setContent({
      ...content,
      [section]: data,
    });
  };

  const saveAllContent = async () => {
    if (!content) return;
    await fetch('/api/admin/content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content),
    });
  };

  return (
    <AdminContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        content,
        login,
        logout,
        updateContent,
        saveAllContent,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
}

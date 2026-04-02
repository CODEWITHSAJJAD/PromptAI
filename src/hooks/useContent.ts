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

export function useContent() {
  const [content, setContent] = useState<ContentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchContent = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/content');
      if (res.ok) {
        const data = await res.json();
        setContent(data);
      }
    } catch {
      // Content not available, will use defaults
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  const getContent = useCallback((section: keyof ContentData) => {
    return content?.[section] || null;
  }, [content]);

  return { content, isLoading, getContent, refresh: fetchContent };
}

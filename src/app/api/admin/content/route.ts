import { NextRequest, NextResponse } from 'next/server';
import { getContent, saveContent } from '@/lib/supabase';

const COOKIE_NAME = 'admin_session';

function sanitizeString(str: string): string {
  if (typeof str !== 'string') return '';
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

export async function GET() {
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

    const { error } = await saveContent(sanitizedContent);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to save content' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Save error:', err);
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 });
  }
}
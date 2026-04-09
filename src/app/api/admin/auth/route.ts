import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const COOKIE_NAME = 'admin_session';
const ADMIN_TABLE = 'admin_config';
const DEFAULT_PASSWORD = 'abc@1234';

const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_ATTEMPTS = 5;

const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return true;
  }
  
  if (record.count >= MAX_ATTEMPTS) {
    return false;
  }
  
  record.count++;
  return true;
}

function getClientIP(request: NextRequest): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0] || 
         request.headers.get('x-real-ip') || 
         'unknown';
}

async function getAdminPassword(): Promise<string> {
  const { data, error } = await supabase
    .from(ADMIN_TABLE)
    .select('password')
    .eq('id', 'admin')
    .single();

  if (error || !data) {
    await supabase.from(ADMIN_TABLE).insert({ id: 'admin', password: DEFAULT_PASSWORD });
    return DEFAULT_PASSWORD;
  }

  return data.password;
}

export async function POST(request: NextRequest) {
  const ip = getClientIP(request);
  
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Too many attempts. Please try again later.' }, { status: 429 });
  }

  try {
    const body = await request.json();
    const password = body.password;
    
    if (!password || typeof password !== 'string') {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const storedPassword = await getAdminPassword();
    
    if (password === storedPassword) {
      const response = NextResponse.json({ success: true });
      response.cookies.set(COOKIE_NAME, 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24,
        path: '/',
      });
      return response;
    }
    
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const session = request.cookies.get(COOKIE_NAME);
  
  if (session?.value === 'authenticated') {
    return NextResponse.json({ authenticated: true });
  }
  
  return NextResponse.json({ authenticated: false });
}

export async function PUT(request: NextRequest) {
  const session = request.cookies.get(COOKIE_NAME);
  
  if (session?.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { currentPassword, newPassword } = body;
    
    if (!currentPassword || !newPassword || typeof newPassword !== 'string') {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const storedPassword = await getAdminPassword();
    
    if (currentPassword !== storedPassword) {
      return NextResponse.json({ error: 'Incorrect current password' }, { status: 401 });
    }

    await supabase
      .from(ADMIN_TABLE)
      .upsert({ id: 'admin', password: newPassword }, { onConflict: 'id' });

    return NextResponse.json({ success: true });
    
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
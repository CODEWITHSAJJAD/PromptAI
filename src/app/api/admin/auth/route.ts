import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const defaultPassword = process.env.ADMIN_PASSWORD || 'promptai2024';
const ADMIN_FILE_PATH = path.join(process.cwd(), 'data', 'admin.json');

const getAdminPassword = () => {
  try {
    if (fs.existsSync(ADMIN_FILE_PATH)) {
      const data = fs.readFileSync(ADMIN_FILE_PATH, 'utf-8');
      const json = JSON.parse(data);
      return json.password || defaultPassword;
    }
  } catch (error) {
    console.error('Error reading admin credentials:', error);
  }
  return defaultPassword;
};

const COOKIE_NAME = 'admin_session';
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

    if (password === getAdminPassword()) {
      const response = NextResponse.json({ success: true });
      response.cookies.set(COOKIE_NAME, 'authenticated', {
        httpOnly: true,
        secure: false,
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

    if (currentPassword !== getAdminPassword()) {
      return NextResponse.json({ error: 'Incorrect current password' }, { status: 401 });
    }

    // Save new password
    let adminData = { password: newPassword };
    try {
      if (fs.existsSync(ADMIN_FILE_PATH)) {
        const data = fs.readFileSync(ADMIN_FILE_PATH, 'utf-8');
        adminData = { ...JSON.parse(data), password: newPassword };
      }
    } catch {}

    fs.writeFileSync(ADMIN_FILE_PATH, JSON.stringify(adminData, null, 2));
    return NextResponse.json({ success: true });
    
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

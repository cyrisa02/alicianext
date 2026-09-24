// lib/auth.ts
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const SECRET = new TextEncoder().encode(
  process.env.ADMIN_JWT_SECRET || 'change-me-in-env-local-now'
);

export async function signToken() {
  const token = await new SignJWT({ admin: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('8h')
    .sign(SECRET);
  return token;
}

export async function verifyToken() {
  const cookieStore = cookies();
  const token = cookieStore.get('admin_auth')?.value;
  
  if (!token) return false;

  try {
    await jwtVerify(token, SECRET);
    return true;
  } catch {
    return false;
  }
}
// app/api/notes/route.ts
import { NextRequest, NextResponse } from 'next/server';

const API_URL = 'https://next-docs-api.onrender.com/notes';
const API_TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page') || '1';

  const res = await fetch(`${API_URL}?page=${page}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  const data = await res.json();
  return NextResponse.json(data);
}

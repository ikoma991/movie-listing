import { NextResponse } from 'next/server';
import Tmdb from '@/lib/Tmdb';

export async function GET() {
  try {
    const data = await Tmdb.fetchFromTMDB('/movie/now_playing');
    return NextResponse.json(data, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Unknown error occurred' }, { status: 500 });
  }
}
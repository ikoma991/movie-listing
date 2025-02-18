import { NextResponse } from 'next/server';
import Tmdb from '@/lib/Tmdb';

export async function GET(request: Request) {
    const searchParams = new URL(request.url).searchParams;
    const query = searchParams.get('query');
    
    try {   
        const data = await Tmdb.fetchFromTMDB(`/search/movie?query=${query}`);
        return NextResponse.json(data, { status: 200 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: 'Unknown error occurred' }, { status: 500 });
    }
}
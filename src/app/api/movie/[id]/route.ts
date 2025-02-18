import { NextRequest, NextResponse } from "next/server";
import Tmdb from '@/lib/Tmdb';

export async function GET(request: NextRequest , {params} : {
    params: Promise<{ id: string }>
}) {
    try {
        const id = (await params).id;
        const data = await Tmdb.fetchMovieDetails(Number(id));
        return NextResponse.json(data, { status: 200 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: 'Unknown error occurred' }, { status: 500 });
    }
}
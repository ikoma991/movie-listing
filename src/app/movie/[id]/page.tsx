import Tmdb from '@/lib/Tmdb'
import { redirect } from 'next/navigation';

export default async function MovieDetailsPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id;
    const data = await Tmdb.fetchMovieDetails(Number(id)).catch(() => {
        redirect('/')
    });
    
    return (
        <main>
            <img className='w-full h-[34rem] object-cover' src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="backdrop image" />
                  <div className='w-auto text-left flex flex-col lg:flex-row items-center justify-center gap-5 h-full p-8 -mt-48'>
                    <div className='w-72 p-5 bg-background rounded-3xl relative'>
                        <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} className='rounded-2xl' alt="Poster Image" />

                        <div className="flex flex-row items-center gap-1 absolute top-2 right-2 rounded-full bg-background p-3">
                            <img className="size-4 object-contain" src="../assets/img/star.svg" alt="Star Icon" />
                            <p className="font-bold text-base text-white">{data.vote_average ? data.vote_average.toFixed(1) : 'N/A'}</p>
                        </div>
                    </div>
                    <div className='space-y-5 w-full md:w-3/4 bg-background/70 p-8 rounded-3xl'>
                        <h1 className='text-left ml-0'>{data.title}</h1>

                        <div className="flex flex-row items-center gap-1">
                            <p className="font-bold text-base text-gray-200">Status: {data.status}</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <p className="font-bold text-base text-gray-200">Genre: {data.genres.map((genre) => genre.name).join(', ')}</p>
                        </div>

                        <div>
                            <h2 className='mb-3'>Overview:</h2>
                            <p className='text-gray-200'>{data.overview}</p>

                        </div>

                    </div>
                </div>
        </main>
    )
}
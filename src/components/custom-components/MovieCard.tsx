import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Movie } from '@/lib/types';
import Link from 'next/link';

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
    const {title, vote_average, poster_path, release_date, original_language} = movie
    return (
        <Link href={`/movie/${movie.id}`}>
            <Card className="p-5 rounded-2xl shadow-inner shadow-light-100/10 h-full">
                <CardContent>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                    className="rounded-lg w-full"
                />
                </CardContent>
                <CardFooter className="flex-col">
                    <h3 className="text-white font-bold text-base line-clamp-1">{title}</h3>

                    <div className="mt-2 flex flex-row items-center flex-wrap gap-2">
                        <div className="flex flex-row items-center gap-1">
                        <img className="size-4 object-contain" src="assets/img/star.svg" alt="Star Icon" />
                        <p className="font-bold text-base text-white">{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                        </div>

                        <span className=" text-sm text-gray-100">•</span>
                        <p className="capitalize text-gray-100 font-medium text-base">{original_language}</p>

                        <span className=" text-sm text-gray-100">•</span>
                        <p className="text-gray-100 font-medium text-base">
                        {release_date ? release_date.split('-')[0] : 'N/A'}
                        </p>
                    </div>
                </CardFooter>
        </Card>
    </Link>
    )
}

export default MovieCard
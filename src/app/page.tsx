import MovieCard from "@/components/custom-components/MovieCard";
import MovieCarousel from "@/components/custom-components/MovieCarousel";
import SearchBar from "@/components/custom-components/SearchBar";
import Tmdb from '@/lib/Tmdb';
import { Movie } from "@/lib/types";

export default async function Home() {
  const [movies, nowPlaying] = await Promise.all([
    Tmdb.fetchPopularMovies(),
    Tmdb.fetchNowPlayingMovies()
  ]);

  return (
    <main>
      <div className="px-5 py-12 xs:p-10 max-w-7xl mx-auto flex flex-col">
        <header className="text-center mb-12">
          <h1 className= "mb-9">
            Movie Listing
          </h1>
          <SearchBar />
        </header>
            <section className="space-y-6 mb-12">
              <h2 className="text-2xl font-semibold text-gray-200">Now Playing</h2>
              <MovieCarousel movies={nowPlaying} />
            </section>
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-200">Popular Movies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.map((movie: Movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </section>
      </div>
    </main>
  );
}

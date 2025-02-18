import MovieCard from "@/components/custom-components/MovieCard";
import Tmdb from "@/lib/Tmdb";
import { Movie } from "@/lib/types";
import SearchBar from "@/components/custom-components/SearchBar";


export default async function Search( {
    searchParams,
  }: {
    searchParams: { query?: string };
  }) {

    const {query = ''} = await searchParams;

    const searchResults: Movie[] = await Tmdb.searchMovie(query);


    return (
        <main>
            <div className="px-5 py-12 xs:p-10 max-w-7xl mx-auto flex flex-col">
                <header className="text-center mb-12">
                    <h1 className= "mb-9">
                        Movie Listing
                    </h1>
                    <SearchBar />
                </header>
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-200">
                    Search Results for &quot;{query}&quot;
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {searchResults.map((movie: Movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                    </div>
                </section>
          </div>
        </main>
    );
}
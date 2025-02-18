import MovieCard from "@/components/custom-components/MovieCard";
import Tmdb from '@/lib/Tmdb'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default async function Home() {
  const movies = await Tmdb.fetchPopularMovies();
  const nowPlaying = await Tmdb.fetchNowPlayingMovies();

  console.log(movies[0].id)

  return (
    <main>
      <div className="px-5 py-12 xs:p-10 max-w-7xl mx-auto flex flex-col">
        <header className="mb-5">
          <h1>
            Movie Listing
          </h1>
        </header>
        <section className="space-y-5 mb-5">

          <h2>Now playing Movies</h2>

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-full"
          >
            <CarouselContent>
              {nowPlaying.map((movie, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <MovieCard
                        movie={movie}
                        key={movie.id}
                      />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

        </section>
        <section className="space-y-9">

          <h2>Popular Movies</h2>
          <ul className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {
              movies.map((movie) => (
                <MovieCard
                  movie={movie}
                  key={movie.id}
                />
              ))
            }
          </ul>
        </section>
      </div>
    </main>
  );
}

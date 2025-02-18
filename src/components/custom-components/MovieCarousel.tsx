import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import { Movie } from "@/lib/types"
import MovieCard from "@/components/custom-components/MovieCard"



const MovieCarousel: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  return (
    <Carousel
    opts={{
      align: "start",
    }}
    className="w-full max-w-full"
  >
    <CarouselContent>
      {movies.map((movie, index) => (
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
  )
}

export default MovieCarousel
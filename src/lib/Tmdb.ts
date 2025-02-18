import { Movie, MovieDetails } from "@/lib/types";

export default class Tmdb {
  public static apiKey = process.env.TMDB_API_KEY;

  public static async fetchFromTMDB(endpoint: string) {
    const tmdbApiUrl = "https://api.themoviedb.org/3";
    const url = `${tmdbApiUrl}${endpoint}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to fetch data from TMDB");
    }

    return response.json();
  }

  public static async fetchPopularMovies(): Promise<Movie[]> {
    const res = await this.fetchFromTMDB("/movie/popular");
    return res.results || [];
  }

  public static async fetchNowPlayingMovies(): Promise<Movie[]> {
    const res = await this.fetchFromTMDB("/movie/now_playing");
    return res.results || [];
  }

  public static async fetchMovieDetails(id: number): Promise<MovieDetails> {
    const res = await this.fetchFromTMDB(`/movie/${id}`);
    return res;
  }

  public static async searchMovie(query: string): Promise<Movie[]> {
    const res = await this.fetchFromTMDB(`/search/movie?query=${query}`);
    return res.results || [];
  }
}

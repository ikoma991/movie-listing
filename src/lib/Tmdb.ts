import { Movie, MovieDetails } from "@/lib/types";

export default class Tmdb {

  public static baseUrl = process.env.VERCEL_ENV !=='local' ? (`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`) : process.env.NEXT_PUBLIC_VERCEL_URL;
  public static apiKey = process.env.TMDB_API_KEY;

  public static async fetchFromTMDB(endpoint: string) {
    const tmdbApiUrl = 'https://api.themoviedb.org/3';
    const url = `${tmdbApiUrl}${endpoint}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.apiKey}`
      }
    };

    const response = await fetch(url, options);
  
    if (!response.ok) {
      throw new Error('Failed to fetch data from TMDB');
    }
    
    return response.json();

  }


  public static async fetchPopularMovies(): Promise<Movie[]> {
    const res = await fetch(`${this.baseUrl}/api/movie/popular`);
    if (!res.ok) {
      throw new Error('Failed to fetch popular movies');
    }
  
    const data = await res.json();
    return data.results || [];
  }

  public static async fetchNowPlayingMovies(): Promise<Movie[]> {
    const res = await fetch(`${this.baseUrl}/api/movie/now-playing`);
    if (!res.ok) {
      throw new Error('Failed to fetch now playing movies');
    }
  
    const data = await res.json();
    return data.results || [];
  }

  public static async fetchMovieDetails(id: number): Promise<MovieDetails> {
    const res = await fetch(`${this.baseUrl}/api/movie/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch movie details');
    }
  
    const data = await res.json();
    return data;
  }

  public static async searchMovie(query: string): Promise<Movie[]> {
    const res = await fetch(`${this.baseUrl}/api/movie/search?query=${query}`);
    if (!res.ok) {
      throw new Error('Failed to search movies');
    }
  
    const data = await res.json();
    return data.results || [];
  }

}

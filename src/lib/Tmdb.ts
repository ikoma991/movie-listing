import { Movie } from "@/lib/types";

export default class Tmdb {

  public static baseUrl = process.env.APP_PUBLIC_BASE_URL;
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
    const res = await fetch(`${this.baseUrl}/api/tmdb/movie/popular`);
    if (!res.ok) {
      throw new Error('Failed to fetch popular movies');
    }
  
    const data = await res.json();
    return data.results || [];
  }

}

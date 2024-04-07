export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviesRes {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetailsRes {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: {
    name: string;
  }[];
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    name: string;
  }[];
  production_countries: {
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useRandomNumber } from "./utils";
import { MovieDetailsRes, MoviesRes } from "./types";
const API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
  },
});

// ENDPOINTS
const HOME_MOVIES = "discover/movie";
const SEARCH_MOVIE = "search/movie";
const MOVIE_DETAILS = (id: number) => `movie/${id}`;

// HOOKS
export const useHomeScreenMovies = (searchText?: string) => {
  const random = useRandomNumber(1, 500);
  const queryString = searchText?.length
    ? `${SEARCH_MOVIE}?query=${searchText}`
    : `${HOME_MOVIES}?page=${random}`;
  return useQuery({
    queryKey: ["home-screen-movies", searchText],
    queryFn: async ({ signal }) =>
      (await API.get<MoviesRes>(queryString, { signal })).data,
    refetchOnMount: false,
  });
};

export const useMovieDetails = (id: number) => {
  return useQuery({
    queryKey: ["movie-details", id],
    queryFn: async ({ signal }) =>
      (await API.get<MovieDetailsRes>(MOVIE_DETAILS(id), { signal })).data,
  });
};

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useRandomNumber } from "./utils";
import { MoviesRes } from "./types";
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

// HOOKS
export const useHomeScreenMovies = (searchText?: string) => {
  const random = useRandomNumber(1, 500);
  console.log(random);
  const queryString = searchText?.length
    ? `${SEARCH_MOVIE}?query=${searchText}`
    : `${HOME_MOVIES}?page=${random}`;
  return useQuery({
    queryKey: ["home-screen-movies", searchText],
    queryFn: async ({ signal }) =>
      (await API.get<MoviesRes>(queryString, { signal })).data,
  });
};

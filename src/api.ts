import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getRandomNumber } from "./utils";
const API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
  },
});

// ENDPOINTS
const HOME_MOVIES = "discover/movie";

export const useHomeScreenMovies = () => {
  return useQuery({
    queryKey: ["home-screen-movies"],
    queryFn: async () =>
      (await API.get(`${HOME_MOVIES}?page=${getRandomNumber(1, 500)}`)).data,
  });
};

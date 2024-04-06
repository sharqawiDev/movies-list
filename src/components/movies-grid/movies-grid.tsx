import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Movie } from "../../types";
import { Loader } from "../loader";
import "./movies-grid.scss";
import { shortenText } from "../../utils";

type MoviesGridProps = {
  movies: Movie[] | undefined;
  isLoading: boolean;
};
type MovieCardProps = {
  movie: Movie;
};
export const MoviesGrid = ({ movies, isLoading }: MoviesGridProps) => {
  return (
    <div className="movies-grid">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!movies?.length && <p>No movies found...</p>}
          {movies?.slice(0, 10)?.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </>
      )}
    </div>
  );
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const posterPath = movie?.poster_path
    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    : "https://placehold.co/600x900?text=No+Photo";
  return (
    <div className="movie-card">
      {!imageLoaded && <Loader />}
      <img
        src={posterPath}
        onLoad={() => setImageLoaded(true)}
        loading="lazy"
      />
      <div className="movie-card__details">
        <p className="movie-title">
          <a>{movie.title}</a>
        </p>
        <p className="movie-release-date">{movie.release_date}</p>
        <p className="movie-vote">
          {parseFloat(`${movie.vote_average}`).toFixed(1)}
          <FaStar />({movie.vote_count})
        </p>
        <p className="movie-description" title={movie.overview}>
          {shortenText(movie.overview || "No description available")}
        </p>
      </div>
    </div>
  );
};

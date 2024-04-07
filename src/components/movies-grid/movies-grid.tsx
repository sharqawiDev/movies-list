import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Movie } from "../../types";
import { Loader } from "../loader";
import "./movies-grid.scss";
import { shortenText } from "../../utils";
import { useHomeScreenMovies } from "../../api";
import { useNavigate, useSearchParams } from "react-router-dom";

type MovieCardProps = {
  movie: Movie;
};
export const MoviesGrid = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [params, _] = useSearchParams();
  const { data, isLoading } = useHomeScreenMovies(params.get("query") || "");
  return (
    <div className="movies-grid">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!data?.results?.length && <p>No movies found...</p>}
          {data?.results?.slice(0, 10)?.map((movie) => (
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
  const navigate = useNavigate();
  const goToMovieDetails = () => navigate(`/movies/${movie.id}`);
  return (
    <div className="movie-card">
      {!imageLoaded && <Loader />}
      <img
        src={posterPath}
        onLoad={() => setImageLoaded(true)}
        loading="lazy"
        onClick={goToMovieDetails}
      />
      <div className="movie-card__details">
        <p className="movie-title">
          <a onClick={goToMovieDetails}>{movie.title}</a>
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

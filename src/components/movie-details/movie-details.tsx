import { useParams } from "react-router-dom";
import { FaImdb, FaStar } from "react-icons/fa";
import "./movie-details.scss";
import { useMovieDetails } from "../../api";
import { Loader } from "../loader";

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie, isLoading } = useMovieDetails(Number(id));
  return isLoading ? (
    <Loader />
  ) : (
    <div className="movie-details">
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie?.title}
        />
      </div>
      <div className="info">
        <h1>{movie?.title}</h1>
        <p className="movie-vote">
          {parseFloat(`${movie?.vote_average}`).toFixed(1)}
          <FaStar />({movie?.vote_count})
        </p>
        <p className="tagline">{movie?.tagline}</p>
        <p className="overview">{movie?.overview}</p>
        <p>
          <strong>Release Date:</strong> {movie?.release_date}
        </p>
        <p>
          <strong>Runtime:</strong> {movie?.runtime} minutes
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie?.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Production Companies:</strong>{" "}
          {movie?.production_companies
            .map((company) => company.name)
            .join(", ")}
        </p>
        <p>
          <strong>Production Countries:</strong>{" "}
          {movie?.production_countries
            .map((country) => country.name)
            .join(", ")}
        </p>
        <p>
          <a
            href={`https://www.imdb.com/title/${movie?.imdb_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaImdb size={40} />
          </a>
        </p>
        <p>
          <strong>Budget:</strong> ${movie?.budget.toLocaleString()}
        </p>
        <p>
          <strong>Revenue:</strong> ${movie?.revenue.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export { MovieDetails };

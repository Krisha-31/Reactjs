import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.source}/${movie.id}`} className="movie-card">
      <div className="poster-wrap">
        <img
          src={movie.poster}
          alt={movie.title}
          onError={(e) => {
            e.target.src = "https://placehold.co/300x450/1c1c1c/ff6a00?text=No+Poster";
          }}
        />
        <span className="badge-lang">{movie.language}</span>
        <span className="badge-rating">&#9733; {movie.rating}</span>
      </div>
      <p className="movie-title">{movie.title}</p>
    </Link>
  );
}

export default MovieCard;

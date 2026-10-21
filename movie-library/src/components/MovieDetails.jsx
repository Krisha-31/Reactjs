import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../redux/actions";

function MovieDetails() {
  const { source, id } = useParams();
  const dispatch = useDispatch();
  const { selected: m, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(source, id));
  }, [dispatch, source, id]);

  if (loading) return <div className="text-center py-5"><div className="spinner-border text-warning"></div></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!m || String(m.id) !== String(id)) return null;

  return (
    <>
      <Link to="/" className="back-link">&larr; Back</Link>
      <div className="row mt-3 g-4">
        <div className="col-md-4 col-lg-3">
          <img
            className="detail-poster"
            src={m.poster}
            alt={m.title}
            onError={(e) => {
              e.target.src = "https://placehold.co/300x450/1c1c1c/ff6a00?text=No+Poster";
            }}
          />
        </div>
        <div className="col-md-8 col-lg-9">
          <h2 className="detail-title">{m.title}</h2>
          <div className="mb-3">
            <span className="tag">{m.genre}</span>
            <span className="tag">{m.language}</span>
            <span className="tag">&#9733; {m.rating}</span>
          </div>
          <p><b>Release Date:</b> {m.releaseDate || "-"}</p>
          <p><b>Cast:</b> {m.cast}</p>
          <p className="text-light-emphasis">{m.description}</p>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;

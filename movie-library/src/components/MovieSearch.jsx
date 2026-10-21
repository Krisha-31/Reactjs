import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchMyMovies } from "../redux/actions";
import MovieCard from "./MovieCard.jsx";

function MovieSearch() {
  const [params, setParams] = useSearchParams();
  const [text, setText] = useState(params.get("q") || "");
  const dispatch = useDispatch();
  const { list, myList, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    const t = setTimeout(() => {
      dispatch(fetchMovies(text));
      dispatch(fetchMyMovies(text));
      setParams(text ? { q: text } : {});
    }, 400);
    return () => clearTimeout(t);
  }, [text, dispatch, setParams]);

  useEffect(() => {
    setText(params.get("q") || "");
  }, [params]);

  const all = [...myList, ...list];

  return (
    <>
      <h4 className="section-title">Search Movies</h4>
      <input
        className="form-control search-input mb-4"
        placeholder="Movie Name here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {loading && <div className="text-center py-4"><div className="spinner-border text-warning"></div></div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && all.length === 0 && <p className="text-secondary">Not Found!</p>}

      <div className="movie-grid">
        {all.map((m) => (
          <MovieCard key={m.source + m.id} movie={m} />
        ))}
      </div>
    </>
  );
}

export default MovieSearch;

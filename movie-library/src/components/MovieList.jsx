import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchMyMovies } from "../redux/actions";
import MovieCard from "./MovieCard.jsx";

const LANGUAGES = ["All", "Hindi", "Gujarati", "English", "Telugu", "Kannada"];

function MovieList() {
  const dispatch = useDispatch();
  const { list, myList, loading, error } = useSelector((state) => state.movies);
  const [lang, setLang] = useState("All");

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchMyMovies());
  }, [dispatch]);

  const filter = (arr) => (lang === "All" ? arr : arr.filter((m) => m.language === lang));
  const popular = filter(list);
  const mine = filter(myList);

  return (
    <>
      <div className="chips mb-4">
        {LANGUAGES.map((l) => (
          <button key={l} className={`chip ${lang === l ? "active" : ""}`} onClick={() => setLang(l)}>
            {l}
          </button>
        ))}
      </div>

      {loading && <div className="text-center py-5"><div className="spinner-border text-warning"></div></div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {mine.length > 0 && (
        <>
          <h4 className="section-title">Added Movies</h4>
          <div className="movie-grid mb-5">
            {mine.map((m) => <MovieCard key={"l" + m.id} movie={m} />)}
          </div>
        </>
      )}

      <h4 className="section-title">Popular Movies</h4>
      {!loading && !error && popular.length === 0 && <p className="text-secondary">Aa category ma koi movie nathi.</p>}
      <div className="movie-grid">
        {popular.map((m) => <MovieCard key={"t" + m.id} movie={m} />)}
      </div>
    </>
  );
}

export default MovieList;

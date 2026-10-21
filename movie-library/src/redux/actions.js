import axios from "axios";

export const API = "http://localhost:3001";

const TMDB = "https://api.themoviedb.org/3";
const KEY = "31fc3209110685364b6bc4b15bedb85b";
const IMG = "https://image.tmdb.org/t/p/w500";

const LANGS = { hi: "Hindi", gu: "Gujarati", en: "English", te: "Telugu", kn: "Kannada", ta: "Tamil", ml: "Malayalam" };

const fromTmdb = (m) => ({
  id: m.id,
  source: "tmdb",
  title: m.title,
  poster: m.poster_path ? IMG + m.poster_path : "",
  language: LANGS[m.original_language] || (m.original_language || "").toUpperCase(),
  rating: m.vote_average ? Number(m.vote_average.toFixed(1)) : 0,
  releaseDate: m.release_date || "",
  genre: m.genres ? m.genres.map((g) => g.name).join(", ") : "",
  cast: m.credits ? m.credits.cast.slice(0, 6).map((c) => c.name).join(", ") : "",
  description: m.overview || "",
});

const fromLocal = (m) => ({ ...m, source: "local" });


export const fetchMovies = (search = "") => async (dispatch) => {
  dispatch({ type: "MOVIES_REQUEST" });
  try {
    const url = search
      ? `${TMDB}/search/movie?api_key=${KEY}&query=${encodeURIComponent(search)}`
      : `${TMDB}/movie/popular?api_key=${KEY}`;
    const { data } = await axios.get(url);
    dispatch({ type: "MOVIES_SUCCESS", payload: data.results.map(fromTmdb) });
  } catch (e) {
    dispatch({ type: "MOVIES_FAIL", payload: "API not Loaded" });
  }
};

export const fetchMyMovies = (search = "") => async (dispatch) => {
  try {
    const url = search ? `${API}/movies?q=${encodeURIComponent(search)}` : `${API}/movies?_sort=id&_order=desc`;
    const { data } = await axios.get(url);
    dispatch({ type: "MY_MOVIES_SUCCESS", payload: data.map(fromLocal) });
  } catch (e) {
    dispatch({ type: "MY_MOVIES_SUCCESS", payload: [] });
  }
};

export const fetchMovieDetails = (source, id) => async (dispatch) => {
  dispatch({ type: "MOVIES_REQUEST" });
  try {
    if (source === "tmdb") {
      const { data } = await axios.get(`${TMDB}/movie/${id}?api_key=${KEY}&append_to_response=credits`);
      dispatch({ type: "MOVIE_DETAIL_SUCCESS", payload: fromTmdb(data) });
    } else {
      const { data } = await axios.get(`${API}/movies/${id}`);
      dispatch({ type: "MOVIE_DETAIL_SUCCESS", payload: fromLocal(data) });
    }
  } catch (e) {
    dispatch({ type: "MOVIES_FAIL", payload: "Movie malyi nahi." });
  }
};

export const addMovie = (movie) => async (dispatch) => {
  const { data } = await axios.post(`${API}/movies`, movie);
  dispatch({ type: "MOVIE_ADDED", payload: fromLocal(data) });
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${API}/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    );
    if (data.length === 0) {
      dispatch({ type: "AUTH_FAIL", payload: "Email or Password Invalid" });
      return false;
    }
    localStorage.setItem("user", JSON.stringify(data[0]));
    dispatch({ type: "AUTH_SUCCESS", payload: data[0] });
    return true;
  } catch (e) {
    dispatch({ type: "AUTH_FAIL", payload: "Server not started" });
    return false;
  }
};

export const registerUser = (user) => async (dispatch) => {
  try {
    const exist = await axios.get(`${API}/users?email=${encodeURIComponent(user.email)}`);
    if (exist.data.length > 0) {
      dispatch({ type: "AUTH_FAIL", payload: "email is already register" });
      return false;
    }
    const { data } = await axios.post(`${API}/users`, user);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch({ type: "AUTH_SUCCESS", payload: data });
    return true;
  } catch (e) {
    dispatch({ type: "AUTH_FAIL", payload: "Server is not start." });
    return false;
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: "LOGOUT" });
};

export const updateProfilePhoto = (photo) => async (dispatch, getState) => {
  const user = getState().auth.user;
  const { data } = await axios.patch(`${API}/users/${user.id}`, { photo });
  localStorage.setItem("user", JSON.stringify(data));
  dispatch({ type: "AUTH_SUCCESS", payload: data });
};

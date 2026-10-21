import { combineReducers } from "redux";

const movieState = { list: [], myList: [], selected: null, loading: false, error: "" };

const movies = (state = movieState, action) => {
  switch (action.type) {
    case "MOVIES_REQUEST":
      return { ...state, loading: true, error: "" };
    case "MOVIES_SUCCESS":
      return { ...state, loading: false, list: action.payload };
    case "MOVIE_DETAIL_SUCCESS":
      return { ...state, loading: false, selected: action.payload };
    case "MY_MOVIES_SUCCESS":
      return { ...state, myList: action.payload };
    case "MOVIE_ADDED":
      return { ...state, myList: [action.payload, ...state.myList] };
    case "MOVIES_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const saved = localStorage.getItem("user");
const authState = { user: saved ? JSON.parse(saved) : null, error: "" };

const auth = (state = authState, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return { user: action.payload, error: "" };
    case "AUTH_FAIL":
      return { ...state, error: action.payload };
    case "LOGOUT":
      return { user: null, error: "" };
    default:
      return state;
  }
};

export default combineReducers({ movies, auth });

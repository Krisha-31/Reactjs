import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import MovieList from "./components/MovieList.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import MovieSearch from "./components/MovieSearch.jsx";
import Login, { Profile } from "./components/Login.jsx";
import AddMovie from "./components/AddMovie.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/search" element={<MovieSearch />} />
          <Route path="/movie/:source/:id" element={<MovieDetails />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-movie"
            element={
              <PrivateRoute>
                <AddMovie />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      <footer className="site-footer text-center py-3">CineVerse &copy; 2026</footer>
    </>
  );
}

export default App;
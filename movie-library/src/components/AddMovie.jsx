import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/actions";

const empty = {
  title: "",
  poster: "",
  genre: "Action",
  language: "Hindi",
  rating: "",
  releaseDate: "",
  cast: "",
  description: "",
};

function AddMovie() {
  const [form, setForm] = useState(empty);
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addMovie({ ...form, rating: Number(form.rating) }));
      setMsg("Movie add thai gai!");
      setForm(empty);
      setTimeout(() => navigate("/"), 800);
    } catch (err) {
      setMsg("Error: movie add na thai. json-server chalu chhe?");
    }
  };

  return (
    <div className="form-box mx-auto" style={{ maxWidth: 620 }}>
      <h4 className="section-title">Add New Movie</h4>
      {msg && <div className="alert alert-warning py-2">{msg}</div>}

      <form onSubmit={onSubmit}>
        <input className="form-control mb-3" name="title" placeholder="Movie title" value={form.title} onChange={onChange} required />
        <input className="form-control mb-3" name="poster" placeholder="Poster image URL" value={form.poster} onChange={onChange} required />

        <div className="row">
          <div className="col-6 mb-3">
            <select className="form-select" name="genre" value={form.genre} onChange={onChange}>
              {["Action", "Comedy", "Drama", "Thriller", "Romance", "Horror", "Sci-Fi"].map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </div>
          <div className="col-6 mb-3">
            <select className="form-select" name="language" value={form.language} onChange={onChange}>
              {["Hindi", "Gujarati", "English", "Telugu", "Kannada"].map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>
          <div className="col-6 mb-3">
            <input className="form-control" type="number" step="0.1" min="0" max="10" name="rating" placeholder="Rating (0-10)" value={form.rating} onChange={onChange} required />
          </div>
          <div className="col-6 mb-3">
            <input className="form-control" type="date" name="releaseDate" value={form.releaseDate} onChange={onChange} required />
          </div>
        </div>

        <input className="form-control mb-3" name="cast" placeholder="Cast" value={form.cast} onChange={onChange} required />
        <textarea className="form-control mb-3" rows="3" name="description" placeholder="Description" value={form.description} onChange={onChange} required />
        <button className="btn btn-brand w-100">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;

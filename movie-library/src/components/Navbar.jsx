import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions";

export function Avatar({ user, size = 34 }) {
  const style = { width: size, height: size, fontSize: size / 2.2 };
  if (user.photo) {
    return <img className="avatar" style={style} src={user.photo} alt={user.name} />;
  }
  return (
    <div className="avatar avatar-letter" style={style}>
      {user.name.charAt(0).toUpperCase()}
    </div>
  );
}

function Navbar() {
  const [q, setQ] = useState("");
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();
    if (q.trim()) navigate(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  const onLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg site-nav sticky-top">
      <div className="container">
        <Link className="navbar-brand brand" to="/">
          Cine<span>Verse</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/" end>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/search">Search</NavLink></li>
            {user && (
              <li className="nav-item"><NavLink className="nav-link" to="/add-movie">+ Add Movie</NavLink></li>
            )}
          </ul>

          <form className="d-flex me-lg-3 my-2 my-lg-0" onSubmit={onSearch}>
            <input
              className="form-control search-input"
              placeholder="Search movies..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <button className="btn btn-brand ms-2">Go</button>
          </form>

          {user ? (
            <div className="d-flex align-items-center gap-2">
              <Link to="/profile" className="d-flex align-items-center gap-2 user-link">
                <Avatar user={user} />
                <span className="small">{user.name}</span>
              </Link>
              <button className="btn btn-outline-light btn-sm" onClick={onLogout}>Logout</button>
            </div>
          ) : (
            <Link className="btn btn-brand btn-sm p-2 px-4" to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

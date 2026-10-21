import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser, updateProfilePhoto } from "../redux/actions";
import { Avatar } from "./Navbar.jsx";

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const ok = isRegister
      ? await dispatch(registerUser(form))
      : await dispatch(loginUser(form.email, form.password));
    if (ok) navigate("/");
  };

  return (
    <div className="form-box mx-auto">
      <h4 className="section-title">{isRegister ? "Register" : "Login"}</h4>
      {error && <div className="alert alert-danger py-2">{error}</div>}

      <form onSubmit={onSubmit}>
        {isRegister && (
          <input className="form-control mb-3" name="name" placeholder="Name" value={form.name} onChange={onChange} required />
        )}
        <input className="form-control mb-3" type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} required />
        <input className="form-control mb-3" type="password" name="password" placeholder="Password" value={form.password} onChange={onChange} required />
        <button className="btn btn-brand w-100">{isRegister ? "Register" : "Login"}</button>
      </form>

      <p className="text-secondary small mt-3 mb-0">
        {isRegister ? "Account Valid?" : "Account Not Valid?"}{" "}
        <span className="switch-link" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Login" : "Register"}
        </span>
      </p>
      {!isRegister && <p className="text-secondary small mt-2 mb-0">Demo: admin@gmail.com / 123456</p>}
    </div>
  );
}

const resizeImage = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const size = 200;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const side = Math.min(img.width, img.height);
        const sx = (img.width - side) / 2;
        const sy = (img.height - side) / 2;
        canvas.getContext("2d").drawImage(img, sx, sy, side, side, 0, 0, size, size);
        resolve(canvas.toDataURL("image/jpeg", 0.8));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });

export function Profile() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");

  const onFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setMsg("image file only allowed");
      return;
    }
    try {
      const photo = await resizeImage(file);
      await dispatch(updateProfilePhoto(photo));
      setMsg("Photo saveed!");
    } catch (err) {
      setMsg("Photo don't saved.");
    }
  };

  const onRemove = async () => {
    try {
      await dispatch(updateProfilePhoto(""));
      setMsg("Photo is removed");
    } catch (err) {
      setMsg("Error !!");
    }
  };

  return (
    <div className="form-box mx-auto text-center">
      <h4 className="section-title text-start">My Profile</h4>
      {msg && <div className="alert alert-warning py-2">{msg}</div>}

      <Avatar user={user} size={120} />
      <h5 className="mt-3 mb-0">{user.name}</h5>
      <p className="text-secondary">{user.email}</p>

      <label className="btn btn-brand w-100 mb-2">
        select photo
        <input type="file" accept="image/*" hidden onChange={onFile} />
      </label>
      {user.photo && (
        <button className="btn btn-outline-light w-100" onClick={onRemove}>
          Photo is removed
        </button>
      )}
    </div>
  );
}

export default Login;

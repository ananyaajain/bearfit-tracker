import React, { useState } from "react";
import Menu from './Menu';
import { BrowserRouter as Router, Routes, Route, Link, useParams, Navigate, useNavigate} from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == "bob@gmail.com" && password == "password123") {
      setIsLoggedIn(true);
    }
    // backend connections
  };

  if (isLoggedIn) {
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email Address:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Video from "../layout/Video";
import Mask from "../layout/Mask";
import Container from "../layout/Container";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <>
      <div className="form-container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user"></i>Sign Into Your Account
        </p>
        <form onSubmit={onSubmit} className="form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              minLength="6"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>

          <input type="submit" value="Login" className="btn btn-primary" />
        </form>
        <p className="my-1">
          Don't' have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default Login;

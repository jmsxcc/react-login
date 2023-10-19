import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>LOGIN</h1>
      {error && <alert className="alert">{error}</alert>}
      <form onSubmit={handleSubmit}>
        <div className="box">
          <i className="icon">
            <AiOutlineMail />
          </i>
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="box">
          <i className="icon">
            <AiOutlineLock />
          </i>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button type="submit" className="btn" id="btn-login">
            Login
          </button>
        </div>
      </form>
      <div>
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

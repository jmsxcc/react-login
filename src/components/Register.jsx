import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();

    if (!email) {
      setError("Please enter a email.");
      return;
    }

    if (!password) {
      setError("Please enter a password.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>REGISTER</h1>
      {error && <div className="alert">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="box">
          <i className="icon">
            <AiOutlineMail />
          </i>
          <input
            type="email"
            placeholder="Email"
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

        <div className="box">
          <i className="icon">
            <AiOutlineLock />
          </i>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div>
          <button type="submit" className="btn">
            Sign Up
          </button>
        </div>
      </form>
      <div>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;

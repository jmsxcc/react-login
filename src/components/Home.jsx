import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Img from "../assets/react.svg";

function Home() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Profile</h1>
      <p className="f-home">Hi, {user.email}</p>
      <div>
        <img src={Img} alt="" />
      </div>
      <button onClick={handleLogout} className="btn" id="btn-logout">
        Logout
      </button>
    </div>
  );
}

export default Home;

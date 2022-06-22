import React from "react";
import "./Navigator.scss";
import { Link } from "react-router-dom";

const Navigator = ({ authenticated, logoutUser }) => {
  return (
    <nav>
      <ul>
       <li>
       <img src="https://www.laps4.com/foro/trofeos/psnjuegos/2500.PNG" alt="logo"/>
       </li>
     

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {authenticated ? (
          <li>
            <button onClick={logoutUser}>Logout</button>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigator;
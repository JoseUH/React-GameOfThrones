import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss"

const Login = ({ loginUser }) => {
  //Definimos un estado inicial de nuestro formulario
  const INITIAL_STATE = {
    email: "",
    password: "",
  };

  const [formUser, setFormUser] = useState(INITIAL_STATE);

  const handleInput = (ev) => {
    const { id, value } = ev.target;
    setFormUser({ ...formUser, [id]: value });
  };

  const navigate = useNavigate();
 
  const onSubmit = (ev) => {
    ev.preventDefault();
 
    const { email, password } = formUser;
    loginUser({ email, password });
   
    navigate("/gallery");
  };

  return (
    <div className="form">
      <h2>Login</h2>
      <p>login for see the gallery</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        
        <input
          type="text"
          id="email"
          value={formUser.email}
          onChange={handleInput}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formUser.password}
          onChange={handleInput}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

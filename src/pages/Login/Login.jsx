import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//Importamos la funcion loginUser desde App mediante prop
const Login = ({ loginUser }) => {
  //Definimos un estado inicial de nuestro formulario
  const INITIAL_STATE = {
    email: "",
    password: "",
  };

  //Definimos nuestra variable de estado formUser para generar el usuario que le pasaremos a la funcion login
  const [formUser, setFormUser] = useState(INITIAL_STATE);

  //Con esta funcion controlaremos el poder recuperar de cada uno de los inputs mediante su value y su id y setearlo en formUser.
  const handleInput = (ev) => {
    const { id, value } = ev.target;
    setFormUser({ ...formUser, [id]: value });
  };
  //Almacenamos el navegador de react router dom
  const navigate = useNavigate();
  //La funcion onSubmit almacenara en una variable email el valor de formUser.email y en una variable llamada password el valor de formUser.password una vez seteados para poder pasarselo como argumentos a loginUser, la funcion que nos hemos traido por prop de App.
  const onSubmit = (ev) => {
    ev.preventDefault();
    //Tenemos que sacar email y password por separado porque loginUser se espera dos argumentos y no le gusta que le pase formUser.email o formUser.passwords
    const { email, password } = formUser;
    loginUser({ email, password });
    //Al hacer submit me redirige a la ruta protegida, en este caso: gallery
    navigate("/gallery");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        {/*  A estos inputs le indicamos un id que corresponda con los campos de mi objeto formUser y ademas que al cambiar con el onChange ejecuten el handleInput para ir seteando los valores de cada uno */}
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

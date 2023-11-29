import React, { useState } from "react";

function Login() {
  return (
    <>
      <section className="containerUser">
        <section className="containerLogin">
          <div className="imgUser">
            <img src="src/assets/img/usuario.png" alt="" />
          </div>
          <h2>Iniciar sesion</h2>
          <form className="form">
            <label htmlFor="user">Usuario</label>
            <input type="text" id="user" />
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="password" />
            <button type="button">Ingresar</button>
          </form>
        </section>
      </section>
    </>
  );
}

export default Login;

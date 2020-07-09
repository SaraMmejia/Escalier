import React, { useState, useRef } from 'react';
import SincuadrosN from '../assets/SincuadrosN.png';
import './InitialForms.css';

const InitialForms = ({
  status,
  select,
  setName,
  setUserName,
  setEmail,
  setPassword,
}) => {
  const nameRef = React.useRef(null);
  const userNameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const agregarDatos = () => {
    setName(nameRef.current.value);
    setUserName(userNameRef.current.value);
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.vulue);
  };
  return (
    <div>
      <div className="sideRight-Logo">
        <img
          src={SincuadrosN}
          className="initialRight-Logo"
          alt="background-Logo"
        ></img>
      </div>
      <div>
        <button onClick={() => select(false)}>Entrar</button>
        <button onClick={() => select(true)}>Registrarse</button>
      </div>
      {/* Registrarse */}
      <input ref={nameRef} name="userName" type="text" placeholder="Nombre" />
      <input
        ref={userNameRef}
        name="userLastName"
        type="text"
        placeholder="Apellido"
      />
      <br />
      {/* Entrar */}
      {status && (
        <>
          <input
            ref={emailRef}
            name="email"
            type="email"
            placeholder="Direccion de email"
          />
          <br />
          <input
            ref={passwordRef}
            name="password"
            type="password"
            placeholder="Password"
          />
          <br />
        </>
      )}
      <button onClick={agregarDatos}>Enviar</button>
    </div>
  );
};

export default InitialForms;

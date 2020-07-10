import React, { useState, useRef } from 'react';
import './InitialForms.css';
import SincuadrosN from '../assets/SincuadrosN.png';

const InitialForms = ({
  status,
  select,
  setName,
  setUserName,
  setEmail,
  setPassword,
  loading,
  error,
  access,
}) => {
  const nameRef = React.useRef(null);
  const userNameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(true);
  const errorRef = React.useRef(true);

  const agregarDatos = () => {
    setName(nameRef.current.value);
    setUserName(userNameRef.current.value);
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.vulue);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div className="sideRight">
      <div className="sideRight-Logo">
        <img
          src={SincuadrosN}
          className="initialRight-Logo"
          alt="background-Logo"
        ></img>
      </div>
      <div className="access-Buttons">
        <button className="buttonE" onClick={() => select(false)}>
          Entrar
        </button>
        <button className="buttonR" onClick={() => select(true)}>
          Regístrate
        </button>
      </div>
      {/* Registrarse */}
      <div className="access-Forms">
        <input
          ref={emailRef}
          name="email"
          type="email"
          className="formE"
          placeholder="UserName - Dirección de Email"
        />
        <br />
        <input
          ref={passwordRef}
          name="password"
          type="password"
          className="formE"
          placeholder="Contraseña"
        />
        <br />

        {/* Entrar */}
        {status && (
          <>
            <input
              ref={nameRef}
              name="name"
              type="text"
              className="formR"
              placeholder="Nombre"
            />
            <br />
            <input
              ref={userNameRef}
              name="userName"
              type="text"
              className="formR"
              placeholder="UserName"
              registry={true}
            />

            <br />
          </>
        )}
        <p className="olvidaste">¿Olvidaste tu contraseña?</p>
        <button className="addButton">{access ? 'Crear' : 'Regístrate'}</button>
      </div>
    </div>
  );
};

export default InitialForms;

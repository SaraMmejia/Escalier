import React from 'react';
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
  handleCreate,
  handleLogin,
}) => {
  const nameRef = React.useRef(null);
  const userNameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(true);

  // const agregarDatos = () => {
  //   setName(nameRef.current.value);
  //   setUserName(userNameRef.current.value);
  //   setEmail(emailRef.current.value);
  //   setPassword(passwordRef.current.vulue);
  // };

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
      {/* Entrar */}
      <div className="access-Forms">
        <input
          ref={emailRef}
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="formE"
          placeholder="Dirección De Email"
        />
        <br />
        <input
          ref={passwordRef}
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="formE"
          placeholder="Contraseña"
        />
        <br />

        {/* Registrarse */}
        {status && (
          <>
            <input
              ref={nameRef}
              name="name"
              type="text"
              className="formR"
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              ref={userNameRef}
              name="userName"
              type="text"
              className="formR"
              placeholder="UserName"
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
          </>
        )}
        <p className="olvidaste">¿Olvidaste tu contraseña?</p>
        {status ? (
          <button className="addButton" onClick={(e) => handleCreate(e)}>
            Regístrate
          </button>
        ) : (
          <button className="addButton" onClick={(e) => handleLogin(e)}>
            Entrar
          </button>
        )}
      </div>
    </div>
  );
};

export default InitialForms;

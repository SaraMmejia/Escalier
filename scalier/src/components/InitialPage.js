import React, { useState, useRef, useEffect } from 'react';
import './InitialPage.css';
import SincuadrosN from '../assets/SincuadrosN.png';
import InitialForms from './InitialForms';
import { Link } from 'react-router-dom';

import axios from 'axios';

function InitialPage(props) {
  const [select, setSelect] = useState(false);
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    axios({
      method: 'POST',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/signin',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        password,
        email,
      },
    })
      .then((data) => {
        localStorage.setItem('token', data.data.token);
        props.history.push('/home');
      })
      .catch((error) => {
        console.log('Respondio con error');
      });
  };

  const handleCreate = (e) => {
    e.preventDefault();

    axios({
      method: 'POST',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/users/create',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email,
        password,
        name,
        userName,
      },
    })
      .then((data) => {
        localStorage.setItem('token', data.data.token);
        props.history.push('/home');
      })
      .catch((error) => {
        console.log('Respondio con error');
      });
  };

  return (
    <div className="initial-Page">
      <div className="side-Left">
        <div className="side-Logo">
          <img
            src={SincuadrosN}
            className="background-Logo"
            alt="background-Logo"
          ></img>
        </div>
      </div>

      <InitialForms
        status={select}
        select={setSelect}
        name={name}
        setName={setName}
        userName={userName}
        setUserName={setUserName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleCreate={handleCreate}
      />
    </div>
  );
}

export default InitialPage;

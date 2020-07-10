import React, { useState, useRef } from 'react';
import './InitialPage.css';
import SincuadrosN from '../assets/SincuadrosN.png';
import InitialForms from './InitialForms';
import { Link } from 'react-router-dom';

function InitialPage() {
  const [select, setSelect] = useState(false);
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [access, setAccess] = useState(null);

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
        access={setSelect}
        setName={setName}
        setUserName={setUserName}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </div>
  );
}

export default InitialPage;

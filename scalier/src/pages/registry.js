import React, { useState, useRef, useEffect } from 'react';
import InitialPage from '../components/InitialPage';
import axios from 'axios';

function Registry(props) {
  const [select, setSelect] = useState(false);
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: 'POST',
      baseURL: 'http://localhost:8080',
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
        //const token = response.data.token;
        props.history.push('/home');
      })
      .catch((error) => {
        console.log('Respondio con error');
      });
  };
}

export default Registry;

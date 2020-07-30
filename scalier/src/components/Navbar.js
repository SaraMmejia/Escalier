import React from 'react';
import './Navbar.css';
import SincuadrosN from '../assets/SincuadrosN.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar(props) {
  function handleClick() {
    localStorage.clear();
  }
  return (
    <div className="navBar-Page">
      <div className="navBar-Bar">
        {' '}
        <Link to="/home" className="return-Home">
          <img
            src={SincuadrosN}
            className="navBar-Image-Logo"
            alt="navBar-Logo"
          ></img>
        </Link>
        <ul className="navBar-List">
          <li className="list-Explore"> Explorar </li>
          <li className="list-ForArchitects"> Para Arquitectos </li>
        </ul>
        <ul className="navBar-interact">
          <form>
            <li className="interact-Search">
              {' '}
              <FontAwesomeIcon icon={faSearch} className="NavBar-Icon" />
              <input
                placeholder="Buscar"
                name="interact-Search"
                type="search"
                className="input-Search"
              ></input>{' '}
            </li>
          </form>
          <div className="btn-logout">
            <Link to="/" className="button-logout" onClick={handleClick}>
              Sign out
            </Link>
          </div>

          <li className="interact-Collection">
            <Link
              to="/posts/create"
              className="button-Upload"
              data-testid="NewProductLink"
            >
              Subir
            </Link>
            <Link
              to="/posts/listPost"
              className="button-Collection"
              data-testid="NewProductLink"
            >
              Colección
            </Link>
          </li>
        </ul>
      </div>
      <div className="line">
        <hr></hr>
      </div>
    </div>
  );
}

export default Navbar;

import React from 'react';
import './Navbar.css';
import SincuadrosN from '../assets/SincuadrosN.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Navbar() {
  return (
    <div className="navBar-Page">
      <div className="navBar-Bar">
        {' '}
        <img
          src={SincuadrosN}
          className="navBar-Image-Logo"
          alt="navBar-Logo"
        ></img>
        <ul className="navBar-List">
          <il className="list-Explore"> Explorar </il>
          <il className="list-ForArchitects"> Para Arquitectos </il>
        </ul>
        <ul className="navBar-interact">
          <form>
            <il className="interact-Search">
              {' '}
              <FontAwesomeIcon icon={faSearch} className="NavBar-Icon" />
              <input
                placeholder="Buscar"
                name="interact-Search"
                type="search"
                className="input-Search"
              ></input>{' '}
            </il>
          </form>

          <il className="interact-Upload">
            {' '}
            <button className="button-Upload">Subir</button>{' '}
          </il>
        </ul>
      </div>
      <div className="line">
        <hr></hr>
      </div>
    </div>
  );
}

export default Navbar;

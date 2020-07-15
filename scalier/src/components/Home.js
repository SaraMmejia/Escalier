import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-Bar">
        <ul className="home-List">
          <il className="list">Animación 3D</il>
          <il className="list">Interiorismo</il>
          <il className="list">Casas</il>
          <il className="list">Edificios</il>
          <il className="list">Clásicos</il>
        </ul>
        <div className="button-Filter">
          <FontAwesomeIcon icon={faSortAmountDown} className="filter-Icon" />
          <button className="home-filter"> Filtros </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

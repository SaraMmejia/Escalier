import React from 'react';
import Navbar from './Navbar';
import ListPost from './ListPost';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-Bar">
        <ul className="home-List">
          <li className="list">Animación 3D</li>
          <li className="list">Interiorismo</li>
          <li className="list">Casas</li>
          <li className="list">Edificios</li>
          <li className="list">Clásicos</li>
        </ul>
        <div className="button-Filter">
          <FontAwesomeIcon icon={faSortAmountDown} className="filter-Icon" />
          <button className="home-filter"> Filtros </button>
        </div>
      </div>
      <ListPost />
    </div>
  );
}

export default Home;

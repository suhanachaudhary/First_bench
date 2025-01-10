// Header.js
import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">FirstBench</div>
      <nav className="nav-links">
        <a href="#dashboard"><i className="fa-solid fa-house"></i>&nbsp;Dashboard</a>
        <a href="#firstguru"><i className="fa-regular fa-paper-plane"></i>&nbsp;FirstGuru</a>
        <a href="#townhall"><i className="fa-solid fa-tower-observation"></i>&nbsp;TownHall</a>
        <a href="#aievaluation"><i className="fa-solid fa-crosshairs"></i>&nbsp;AI Evaluation</a>
        <a href="#performance"><i className="fa-solid fa-chart-simple"></i>&nbsp;Performance</a>
        <a href="#mocktest" style={{color:"#5db996"}}><i className="fa-solid fa-file-lines"></i>&nbsp;Mock Test</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-regular fa-bell"></i>
      </nav>
      <div className="profile-icon">
        <FaRegUserCircle size={30} />
      </div>
    </header>
  );
};

export default Header;

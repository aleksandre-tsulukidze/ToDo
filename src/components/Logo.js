import React from 'react';
import logo from '../images/PAC-GAY.png';
import '../css/logo.css';

const Logo = () => {
  return (
    <div className="logoWrapper">
      <h2>Alexander</h2>
      <img className="logo" alt="refrigerator handel" src={logo}></img>
    </div>
  );
};

export default Logo;

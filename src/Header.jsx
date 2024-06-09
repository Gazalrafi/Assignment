import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">GO FOOD</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Groceries</a></li>
          <li><a href="#">Pages</a></li>
        </ul>
      </nav>
      <div className="social-icons">
        <a href="#"><i className="icon">U</i></a>
        <a href="#"><i className="icon">U</i></a>
        <a href="#"><i className="icon">U</i></a>
        <a href="#"><i className="icon">U</i></a>
      </div>
    </header>
  );
};

export default Header;
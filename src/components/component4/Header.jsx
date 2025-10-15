import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <header>
      <img src="/Combined Shape.svg" alt="logo" />
      <nav className={menuOpen ? "active" : ""}>
        <ul>
          <Link to="/home"><li className='anchors'>Home</li></Link>
          <Link to="/proj1"><li className='anchors'>Portfolio</li></Link>
          <Link to="/contact"><li className='anchors'>Contact me</li></Link>
        </ul>
      </nav>

     
      <div className={`burger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;

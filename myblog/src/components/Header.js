import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Header.css';

const Header = ({ btnTitle, btnColor }) => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <h2>BlogWorld</h2>
      </Link>
      <div className="login">
        <Link to="/login" className={`ui button ${btnColor}`}>
          {btnTitle}
        </Link>
      </div>
    </header>
  );
};

export default Header;

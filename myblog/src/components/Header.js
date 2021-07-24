import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Header.css';

const Header = ({ btnTitle, btnColor }) => {
  const renderLoginButton = () => {
    if (btnColor && btnTitle) {
      return (
        <Link to="/login" className={`ui button ${btnColor}`}>
          {btnTitle}
        </Link>
      );
    }
    return null;
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <h2>BlogWorld</h2>
      </Link>
      <div className="login">{renderLoginButton()}</div>
    </header>
  );
};

export default Header;

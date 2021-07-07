import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="ui menu">
      <Link className="item" to="/">
        MyStreamy
      </Link>

      <div className="right menu">
        <div className="item">
          <Link to="/">Streams</Link>
        </div>
        <div className="item">
          <Link to="/streams/login" className="ui secondary button">
            Login with Google
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

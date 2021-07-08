import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

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
          <GoogleAuth />
        </div>
      </div>
    </header>
  );
};

export default Header;

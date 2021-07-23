import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Showcase.css';

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="content">
        <h1>BlogWorld</h1>
        <h2>Find the most interesting blogs</h2>
        <Link to="/" className="ui button red inverted">
          Find out more
        </Link>
      </div>
    </div>
  );
};

export default Showcase;

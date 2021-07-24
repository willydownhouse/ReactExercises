import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Showcase.css';

const Showcase = ({ title, header, linkTxt }) => {
  return (
    <div className="showcase">
      <div className="content">
        <h1>{title}</h1>
        <h2>{header}</h2>
        <Link to="/signup" className="ui button red inverted">
          {linkTxt}
        </Link>
      </div>
    </div>
  );
};

export default Showcase;

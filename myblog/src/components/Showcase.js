import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import '../css/Showcase.css';

const Showcase = ({ title = '', header, linkTxt = '' }) => {
  return (
    <div>
      <Header bg="#111" logo="#fff" btnTitle="Login" btnColor="red inverted" />
      <div className="showcase">
        <div className="content">
          <h1>{title}</h1>
          <h2>{header}</h2>
          {linkTxt ? (
            <Link to="/signup" className="ui button red inverted">
              {linkTxt}
            </Link>
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Showcase;

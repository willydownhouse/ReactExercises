import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../actions';

const Menu = ({ link1, link2, link3, path1, path2, path3, logout }) => {
  return (
    <div style={{ marginBottom: '0' }} className="ui three item menu">
      <Link to={path1} className="item">
        {link1}
      </Link>
      <Link to={path2} className="item">
        {link2}
      </Link>
      <Link to={path3} onClick={logout} className="item">
        {link3}
      </Link>
    </div>
  );
};

export default connect(null, { logout })(Menu);

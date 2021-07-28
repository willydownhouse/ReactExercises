import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../actions';

const Menu = ({ link1, link2, link3, logout }) => {
  return (
    <div style={{ marginBottom: '0' }} className="ui three item menu">
      <Link to="/createblog" className="item">
        {link1}
      </Link>
      <Link to="/mypage" className="item">
        {link2}
      </Link>
      <Link to="/" onClick={logout} className="item">
        {link3}
      </Link>
    </div>
  );
};

export default connect(null, { logout })(Menu);

import React from 'react';
import { Link } from 'react-router-dom';

const MyPage = props => {
  return (
    <div>
      MyPage
      <Link to="/blogs">Back</Link>
    </div>
  );
};

export default MyPage;

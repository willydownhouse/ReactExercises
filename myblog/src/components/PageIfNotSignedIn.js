import React from 'react';

import Showcase from './Showcase';

const PageIfNotSignedIn = props => {
  return (
    <div>
      <Showcase header="Log in to get access" />
    </div>
  );
};

export default PageIfNotSignedIn;

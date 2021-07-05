import React from 'react';

import PostList from './PostList';

const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className="ui container"
    >
      <PostList />
    </div>
  );
};

export default App;

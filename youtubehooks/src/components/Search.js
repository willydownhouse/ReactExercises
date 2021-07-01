import React, { useState } from 'react';
import '../css/Search.css';

const Search = ({ setTerm, setCurrentVideo }) => {
  const [inputVal, setInputVal] = useState('');

  const onSubmitEvent = e => {
    e.preventDefault();
    setTerm(inputVal);
    setInputVal('');
    setCurrentVideo(null);
  };

  return (
    <div className="search">
      <div className="logo">
        <i className="fab fa-youtube fa-2x"></i>
        <h1>Premium</h1>
      </div>
      <form onSubmit={onSubmitEvent} className="ui form">
        <input
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          className="ui input"
          type="text"
        />
      </form>
      <div className="login">
        <button className="ui secondary button">Login</button>
        <button className="ui button" style={{ background: 'transparent' }}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Search;

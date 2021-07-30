import React, { useState, useEffect, useRef } from 'react';

import Menu from '../Menu';
import ImgCont from '../ImgCont';
import Footer from '../Footer';

const CreateBlog = ({ types }) => {
  const [selectedType, setSelectedType] = useState('');
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const onBodyClick = e => {
      if (!ref.current.contains(e.target)) {
        setDropDownOpen(false);
      }

      if (e.target.tagName === 'TEXTAREA') {
        setDropDownOpen(false);
      }
    };
    document.body.addEventListener('click', onBodyClick, {
      capture: true,
    });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderOptions = types => {
    return types.map(type => {
      if (selectedType === type) {
        return null;
      }
      return (
        <div
          key={type}
          onClick={e => setSelectedType(e.target.getAttribute('value'))}
          className="item"
          value={type}
        >
          {type}
        </div>
      );
    });
  };

  return (
    <div>
      <div className="ui container">
        <Menu
          link1="Blogs"
          link2="My page"
          link3="Log out"
          path1="/blogs"
          path2="mypage"
          path3="/"
        />
        <ImgCont
          src="https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="img"
        />
        <div
          style={{ marginBottom: '40px', marginTop: '20px' }}
          className="ui form"
          ref={ref}
        >
          <div className="field">
            <label>Type</label>
            <div
              onClick={() => setDropDownOpen(!dropDownOpen)}
              className={`ui selection dropdown ${
                dropDownOpen ? 'visible active' : ''
              }`}
            >
              <input type="hidden" name="type" />
              <i className="dropdown icon"></i>
              <div className="text">{selectedType}</div>
              <div
                className={`menu ${dropDownOpen ? ' visible' : ''} transition`}
              >
                {renderOptions(types)}
              </div>
            </div>
          </div>
          <div className="field">
            <label>Title</label>
            <input className="input" />
          </div>
          <div className="field">
            <label>Text</label>
            <textarea rows="15"></textarea>
          </div>
          <button className="ui button secondary">Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateBlog;

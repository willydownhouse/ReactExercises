import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name' : 'Nimi';

    return (
      <div className="ui field">
        <label>{text}</label>
        <div className="ui input"></div>
        <input type="text" name="name" />
      </div>
    );
  }
}

export default Field;

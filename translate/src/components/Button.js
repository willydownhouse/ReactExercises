import React from 'react';

import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {color => (
          <button className={`ui ${color} button`}>
            <LanguageContext.Consumer>
              {value => (value === 'english' ? 'Submit' : 'Lähetä')}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;

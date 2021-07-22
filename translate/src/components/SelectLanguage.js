import React from 'react';

class SelectLanguage extends React.Component {
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.props.onLanguageChange('english')}
        />
        <i
          className="flag finland"
          onClick={() => this.props.onLanguageChange('finnish')}
        />
      </div>
    );
  }
}

export default SelectLanguage;

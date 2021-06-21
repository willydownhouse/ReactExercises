import React from 'react';

class SearchInput extends React.Component {
  state = { value: '' };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.search(this.state.value);
  };

  onInputChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="form">
        <input
          value={this.state.value}
          onChange={this.onInputChange}
          className="input"
        ></input>
      </form>
    );
  }
}

export default SearchInput;

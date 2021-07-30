import React from 'react';

import '../css/BlogTypeSelector.css';
import { filterBlogsByType, getAllBlogs } from '../actions';
import { connect } from 'react-redux';

class BlogTypeSelector extends React.Component {
  renderOptions = () => {
    return this.props.types.map(type => {
      return (
        <option key={type} className="option" value={type}>
          {type}
        </option>
      );
    });
  };

  renderBlogsByType = type => {
    type === 'All blogs'
      ? this.props.getAllBlogs()
      : this.props.filterBlogsByType(type);
  };
  render() {
    return (
      <select
        onChange={e => this.renderBlogsByType(e.target.value)}
        className="selector"
      >
        <option className="option" value="All blogs">
          All blogs
        </option>
        {this.renderOptions()}
      </select>
    );
  }
}

export default connect(null, {
  filterBlogsByType,
  getAllBlogs,
})(BlogTypeSelector);

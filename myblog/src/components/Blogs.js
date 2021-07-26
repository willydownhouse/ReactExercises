import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllBlogs, logout } from '../actions';
import Footer from './Footer';

import '../css/Blogs.css';

class Blogs extends React.Component {
  componentDidMount() {
    this.props.getAllBlogs();
  }

  renderList = () => {
    return this.props.blogs.map(blog => {
      return (
        <div key={blog.id} className="item">
          <i className="large user middle aligned icon"></i>
          <div className="content">
            {blog.title}
            <div className="description"> {blog.type}</div>
            <div className="description">Author: {blog.author}</div>

            <div className="description">
              Published:
              {new Date(blog.createdAt).toLocaleDateString('en-US')}
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.props);

    if (!this.props.isSignedIn) {
      return <div>Sign in to get access</div>;
    }

    if (!this.props.blogs) {
      return <div>Loading...</div>;
    }

    return (
      <React.Fragment>
        <div className="ui container">
          <div className="img-container">
            <img
              className="img"
              alt="img"
              src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>

          <div className="ui three item menu">
            <Link to="/" className="item">
              Create a Blog
            </Link>
            <Link to="/mypage" className="item">
              My Account
            </Link>
            <Link to="/" onClick={this.props.logout} className="item">
              Log out
            </Link>
          </div>

          <div className="ui relaxed divided list">{this.renderList()}</div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { getAllBlogs, logout })(Blogs);

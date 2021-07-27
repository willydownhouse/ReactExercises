import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout, getBlogsAndUsers } from '../actions';
import Footer from './Footer';
import Author from './Author';

import '../css/Blogs.css';

class Blogs extends React.Component {
  componentDidMount() {
    this.props.getBlogsAndUsers();
  }

  blogTypeBackColor = blogType => {
    if (blogType === 'sport') return 'black';
    if (blogType === 'nature') return 'green';
    if (blogType === 'fashion') return 'pink';
  };

  renderList = () => {
    return this.props.blogs.map(blog => {
      return (
        <div key={blog.id} className="blog">
          <div className="blog-content">
            <div className={`blog-type ${this.blogTypeBackColor(blog.type)}`}>
              <p>{blog.type}</p>
            </div>
            <div className="blog-title">{blog.title}</div>

            {/* <div className="blog-author">Author: {blog.author}</div> */}
            <Author authorId={blog.author} />

            <div className="blog-date">
              Published: {new Date(blog.createdAt).toLocaleDateString('en-US')}
            </div>
          </div>
        </div>
      );
    });
  };

  //

  render() {
    if (!this.props.isSignedIn) {
      return <div>Sign in to get access</div>;
    }

    if (!this.props.blogs) {
      return <div>Loading...</div>;
    }

    return (
      <React.Fragment>
        <div className="ui container">
          <div style={{ marginBottom: '0' }} className="ui three item menu">
            <Link to="/createblog" className="item">
              Create a Blog
            </Link>
            <Link to="/mypage" className="item">
              My Account
            </Link>
            <Link to="/" onClick={this.props.logout} className="item">
              Log out
            </Link>
          </div>
          <div className="img-container">
            <img
              className="img"
              alt="img"
              src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>

          <h1>Blogs</h1>

          <div className="blog-list">{this.renderList()}</div>
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

export default connect(mapStateToProps, { logout, getBlogsAndUsers })(Blogs);

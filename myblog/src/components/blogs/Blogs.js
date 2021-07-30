import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getBlogsAndUsers } from '../../actions';
import Menu from '../Menu';
import Footer from '../Footer';
import Author from '../Author';
import ImgCont from '../ImgCont';
import BlogTypeSelector from '../BlogTypeSelector';
import PageIfNotSignedIn from '../PageIfNotSignedIn';

import '../../css/Blogs.css';

class Blogs extends React.Component {
  componentDidMount() {
    this.props.getBlogsAndUsers();
  }

  blogTypeBackColor = blogType => {
    if (blogType === 'sport') return 'black';
    if (blogType === 'nature') return 'green';
    if (blogType === 'fashion') return 'pink';
  };

  renderButtons = (blogId, blogAuthor) => {
    if (this.props.userId === blogAuthor) {
      return (
        <div>
          <Link to={`/blogs/update/${blogId}`} className="ui secondary button">
            Update
          </Link>
          <Link to={`/blogs/delete/${blogId}`} className="ui red button">
            Delete
          </Link>
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.blogs.map(blog => {
      return (
        <div key={blog._id} className="blog">
          <div className="blog-content">
            <div className={`blog-type ${this.blogTypeBackColor(blog.type)}`}>
              <p>{blog.type}</p>
            </div>
            <Link to={`blogs/${blog._id}`} className="blog-title">
              {blog.title}
            </Link>

            <Author authorId={blog.author} />

            <div className="blog-date">
              Published: {new Date(blog.createdAt).toLocaleDateString('en-US')}
            </div>
          </div>
          {this.renderButtons(blog._id, blog.author)}
        </div>
      );
    });
  };

  //

  render() {
    if (!this.props.isSignedIn) {
      return (
        <div>
          <PageIfNotSignedIn />
        </div>
      );
    }

    if (!this.props.blogs) {
      return <div>Loading...</div>;
    }

    console.log(this.props.blogs);

    return (
      <React.Fragment>
        <div className="ui container">
          <Menu
            link1="Write a new blog"
            link2="My page"
            link3="Log out"
            path1="/createblog"
            path2="/mypage"
            path3="/"
          />
          <ImgCont
            src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="img"
          />
          <div>
            <h1>Blogs</h1>
            <BlogTypeSelector types={this.props.types} />
          </div>

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
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { getBlogsAndUsers })(Blogs);

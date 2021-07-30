import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import Signup from './Signup';
import Login from './Login';
import Showcase from './Showcase';
import Blogs from './blogs/Blogs';
import CreateBlog from './blogs/CreateBlog';
import MyPage from './MyPage';
import BlogDetails from './blogs/BlogDetails';
import UpdateBlog from './blogs/UpdateBlog';
import DeleteBlog from './blogs/DeleteBlog';

const appConfig = {
  types: ['lifestyle', 'sport', 'nature', 'fashion'],
};

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <Showcase
            title="BlogWorld"
            header="Find the most interesting blogs"
            linkTxt="Create account"
          />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/blogs" exact>
          <Blogs types={appConfig.types} />
        </Route>
        <Route path="/mypage">
          <MyPage />
        </Route>
        <Route path="/createblog">
          <CreateBlog types={appConfig.types} />
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails />
        </Route>
        <Route path="/blogs/update/:id" component={UpdateBlog} />
        <Route path="/blogs/delete/:id" component={DeleteBlog} />
      </Switch>
    </Router>
  );
};

export default App;

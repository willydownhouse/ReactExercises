import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import Signup from './Signup';
import Login from './Login';
import Header from './Header';
import Showcase from './Showcase';
import Blogs from './Blogs';
import CreateBlog from './CreateBlog';
import Footer from './Footer';
import MyPage from './MyPage';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <Header
            bg="#111"
            logo="#fff"
            btnTitle="Login"
            btnColor="red inverted"
          />
          <Showcase
            title="BlogWorld"
            header="Find the most interesting blogs"
            linkTxt="Create account"
          />
          <Footer />
        </Route>
        <Route path="/login">
          <Header bg="#111" logo="#fff" />
          <Login />
        </Route>
        <Route path="/signup">
          <Header bg="#111" logo="#fff" />
          <Signup />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/mypage">
          <MyPage />
        </Route>
        <Route path="/createblog">
          <CreateBlog />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

//////WHAT NEXT

//BUILD SIGN UP PAGE
//BUILD BLOG/MAIN PAGE

//ERRORS

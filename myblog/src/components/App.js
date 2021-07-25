import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import Signup from './Signup';
import Login from './Login';
import Header from './Header';
import Showcase from './Showcase';
import Blogs from './Blogs';
import Footer from './Footer';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <Header btnTitle="Login" btnColor="red inverted" />
          <Showcase
            title="BlogWorld"
            header="Find the most interesting blogs"
            linkTxt="Create account"
          />
          <Footer />
        </Route>
        <Route path="/login">
          <Header />
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/blogs">
          <Blogs />
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

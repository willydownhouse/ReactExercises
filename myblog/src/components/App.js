import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Signup from './Signup';
import Login from './Login';
import Header from './Header';
import Showcase from './Showcase';
import Footer from './Footer';

const App = () => {
  return (
    <BrowserRouter>
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
      </Switch>
    </BrowserRouter>
  );
};

export default App;

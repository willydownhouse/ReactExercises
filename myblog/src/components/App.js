import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Login';
import Header from './Header';
import Showcase from './Showcase';
import Footer from './Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Header btnTitle="Login" btnColor="red" />
          <Showcase />
          <Footer />
        </Route>
        <Route path="/login">
          <Header btnTitle="Signup" btnColor="inverted black" />
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

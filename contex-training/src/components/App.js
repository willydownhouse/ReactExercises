import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';

import List from './List';
import ProductDetails from './ProductDetails';
import Signup from './Signup';

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <Switch>
            <Route path="/" exact>
              <Typography gutterBottom variant="h2">
                Find your favorite product
              </Typography>
              <List />
            </Route>
            <Route path="/products/:id">
              <ProductDetails />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;

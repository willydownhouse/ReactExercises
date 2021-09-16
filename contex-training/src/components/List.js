import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core';

import randomDataApi from '../api/randomData';
import { useStateValue } from '../state';
import { setProducts } from '../state/actions';

const useStyles = makeStyles({
  cont: {
    marginBottom: '20px',
    height: '320px',
  },
});

function List(props) {
  const [page, setPage] = useState(0);
  const [state, dispatch] = useStateValue();

  console.log(state);

  const classes = useStyles();

  useEffect(() => {
    randomDataApi
      .get(`/cannabis/random_cannabis?page=${page}&size=5`)
      .then(res => {
        console.log(res.data);
        dispatch(setProducts(res.data));
      });
  }, [page]);
  return (
    <div>
      <TableContainer className={classes.cont} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Brand</TableCell>
              <TableCell>Cannabinoid</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Health benefit</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Strain</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.products.map(product => (
              <TableRow key={product.id}>
                <TableCell>
                  <Link to={`/products/${product.id}`}>{product.brand}</Link>
                </TableCell>
                <TableCell>{product.cannabinoid}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.health_benefit}</TableCell>
                <TableCell>{product.type}</TableCell>
                <TableCell>{product.strain}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ButtonGroup>
        <Button
          onClick={() => {
            setPage(page - 1);
          }}
          disabled={page === 0}
        >
          {`Previous`}
        </Button>

        <Button onClick={() => setPage(page + 1)} disabled={page === 5}>
          Next
        </Button>
      </ButtonGroup>
      <div>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/signup"
        >
          Sign up
        </Button>
      </div>
    </div>
  );
}

export default List;

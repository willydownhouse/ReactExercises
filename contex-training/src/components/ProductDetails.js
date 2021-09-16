import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails(props) {
  const params = useParams();

  console.log(params);
  return <div>Details</div>;
}

export default ProductDetails;

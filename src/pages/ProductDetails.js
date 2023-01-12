import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import axios from 'axios';
function ProductDetails() {
  const { productId } = useParams();

  const [product, setProduct] = useState([])
  console.log(product);
  const baseURL = `https://fakestoreapi.com/products/${productId}`;
 
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProduct(response.data);
    });
  }, []);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 mx-auto m-3'>


          <Card>
            <Card.Img className='mx-auto' variant="top" src={product.image} style={{ width: '14rem' }} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Card.Title>${product.price}</Card.Title>
            </Card.Body>
          </Card>
        </div>

      </div>

    </div>
  )
}

export default ProductDetails
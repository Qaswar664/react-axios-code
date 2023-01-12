import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../components/card.css';
import { addItem } from '../reducers/Cart';
import { addToCart } from '../reducers/Cart';

function ProductCard({product}) {
const disptach=useDispatch();

  const navigate = useNavigate()
  const productDetail = () => {
    navigate(`/${product.id}`)
  }
   
  const addItemToCart=()=>{
         disptach(addItem(product))
  }

  return (
    <div>
      <Card style={{ width: '21rem', height: "60vh" }} className="p-3 mt-3 mb-1" >
        <Card.Img className='mx-auto' variant="top" src={product.image} style={{ width: '14rem', height: "21vh" }} />
        <Card.Body>
          <Card.Text>{product.title}</Card.Text>
          <div className='d-flex justify-content-center buttons'>
          <Button className='btn btn-outline-dark me-3 w-75 see-more' onClick={productDetail}>See More</Button>
          <Button  onClick={addItemToCart} variant='secondary' className='ms-3  add-to-cart'>Add to cart</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductCard
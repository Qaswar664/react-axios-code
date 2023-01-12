import React from 'react'
import { Badge, Button, Container,Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cart from '../reducers/Cart';

function AppNavbar(props) {

const cart = useSelector((state) => state.cart)

const getTotalQuantity = () => {
  let total = 0
  cart.forEach(item => {
    total += item.quantity
  })
  return total
}
  const navigate = useNavigate()
  const addToCart = () => {
    navigate(`/cart`)
  }
  return (
    <Navbar bg="dark">
        <Container>
          <Navbar.Brand className='text-white' href="/">{props.title}</Navbar.Brand>
          <Button variant='danger'onClick={addToCart} >Your Cart 
            <Badge className='ms-1' bg="secondary">0</Badge>
          </Button>
          <h5 className='text-white'>{getTotalQuantity.length} Total:$0</h5>
        </Container>
      </Navbar>
  )
}

export default AppNavbar
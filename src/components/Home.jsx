import React from 'react'
import {Button} from 'react-bootstrap';
import { FaCartPlus } from "react-icons/fa";


const Home = () => {
  return (
    <>
     <FaCartPlus className='add-to-cart'/>
      <div className='cart-container'>
        <div className="img-container item">
          <img src="/assests/shoes.png" alt="product" />
        </div>
        <div className="text-container item">
          <span>Men's Shoes</span>
          <br />
          <span>Price $50-/</span>
        </div>
        <div className="btn-container item">
          <br />
          <Button variant="success">Add to Cart</Button>
        </div>
      </div>
    </>
  )
}

export default Home

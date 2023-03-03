import React,  {useState,useEffect}from 'react';
import './cart.css';


import {Link}  from 'react-router-dom';


let array=[];


const CartList=({cart, setCart, handleChange})=>{


    const [price, setPrice] = useState(0);
   
    const handleRemove = (id) => {
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
      handlePrice();
    };
  
    const handlePrice = () => {
      let ans = 0;
      cart.map((item) => (ans += item.amount * item.price));
      setPrice(ans);
    };
  
    useEffect(() => {
      handlePrice();
    });
  
    return (
     
        <article style={{border:'5px solid black', background:'lightgreen', width:'auto',padding:'2%',borderRadius:'10px'}}>
        {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.image} alt="" />
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={() => handleChange(item, -1)}>-</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, 1)}>+</button>
            </div>
            <div>
              <span>{item.price}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span style={{color:"black"}}>Total Price of your Cart</span>
          <span>Rs - {price}</span>
        </div>
        <div className='d-flex justify-content-center'>
  <Link to='/checkout'>  <button type="button" className='btn btn-success'>Checkout</button></Link>
  {
    localStorage.setItem("TotalCost",price)
  }
  {
    localStorage.setItem("names",(JSON.stringify(cart)))
  }
        </div>
      </article>

     
  
    );
}

export default CartList;
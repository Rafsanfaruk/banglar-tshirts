import React from "react";
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if(cart.length ===0){
        message= <p>Please add some products</p>
    }
    else{
        message= <div> 
            <h3>Borolxxxxxy</h3>
            <p><small>Thanks for giving money</small></p>
        </div>
    }
  return (
    <div>
    <h2 className={cart.length ===1 ? 'blue' :'red'}>Order Summary:{cart.length}</h2>
    <p className={`bold ${cart.length === 3 ? 'green':'purple '}`}>SomeThing</p>

      {/* ternary condition apply */}

      {cart.length >2 
      ? <span className="yellow">Aro beshi kino</span>
       :<span>Fokira</span>}     



      {/* //if else condition apply */}

      {message}  



      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
        {
            cart.length === 2 && <p>Double bonus!!</p>
        }
        {
            cart.length === 3 || <h3>Three not</h3>
        }

    </div>
  );
};

export default Cart;

/**
 * Conditional rendering 
 * 
 * 1.use if or  if else to set a variable that will be contain  an element,component
 * 2. ternary operator : condition ? 'for true' : 'for false'
 * 3. Logical && : (if the condition is true then the next element will be displayed)
 * 4.Logical || :(if the condition is false then the next element will be displayed)
 * 
 * 
 * */ 

/**
 * Conditional CSS class 
 * 1. Use ternary 
 * 2.ternary inside template string 
 * */ 
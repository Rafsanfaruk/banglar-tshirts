import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";
import './Home.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const tshirts = useLoaderData();

    const [cart,setCart] =useState([]);

    // Add cart to items list
    const handleAddToCart =(tshirt)=>{
        const exists =cart.find(t=>t._id === tshirt._id);
        if(exists){
            toast("Already Added!");
        }
        else{
            const newCart =[...cart,tshirt]
            setCart(newCart)
        }
        // const newCart =[...cart,tshirt] // add into condition
        // setCart(newCart);
    }

// remove cart from items list
    const handleRemoveFromCart=(id)=>{
        const remaining =cart.filter(ts =>ts._id !== id)
        setCart(remaining);
    }



  return (
    <div className="home-container">
      <div className="t-shirts-container">
        {tshirts.map((tshirt) => (<TShirt 
        key={tshirt._id}
         tshirt={tshirt}
         handleAddToCart={handleAddToCart}
         ></TShirt>
        ))}
      </div>
      <div className="'cart-container">
        <Cart 
         cart ={cart}
         handleRemoveFromCart={handleRemoveFromCart}
         ></Cart>

      </div>
    </div>
  );
};

export default Home;

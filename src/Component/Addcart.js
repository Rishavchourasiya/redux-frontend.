// import React, { useEffect, useState } from 'react';

// const Addcart = ({ cart, setcart }) => {
//   const [price, setPrice] = useState(0);

//   // Calculate total cart price
//   const handleprice = () => {
//     let ans = 0;
//     cart.forEach((item) => {
//       ans += item.amount * item.price;
//     });
//     setPrice(ans);
//   };

//   // Remove item from cart
//   const Remove = (id) => {
//     const arr = cart.filter((item) => item.id !== id);
//     setcart(arr);
//   };

//   // Increase amount
//   const increment = (id) => {
//     const updatedCart = cart.map((item) =>
//       item.id === id ? { ...item, amount: item.amount + 1 } : item
//     );
//     setcart(updatedCart);
//   };

//   // Decrease amount
//   const decrement = (id) => {
//     const updatedCart = cart
//       .map((item) =>
//         item.id === id ? { ...item, amount: item.amount > 1 ? item.amount - 1 : 1 } : item
//       );
//     setcart(updatedCart);
//   };

//   useEffect(() => {
//     handleprice();
//   }, [cart]);

//   return (
//     <article>
//       {cart.map((item) => (
//         <div className='cart_box' key={item.id}>
//           <div className='cart_img'>
//             <img src={item.img} alt="image error" />
//             <p>{item.name}</p>
//             <p>{item.category}</p>
//             <p>{item.desc}</p>
//             <p>{item.rating}</p>
//             <p>{item.review}</p>
//             <p>Qty: {item.amount}</p>
//             <p>Price: ₹{item.price}</p>
//           </div>

//           <div className='cart_button'>
//             <button onClick={() => increment(item.id)}>+</button>
//             <button>{item.amount}</button>
//             <button onClick={() => decrement(item.id)}>-</button>
//           </div>

//           <div>
//             <span>Total: ₹{item.amount * item.price}</span>
//             <button onClick={() => Remove(item.id)}>Remove</button>
//           </div>
//           <div className='cart_total'>
//         <h3>Total Amount of Cart: ₹{price}</h3>
//       </div>
//         </div>
        
//       ))}

      
//     </article>
//   );
// };

// export default Addcart;

import React, { useEffect, useState } from "react";
import "./Addcart.css";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const Cart = ({ cart = [], setcart = () => {} }) => {
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  // Calculate total price
  useEffect(() => {
    let total = 0;
    cart.forEach(item => {
      total += item.qty * item.price;
    });
    setPrice(total);
  }, [cart]);

  // Handle quantity changes
  const handleChange = (item, delta) => {
    const updatedCart = cart.map(cartItem => {
      if (cartItem.id === item.id) {
        const newQty = cartItem.qty + delta;
        return { ...cartItem, qty: newQty < 1 ? 1 : newQty };
      }
      return cartItem;
    });
    setcart(updatedCart);
  };

  // Remove item from cart
  const handleRemove = (item) => {
    const updatedCart = cart.filter(cartItem => cartItem.id !== item.id);
    setcart(updatedCart);
  };

  // Stripe token handler
  const handleToken = (token) => {
    console.log("Stripe Token:", token);
    alert("Payment Successful!");
  };

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div className="cart-div" key={index}>
            <div className="cart-img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="cart-item">
              <span>{item.name}</span>
              <span>{item.category}</span>
            </div>
            <div className="cart-btn">
              <button className="btn btn-danger" onClick={() => handleChange(item, -1)}>-</button>
              <button className="btn btn-primary">{item.qty}</button>
              <button className="btn btn-success" onClick={() => handleChange(item, 1)}>+</button>
            </div>
            <div className="cart-price">
              <span>Rs. {item.qty * item.price}</span>
              <button className="btn btn-danger" onClick={() => handleRemove(item)}>Remove</button>
            </div>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="checkout-section">
          <p style={{ color: "green", fontSize: "16px" }}>
            Total Price of Your Cart is: <strong>Rs. {price}</strong>
          </p>
          <StripeCheckout
            token={handleToken}
            stripeKey="pk_test_51NqsGdSEnDx41uiAy91YixIr2Oa4csspmLIFWFuYRsQmQDnUQfqUi78bCNTmIm8gmdAePgxV4LvW4a4BR3aASFfu00kVsnIvNN"
            amount={price * 100}
            name="Shopping Cart"
            currency="INR"
          >
            <button className="btn btn-primary">Place Your Order</button>
          </StripeCheckout>

          <button
            className="btn btn-warning"
            style={{ color: "blue", marginLeft: "10px" }}
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;


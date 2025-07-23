// import React, { useState } from 'react'
// import Navbar from './Component/Navbar'
// import Home from './Component/Home'
// import { Routes, Route } from 'react-router-dom'
// import  './Component/Style.css'
// import Cart from './Component/Addcart'
// const App = ({item}) => {
//   const [cart, setcart] = useState([]);
//   const [show, setshow] = useState(false);
//   const handleCart = (item) => {
//     let ispresent = false;
//     cart.forEach((product) => {
//       if (product.id === item.id) ispresent = true;
//     });
//     if (ispresent) return;
//     setcart([...cart, item]);
//   };
//   return (
//     <div>
//       <Navbar size={cart.length} setShow={setshow} /> 
//       { show? <Home handleCart={handleCart} item={item} />
//        :<Cart cart={cart} setcart={setcart} />  }
      
//       <Routes>
//         <Route path='/' element={<Home handleCart={handleCart} item={item} />} />
//         <Route path='/signup' element={<signup />} />
//         <Route path='/signin' element={<signin />} />
//         <Route path='/product' element={<product />} />
//       </Routes>
//     </div>
//   )
// }
// export default App


import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Cart from './Component/Addcart';
import Signup from './Component/Signup';
import Signin from './Component/Signin';
import "./footer.css"; 

import { Routes, Route } from 'react-router-dom';
import './Component/Style.css';

const App = ({ item }) => {
  const [cart, setcart] = useState([]);
  const [show, setshow] = useState(true);

  // Add to cart with qty = 1
  const handleCart = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (product.id === item.id) isPresent = true;
    });
    if (isPresent) return;
    setcart([...cart, { ...item, qty: 1 }]);  // Add qty when adding
  };

  return (
    <div>
      <Navbar size={cart.length} setshow={setshow} />
      <Routes>
        <Route path='/' element={<Home handleCart={handleCart} item={item} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/cart' element={<Cart cart={cart} setcart={setcart} />} />
      </Routes>
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>We are dedicated to providing the best online shopping experience for all your needs.</p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/product">Products</a></li>
            <li><a href="/signup">Signup</a></li>
            <li><a href="/signin">Signin</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <p>Email: rishavchourasiya945@gmail.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved. This website created by @rishavchourasiya</p>
      </div>
    </footer>
    </div>
  );
};

export default App;

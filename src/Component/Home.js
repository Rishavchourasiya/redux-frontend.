import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Action from "../Redux/Action";
import './Home.css'; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";
const Home = ({ handleCart }) => {
  const { Product } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Action());
  }, [dispatch]);

  return ( 
    <div className="home-container"> 
     <header className="header">
      <div className="header-content">
        <h1>Welcome to TrendyStyle</h1>
        <p>Your one-stop shop for modern fashion</p>
        {/* <a href="/product" className="header-btn">Shop Now</a> */}
        <Link to="/signup" className="header-btn">Shop Now</Link>
      </div>
    </header>
    <div className="product-container">

      {Product.map((item, ind) => (
        <div className="product-card" key={ind}>
          <img className="product-img" src={item.img} alt={item.name} />
          <div className="product-details">
            <h3>{item.name}</h3>
            <p className="category">{item.category}</p>
            <p className="desc">{item.desc}</p>
            <div className="info">
              <span>Price: ₹{item.price}</span>
              <span>Rating: ⭐{item.rating}</span>
              <span>{item.review} reviews</span>
            </div>
            <button className="add-btn" onClick={() => handleCart(item)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home; 


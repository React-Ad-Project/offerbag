import React from "react";
import "./index.css";

const Card = (props) => {
  return (
    <div className="mainCard">
      <div className="imageContainer">
        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
          alt="Sample"
        />
      </div>
      <div className="cardBottom">
        <div className="Name">
          <p>{props.data.name}</p>
        </div>
        <div className="price">
          <del>₹{props.data.price}</del>
          <p>₹{props.data.off_price}</p>
        </div>
        <div className="branding">
          <img
            src="https://www.nicepng.com/png/detail/790-7909408_flipkart-accessories-for-mobile-headphones-tablet-icon-of.png"
            alt="Sample"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

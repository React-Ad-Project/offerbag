import { Button } from "antd";
import React from "react";
import "./index.css";

const Card = (props) => {
  return (
    <div className="mainCard">
      <div className="imageContainer">
        <img src={props.data.imgUrl} alt="Sample" />
      </div>
      <div className="cardBottom">
        <div className="Name">
          <p>{props.data.name}</p>
        </div>
        <div className="price">
          <p>₹{props.data.off_price}</p>
          <del>₹{props.data.price}</del>
        </div>
        <div className="buttonContainer">
          <a href={props.data.link}>
            <Button type="default" className="buyNowButton">
              Buy
            </Button>
          </a>
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

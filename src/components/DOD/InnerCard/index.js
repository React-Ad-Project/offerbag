import { Button } from "antd";
import React from "react";
import "./index.css";

const InnerCard = (props) => {
  return (
    <div className="innerCard">
      <div className="row1">
        <img
          src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt="something"
        ></img>
        <h2>Name of Product</h2>
        <h2 className="price">₹24,999</h2>
        <h2>
          <del>₹26,999</del>
        </h2>
        <Button type="default" className="innerButton">
          Buy
        </Button>
      </div>
      <div className="row2">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81nEs%2Bl5UgL._SL1500_.jpg"
          alt="something"
        ></img>
      </div>
    </div>
  );
};

export default InnerCard;

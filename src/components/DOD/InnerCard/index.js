import { Button } from "antd";
import React from "react";
import "./index.css";
import Amazon from "./amazon.png";
import Flipkart from "./flipkart.jpeg";

const InnerCard = (props) => {
  return (
    <div className="innerCard">
      <div className="row1">
        <img
          src={props.data.provider === "amazon" ? Amazon : Flipkart}
          alt="something"
        ></img>
        <h2>{props.data.name}</h2>
        <h2 className="price">₹{props.data.price}</h2>
        <h2>
          <del>₹{props.data.off_price}</del>
        </h2>
        <a href={props.data.link}>
          <Button type="default" className="innerButton">
            Buy
          </Button>
        </a>
      </div>
      <div className="row2">
        <img src={props.data.imgUrl} alt="something"></img>
      </div>
    </div>
  );
};

export default InnerCard;

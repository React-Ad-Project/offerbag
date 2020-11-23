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
        <h2>{props.data.name}</h2>
        <h2 className="price">{props.data.price}</h2>
        <h2>
          <del>{props.data.off_price}</del>
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

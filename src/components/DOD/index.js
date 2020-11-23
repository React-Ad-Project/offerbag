import React from "react";
import { Carousel } from "antd";
import "./index.css";

import "./InnerCard";
import InnerCard from "./InnerCard";

const DOD = (props) => {
  return (
    <div className="DodCard">
      <Carousel autoplay dotPosition="bottom">
        <InnerCard />
        <InnerCard />
        <InnerCard />
      </Carousel>
    </div>
  );
};

export default DOD;

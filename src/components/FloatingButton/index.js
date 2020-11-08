import { FilterFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./index.css";
import React from "react";

const FloatingButton = () => {
  return (
    <div className="floatingButtonContainer">
      <Link to="/filter">
        <FilterFilled className="floatingButton" />
      </Link>
    </div>
  );
};

export default FloatingButton;

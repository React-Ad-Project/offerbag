import React from "react";
import "./index.css";

import DOD from "../DOD";

const Header = () => {
  return (
    <div className="topHeader">
      <div className="header">
        <div>
          <p>Happy Shopping!</p>
          <h2>Deals of the Day</h2>
        </div>
        <DOD />
      </div>
    </div>
  );
};

export default Header;

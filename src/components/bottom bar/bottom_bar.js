import React from "react";
import "./bottom_bar.css";
import { HomeOutlined, SearchOutlined, HeartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const BottomBar = () => {
  return (
    <div className="bottom-bar-main">
      <Link to="/">
        <div class="bottom-bar-item">
          <HomeOutlined />
          <span>Home</span>
        </div>
      </Link>
      <Link to="/search">
        <div class="bottom-bar-item">
          <SearchOutlined />
          <span>Discover</span>
        </div>
      </Link>
      <Link to="/">
        <div class="bottom-bar-item">
          <HeartOutlined />
          <span>Favourites</span>
        </div>
      </Link>
    </div>
  );
};

export default BottomBar;

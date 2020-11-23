import React from 'react';
import './bottom_bar.css'
import { HomeOutlined, SearchOutlined, InboxOutlined,UserOutlined } from '@ant-design/icons';
const BottomBar = () => {
  return (
    <div className="bottom-bar-main">
      <div class="bottom-bar-item">
        <HomeOutlined />
        <span>Home</span>
      </div>
      <div class="bottom-bar-item">
        <SearchOutlined />
        <span>Discover</span>
      </div>
      <div class="bottom-bar-item">
        <InboxOutlined />
        <span>Category</span>
      </div> 
      <div class="bottom-bar-item">
        <UserOutlined />
        <span>Me</span>
      </div> 

    </div>
  );
}

export default BottomBar;

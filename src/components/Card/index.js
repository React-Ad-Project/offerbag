import React,{useState} from 'react';
import './index.css';



const Card  = () => {
  
    return(
        <div className="mainCard">
            <div className="imageContainer">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg" alt="Sample" />
            </div>
            <div className="cardBottom">
            <div className="Name">
                    <p>Product Name</p>
                </div>
                <div className="price">
                <del>$3.99</del>
                <p>$1.99</p>
                </div>
                <div className="branding">
                    <img src="https://www.nicepng.com/png/detail/790-7909408_flipkart-accessories-for-mobile-headphones-tablet-icon-of.png" alt="Sample" />
                </div>
            </div>
        </div>

    )
}

export default Card;
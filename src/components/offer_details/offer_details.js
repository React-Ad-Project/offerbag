import React from 'react'
import './offer_details.css'

export default function Offer_details(props) {
   
    return (
        <div className="details-main">
            <div className="detail-img">
                <img className="detail-img" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"/>
            </div>
            <div className="desc-main">
            <div className="detail-heading">
                 <h1>Fantasy T-shirt</h1>
            </div>
            <div className="detail-price">
               
               <del>$12.99</del>
               <h4>$12.99</h4>
            </div>
            <div className="detail-description">
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.</p>

            </div>
            <button type="button" class="btn btn-primary btn-md mr-1 mb-2">Buy now</button>
            </div>
        
        </div>


    )
}

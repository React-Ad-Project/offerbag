import React from 'react'
import { withRouter } from 'react-router'
import './offer_details.css'

function Offer_details({location}) {
    console.log(location.state.name)
   
    return (
        <div className="details-main">
            <div className="detail-img">
                <img className="detail-img" src={location.state.link}/>
            </div>
            <div className="desc-main">
            <div className="detail-heading">
                 <h1>{location.state.name}</h1>
            </div>
            <div className="detail-price">
               
               <del>{location.state.price}</del>
               <h4>{location.state.off_price}</h4>
            </div>
            <div className="detail-description">
              <p>{location.state.description}</p>

            </div>
            <button type="button" class="btn btn-primary btn-md mr-1 mb-2"><a href={location.state.link}>Buy now</a></button>
            </div>
        
        </div>


    )
}
export default withRouter(Offer_details)

import React from "react";
import "../../styles/products/product-card-large.scss";
import LogoLiner from "../brands/LogoLiner";

const ProductCardLarge = ({ imgUrl, name, description }) => {
  return (
    <>
      <div className="col-xs-12 col-md-6 offset-md-3 product-card-large-wrapper">
        <div className="row product-card-content">
          <div className="col-xs-12 col-md-4 img-wrapper">
            <img className="img-fluid large-image" src={imgUrl}></img>
          </div>
          <div className="col-xs-12 col-md-8 text">
            <div className="row">
              <LogoLiner></LogoLiner>
            </div>
            <div className="row">
              <span className="name"> {name} </span>
            </div>
            <div className="row">
              <div className="col-3 ornament">__________</div>
              <div className="col-9 description">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardLarge;

// <LogoLiner></LogoLiner>
//             <div className="row description">
//               <span> {name} </span>
//             </div>
//             <div className="row hehe">
//               <div className="col-xs-6">xxxx</div>
//               <div className="col-xs-6 ">{description}</div>
//             </div>
//           </div>

import React from "react";
import "../styles/home/promotion-box.scss";

const PromotionBox = ({title, description, logoUrl}) => {
  return (
    <>
      <div className="col-xs-12 col-md-4 col-lg-4 promotion-box-wrapper">
        <div className="row promotion-box-content">
          <div className="col-4 logo-box">
          <img className="logo" src={logoUrl}></img>
          </div>
          <div className="col-8">
            <p className="promo-title">{title}</p>
            <p className="promo-desc">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromotionBox;

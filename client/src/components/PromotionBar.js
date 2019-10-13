import React from "react";
import "../styles/home/promotion-bar.scss";

const PromotionBar = ({ content }) => {
  return (
    <div className="promotion-bar">
      <p className="mx-0 my-0 promotion-text">{content}</p>
    </div>
  );
};

export default PromotionBar;

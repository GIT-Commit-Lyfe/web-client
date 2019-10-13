import React from "react";
import "../../styles/products/product-description.scss";

const ProductDescription = props => {
  const { description } = props;
  return (
    <div className="row description-wrapper">
      <div className="bg-drop"></div>
      <h4 className="title">Product Description</h4>
      <hr />
      <span className="long-text">{description}</span>
    </div>
  );
};

export default ProductDescription;

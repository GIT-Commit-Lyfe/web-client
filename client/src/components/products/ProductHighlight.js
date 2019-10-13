import React from "react";
// fetch images from cdn
import condition_prefix from "../../assets/condition_prefix.png";
import country_prefix from "../../assets/country_prefix.png";
import accompanied_prefix from "../../assets/accompanied_prefix.png";
import year_prefix from "../../assets/year_prefix.png";
import "../../styles/products/product-description.scss";

const ProductHighlight = () => {
  return (
    <div className="py-2 container">
      <div className="product-highlight row">
        <div className="col-xs-12 col-md-12">
          <ul className="border mx-0 px-0 my-0">
            <li className="mx-1 px-1">Condition</li>
            <li>:</li>
            <li className="mx-0 px-0">Used everyday</li>
          </ul>
          <ul className="border mx-0 px-0 my-0">
            <li className="mx-1 px-1">From</li>
            <li>:</li>
            <li className="mx-0 px-0">Russia</li>
          </ul>
          <ul className="border mx-0 px-0 my-0">
            <li className="mx-1 px-1">Year</li>
            <li>:</li>
            <li className="mx-0 px-0">1992</li>
          </ul>
          <ul className="border mx-0 px-0 my-0">
            <li className="mx-1 px-1">Accompanied</li>
            <li>:</li>
            <li className="mx-0 px-0">
              Kata-kata panjang biar turun hehehehe gimana jadinya box nya
              kalaupanjang2 ini harus di handle dari BE max wordnya
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlight;

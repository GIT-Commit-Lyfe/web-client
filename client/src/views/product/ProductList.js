import React from "react";

import ProductListCard from "../../components/products/ProductListCard";
import Carousel from "../../components/Carousel";
// import PromotionBox from "../../components/PromotionBox"
import SidebarFilter from "../../components/SidebarFilter";

import watchImg1 from "../../assets/watch1.jpeg"; // should fetch from store and loop obj
// import promoLogo3 from "../../assets/logo/credit_card.png" //should fetch from cdn
// import promoLogo1 from "../../assets/logo/shipping.png" //should fetch from cdn
// import promoLogo2 from "../../assets/logo/warranty.png" //should fetch from cdn

import "../../styles/products/product-list.scss";

const ProductList = () => {
  return (
    <>
      <Carousel></Carousel>
      <div className="container">
        <div className="row pt-3">
          <div className="col-md-6">
            <p>Product Title</p>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-9 text-right">
                <p className="">114 Items | Sort By</p>
              </div>
              <div className="col-md-3 ml-auto">
                <select>
                  <option value="grapefruit">Relevance</option>
                  <option value="lime">Rating</option>
                  <option selected value="coconut">
                    Price high
                  </option>
                  <option value="mango">Price low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <SidebarFilter></SidebarFilter>
          </div>
          <div className="col-md-9">
            <div className="row">
              <ProductListCard size={4} image={watchImg1}></ProductListCard>
              <ProductListCard size={4} image={watchImg1}></ProductListCard>
              <ProductListCard size={4} image={watchImg1}></ProductListCard>
            </div>
            <div className="row">
              <ProductListCard size={4} image={watchImg1}></ProductListCard>
              <ProductListCard size={4} image={watchImg1}></ProductListCard>
              <ProductListCard size={4} image={watchImg1}></ProductListCard>
            </div>
            <div className="row">
              <ProductListCard size={4} image={watchImg1}></ProductListCard>
              <ProductListCard size={4} image={watchImg1}></ProductListCard>
              <ProductListCard size={4} image={watchImg1}></ProductListCard>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ProductList;

//   <div className="promotion-box-spread">
//     <PromotionBox title={"Free Shipping"} description={"in Germany"} logoUrl={promoLogo1}> </PromotionBox>
//     <PromotionBox title={"One Year Warranty"} description={"Full Coverage"} logoUrl={promoLogo2}> </PromotionBox>
//     <PromotionBox title={"Pay Securely"} description={"100% Safe & Secure Checkout"} logoUrl={promoLogo3}></PromotionBox>
//   </div>

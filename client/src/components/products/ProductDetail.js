import React from "react";
import Navbar from "../Navbar";
import "../../styles/products/product-detail.scss";
import watchImg2 from "../../assets/watch2.jpeg"; // should fetch from store and loop obj
import watchImg1 from "../../assets/watch1.jpeg"; // should fetch from store and loop obj
import watchImg3 from "../../assets/watch3.jpeg"; // should fetch from store and loop obj


import ProductSimilar from "./ProductSimilar";
import ProductDescription from "../../views/product/ProductDescription";
import ProductHighlight from "./ProductHighlight";

const ProductDetail = () => {
  const desc = `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`;
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
          <div className="current-product-images col-xs-12 col-md-1 py-2">
            <div className="py-5 px-0  container">
              <img className="img-fluid py-1" alt="plantimage" src={watchImg2}></img>
              <img className="img-fluid py-1" alt="plantimage" src={watchImg1}></img>
              <img className="img-fluid py-1" alt="plantimage" src={watchImg3}></img>
              <img className="img-fluid py-1" alt="plantimage" src={watchImg1}></img>
            </div>
          </div>
          <div className=" col-xs-12 col-md-5 px-2">
            <div className=" py-5 container product-detail-wrapper">
              <img className="img-fluid" alt="plantimage" src={watchImg2}></img>
            </div>
          </div>
          <div className="right-product-detail col-xs-12 col-md-6 px-2 py-2">
            <div className="py-5 container right-textbox my-2">
              <p className="pt-0 product-title">Rolei P2W00 Promenade</p>
              <p className="product-seller">by 1909Regei</p>
              <hr/>
              <div className="row px-3 py-1">
                <ProductHighlight></ProductHighlight>
              </div>
              <div className="row producut-button">
                <div className="col-md-12 col-sm-12 px-4 py-2">
                  <button className="product-page-btn btn btn-block">Buy </button>       
                  <button className="product-page-btn btn btn-block">Send A Bid</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductSimilar></ProductSimilar>
        <ProductDescription description={desc}></ProductDescription>
      </div>
    </>
  );
};

export default ProductDetail;
// <div className="container-fluid detail-wrapper">
// <div className="row justify-content-center">
//  <div className=" col-xs-12 col-md-6 px-2 py-2">
//   <div className="py-5 px-5 container">
//     <img className="img-fluid" alt="plantimage" src={watchImg2}></img>
//   </div>
// </div>
//   <div className=" col-xs-12 col-md-6 px-2 py-2">
//   <div className="py-5 px-5 container">
//     <img className="img-fluid" alt="plantimage" src={watchImg2}></img>
//   </div>
// </div>
// <div className="col-xs-12 col-md-6 px-2 py-2">
//     <div className="py-5 container">
//         <h1 className="domaine-mdi pb-3 pt-0">Rolex X12HR3</h1>
//         <p className="domaine-disp py-3">Supposedly this is a product description</p>
//         <div className="row">
//             <div className="col-3 border">
//                 <div className="row"><span>Condition:</span></div>
//                 <div className="row"><span>Year:</span></div>
//                 <div className="row"><span>Accompanied:</span></div>
//                 <div className="row"><span>From:</span></div>
//             </div>
//             <div className="col-8 border">
//                 <div className="row"><span>Good</span></div>
//                 <div className="row"><span>1982</span></div>
//                 <div className="row"><span>Paper, Certificate, Hahaha, Apalagi, Yang bikin turun textnya, Jadi gimana coba</span></div>
//                 <div className="row"><span>Russia</span></div>
//             </div>
//         </div>
//         <div className="row justify-content-start">
//             <div className="btn btn-light mr-3 my-3">Buy</div>
//             <div className="btn btn-light mx-3 my-3">Send a bid</div>

//         </div>
//     </div>
// </div>
// </div>
// </div>

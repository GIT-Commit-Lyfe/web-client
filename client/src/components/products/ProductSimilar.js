import React from "react";
import leftArrow from '../../assets/left_arrow.png'
import rightArrow from '../../assets/right_arrow.png'
import '../../styles/products/product-similar.scss'
import watchImg1 from "../../assets/watch1.jpeg" // should fetch from store and loop obj
import watchImg2 from "../../assets/watch2.jpeg" // should fetch from store and loop obj
import watchImg3 from "../../assets/watch3.jpeg" // should fetch from store and loop obj

const ProductSimilar = () => {
  return (
    <>
      <div className="row similar-wrapper">
        <div className="col-1 arrow-left">
            <img alt="arrow" className="arrow" src={leftArrow}></img>
        </div>
       
        <div className="col-2 similar-display"><span className="img-centerer"></span><img alt="similar-img px-0" className="similar-img" src={watchImg1}></img></div>
        <div className="col-2 similar-display"><span className="img-centerer"></span><img alt="similar-img px-0" className="similar-img" src={watchImg2}></img></div>
        <div className="col-2 similar-display"><span className="img-centerer"></span><img alt="similar-img px-0" className="similar-img" src={watchImg1}></img></div>
        <div className="col-2 similar-display"><span className="img-centerer"></span><img alt="similar-img px-0" className="similar-img" src={watchImg2}></img></div>
        <div className="col-2 similar-display"><span className="img-centerer"></span><img alt="similar-img px-0" className="similar-img" src={watchImg3}></img></div>
        
        <div className="col-1 arrow-right">
            <img alt="arrow" className="arrow" src={rightArrow}></img>
        </div>
      </div>
    </>
  );
};

export default ProductSimilar;

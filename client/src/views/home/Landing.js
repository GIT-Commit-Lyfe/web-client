import React from "react";
import "../../styles/home/landing.scss";
import PromotionHeaderLarge from "../../components/PromotionHeaderLarge";

import PromotionBox from "../../components/PromotionBox"; //should fetch from cdn
import headerImg from "../../assets/landing-header.jpeg"; //should fetch from cdn

import watchImg1 from "../../assets/watch1.jpeg"; // should fetch from store and loop obj
import watchImg2 from "../../assets/watch2.jpeg"; // should fetch from store and loop obj
import watchImg3 from "../../assets/watch3.jpeg"; // should fetch from store and loop obj

import promoLogo3 from "../../assets/logo/credit_card.png"; //should fetch from cdn
import promoLogo1 from "../../assets/logo/shipping.png"; //should fetch from cdn
import promoLogo2 from "../../assets/logo/warranty.png"; //should fetch from cdn
import leftQuote from "../../assets/quoteleft.png";
import ProductCardLarge from "../../components/products/ProductCardLarge";

const Landing = () => {
  return (
    <>
      <PromotionHeaderLarge img={headerImg}></PromotionHeaderLarge>
      <div className="promotion-box-spread">
        <PromotionBox
          title={"Free Shipping"}
          description={"in Germany"}
          logoUrl={promoLogo1}
        >
        </PromotionBox>
        <PromotionBox
          title={"One Year Warranty"}
          description={"Full Coverage"}
          logoUrl={promoLogo2}
        >
        </PromotionBox>
        <PromotionBox
          title={"Pay Securely"}
          description={"100% Safe & Secure Checkout"}
          logoUrl={promoLogo3}
        ></PromotionBox>
      </div>
      <div className="landing-product-list">
        <ProductCardLarge
          imgUrl={watchImg1}
          description={
            "Nullam vel purus laoreet, porttitor lorem id, consectetur mi. Pellentesque iaculis, elit ac vestibulum sagittis, ante quam consectetur neque, sed sagittis sem sapien sit amet dui."
          }
          name={"The Neo Manner"}
        ></ProductCardLarge>
        <ProductCardLarge
          imgUrl={watchImg3}
          description={
            "Nullam vel purus laoreet, porttitor lorem id, consectetur mi. Pellentesque iaculis, elit ac vestibulum sagittis, ante quam consectetur neque, sed sagittis sem sapien sit amet dui."
          }
          name={"The Paleo Manner"}
        ></ProductCardLarge>
        <ProductCardLarge
          imgUrl={watchImg2}
          description={
            "Nullam vel purus laoreet, porttitor lorem id, consectetur mi. Pellentesque iaculis, elit ac vestibulum sagittis, ante quam consectetur neque, sed sagittis sem sapien sit amet dui."
          }
          name={"The Meso Manner"}
        ></ProductCardLarge>
      </div>
      <div className="row jumbotron-quotes-wrapper">
        <div className="row quotes-box">
          <div className="col-2">
            <img src={leftQuote} alt="leftqoute" />
          </div>
          <div className="col-8 text">
            <span>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt
            </span>
          </div>
          <div className="col-2 right">
            <img src={leftQuote} alt="leftqoute" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;

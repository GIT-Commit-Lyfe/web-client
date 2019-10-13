import React from "react";
import Chartester from "../../components/portofolios/Chartester";
import Navbar from "../../components/Navbar";
import ProductSymbol from "../../components/products/ProductSymbol";
import TimeSpread from "../../components/TimeSpread";
import '../../styles/portofolios/my-portofolio.scss'

import watch2 from '../../assets/watch2.jpeg' // should fetch from cdn
import ProductListCard from "../../components/products/ProductListCard";

const MyPortofolio = () => {
  return (
    <>
      <div className="container py-5 border mb-2">
        <div className="row">
        <div className="col-xs-12 col-md-6 chart-info-container">
          <ProductSymbol name={"Rolei"} year={"1992"}></ProductSymbol>
          <Chartester></Chartester>
          <div className="ts">
            <TimeSpread></TimeSpread>
          </div>
          <div className="">
            <button>Sell</button>
          </div>
        </div>
          <div className="col-md-6">
            <ProductListCard size={12} image={watch2}></ProductListCard>
          </div>
        </div>
      </div>
      <div className="container py-5 border mb-2">
      <div className="row">
      <div className="col-xs-12 col-md-6 chart-info-container">
        <ProductSymbol name={"Rolei"} year={"1992"}></ProductSymbol>
        <Chartester></Chartester>
        <div className="ts">
          <TimeSpread></TimeSpread>
        </div>
        <div className="">
          <button>Sell</button>
        </div>
      </div>
        <div className="col-md-6">
          <ProductListCard size={12} image={watch2}></ProductListCard>
        </div>
      </div>
    </div>
    </>
  );
};

export default MyPortofolio;

import React from "react";
import promo2 from "../assets/watch_2.jpg"; //take from promo cdn
import promo1 from "../assets/watch_1.jpg";
import promo3 from "../assets/watch_3.jpg";

export default function Carousel() {
  return (
    <div class="container pt-5">
      <div class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div class="col-sm">
                <img
                  style={{ height: "175px" }}
                  class="d-block w-100"
                  src={promo1}
                  alt="1 slide"
                />
              </div>
              <div class="col-sm">
                <img
                  style={{ height: "175px" }}
                  class="d-block w-100"
                  src={promo2}
                  alt="2 slide"
                />
              </div>
              <div class="col-sm">
                <img
                  style={{ height: "175px" }}
                  class="d-block w-100"
                  src={promo3}
                  alt="2 slide"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-sm">
                <img
                  style={{ height: "175px" }}
                  class="d-block w-100"
                  src={promo3}
                  alt="2 slide"
                />
              </div>
              <div class="col-sm">
                <img
                  style={{ height: "175px" }}
                  class="d-block w-100"
                  src={promo2}
                  alt="2 slide"
                />
              </div>
              <div class="col-sm">
                <img
                  style={{ height: "175px" }}
                  class="d-block w-100"
                  src={promo1}
                  alt="2 slide"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

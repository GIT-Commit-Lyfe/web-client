import React from "react";
import expandArrow from "../assets/expand.png";
import "../styles/products/product-list.scss";

// check on button in focus

const SidebarFilter = () => {
  return (
    <>
    <div className="border">
      <div className="py-2">
      <span className="px-3">Product Filter</span>
      </div>
      <hr className="my-0"></hr>
        <div className="border-right-0 border-left-0 border-top-0 my-0">
          <h2 className="my-0">
            <button
              className="btn title-sidebar py-0 my-0"
              type="button"
              data-toggle="collapse"
              data-target=".multi-collapse"
              aria-expanded="false"
              aria-controls="multiCollapseExample1 multiCollapseExample2"
            >
              EXPAND ALL
            </button>
          </h2>
        </div>
        <hr className="my-0" />
        <div
          className="border-0"
          data-toggle="collapse"
          data-target="#multiCollapseExample1"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          <h2 className="mb-0">
            <button className="btn title-sidebar" type="button">
              Material
            </button>
            <img style={{ width: "2vh" }} src={expandArrow}></img>
          </h2>
        </div>
        <div className="row">
          <div
            className="collapse multi-collapse"
            id="multiCollapseExample1"
            aria-labelledby="headingOne"
          >
            <div className="card-body">
              <form className="px-2">
                <label className="form-check">
                  <input className="form-check-input" type="checkbox" value="" />
                  <span className="form-check-label">Mersedes Benz</span>
                </label>
                <label className="form-check">
                  <input className="form-check-input" type="checkbox" value="" />
                  <span className="form-check-label">Nissan Altima</span>
                </label>
                <label className="form-check">
                  <input className="form-check-input" type="checkbox" value="" />
                  <span className="form-check-label">Another Brand</span>
                </label>
              </form>
            </div>
          </div>
        </div>
        <div
          className="border-0"
          data-toggle="collapse"
          data-target="#multiCollapseExample2"
          aria-expanded="false"
          aria-controls="multiCollapseExample2"
        >
          <h2 className="title-sidebar mb-0">
            <button className="btn">
              Color
            </button>
            <img style={{ width: "2vh" }} src={expandArrow}></img>
          </h2>
        </div>
        <div className="row">
          <div
            className="collapse multi-collapse"
            id="multiCollapseExample2"
            aria-labelledby="headingOne"
          >
            <div className="card-body">
              <form className="px-2">
                <label className="form-check">
                  <input className="form-check-input" type="checkbox" value="" />
                  <span className="form-check-label">Red</span>
                </label>
                <label className="form-check">
                  <input className="form-check-input" type="checkbox" value="" />
                  <span className="form-check-label">Black</span>
                </label>
                <label className="form-check">
                  <input className="form-check-input" type="checkbox" value="" />
                  <span className="form-check-label">Army Green</span>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarFilter;

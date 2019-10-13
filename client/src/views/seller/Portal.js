import React, { useState, useEffect } from "react";
import "../../styles/seller/portal.scss";
import SingleUpload from "../../components/SingleUpload";
import { connect } from "react-redux";
import Carousel from "../../components/Carousel";


/**
 * needs refactoring
 * i think we can loop this part
 * fetch from store the type,and pass down to the upload component
 **/

const Portal = ({ seller }) => {
  const {
    cityList,
    companionList,
    conditionList,
    countryList,
    priceList,
    typeList,
    yearList
  } = seller;
  const [values, setValues] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    e.preventDefault();
    console.log(e.target.value);

    // setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  return (
   <>
   <Carousel></Carousel>
    <div className="container portal-wrapper">
    <h3 className="text-center">Seller Portal</h3>
      <div className="upload-box row">
        <div className="col-xs-6 col-md-3">
          <div className="inner-box">
            <SingleUpload></SingleUpload>
            <div className="text">Top</div>
          </div>
        </div>
        <div className="col-xs-6 col-md-3">
          <div className="inner-box">
            <SingleUpload></SingleUpload>
            <div className="text">Crown</div>
          </div>
        </div>
        <div className="col-xs-6 col-md-3">
          <div className="inner-box">
            <SingleUpload></SingleUpload>
            <div className="text">Case Back</div>
          </div>
        </div>
        <div className="col-xs-6 col-md-3">
          <div className="inner-box">
            <SingleUpload></SingleUpload>
            <div className="text">Show Off</div>
          </div>
        </div>
      </div>
    
      <div className="bottom-box-picker">
        <h4 className="text-center pb-2">Product Detail</h4>
        <div className="row justify-content-center">
          <div className="col-xs-6 col-md-2 py-2">
            <select onChange={e => handleChange(e)}>
              {typeList &&
                typeList.map((type, i) => {
                  return (
                    <option key={i} value={type.id}>
                      {type.name}
                    </option>
                  );
                })}
            </select>
            <p className="py-2">Condition :</p>
            {conditionList &&
              conditionList.map((condition, i) => {
                return (
                  <div className="radio">
                    <label>
                      <input type="radio" value={condition.id} />
                      <span>{condition.name}</span>
                    </label>
                  </div>
                );
              })}
          </div>
          <div className="col-xs-6 col-md-2 py-2">
            <select className="py-2" onChange={e => handleChange(e)}>
              {typeList &&
                typeList.map((type, i) => {
                  return (
                    <option key={i} value={type.id}>
                      {type.name}
                    </option>
                  );
                })}
            </select>
            <p className="py-2">Companion :</p>
            {companionList &&
              companionList.map((companion, i) => {
                return (
                  <div className="radio">
                    <label>
                      <input type="radio" value={companion.id} />
                      <span>{companion.name}</span>
                    </label>
                  </div>
                );
              })}
          </div>
          <div className="col-xs-6 col-md-3 py-2">
            <select onChange={e => handleChange(e)}>
              {yearList &&
                yearList.map((year, i) => {
                  return (
                    <option key={i} value={year}>
                      {year}
                    </option>
                  );
                })}
            </select>
            <br />
            <select className="my-2" onChange={e => handleChange(e)}>
              {countryList &&
                countryList.map((country, i) => {
                  return (
                    <option key={i} value={country}>
                      {country}
                    </option>
                  );
                })}
            </select>
            <br />

            <select onChange={e => handleChange(e)}>
              {cityList &&
                cityList.map((city, i) => {
                  return (
                    <option key={i} value={city}>
                      {city}
                    </option>
                  );
                })}
            </select>
            <br />
            <select className="my-2" onChange={e => handleChange(e)}>
              {yearList &&
                yearList.map((year, i) => {
                  return (
                    <option key={i} value={year}>
                      {year}
                    </option>
                  );
                })}
            </select>
            <br />
          </div>
          <div className="col-xs-6 col-md-5 py-2">
            <form>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Additional Information</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

const mapStateToProps = state => {
  return { seller: state.seller };
};

const mapDispatchToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portal);

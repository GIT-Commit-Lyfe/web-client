import React from "react";

const TimeSpread = () => {
  return (
    <>
      <div className="row timespread-wrapper">
        <a href="http://" className="active col-3">1w</a>
        <a href="http://" className="col-3">1m</a>
        <a href="http://" className="col-3">1y</a>
        <a href="http://" className="col-3">5y</a>
      </div>
    </>
  );
};

export default TimeSpread;
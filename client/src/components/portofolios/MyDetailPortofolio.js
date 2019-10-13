import React, { Component } from "react";
import watchImg1 from "../../assets/watch1.jpeg"; // should fetch from store and loop obj
import Chart from "./Chart";
import axios from "axios";

class MyDetailPortofolio extends Component {
  constructor() {
    super();
    this.state = {
      chartData: null
    };
  }

  componentDidMount() {
    this.getChartData();
  }

  async getChartData() {
    try {
      console.log("invoked");
      let { data } = await axios.get("http://localhost:4000/data");
      console.log(data);
      this.setState({ chartData: data }, () => {
        console.log(this.state.chartData, "papappapa");
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <div className="container border">
          <div className="row">
            <div className="col-xs-12 col-md-4 border">
              <img
                alt=""
                className="img-fluid my-portofolio-image"
                src={watchImg1}
              ></img>
            </div>
            <div className="col-xs-12 col-md-5 border">
              {this.state.chartData ? (
                <Chart
                  chartData={this.state.chartData}
                  location="Massachusetts"
                  legendPosition="bottom"
                />
              ) : (
                <p>loading..</p>
              )}
            </div>
            <div className="col-xs-12 col-md-3 border">.kanan</div>
          </div>
        </div>
      </>
    );
  }
}

export default MyDetailPortofolio;

import React, { Component } from "react";
import LineChart from "./LineChart";

function getData() {
  let data = [];

  data.push({
    // title: "Visits",
    data: getRandomDateArray(6)
  });

  return data;
}

function getRandomDateArray(numItems) {
  // Create random array of objects (with date)
  let data = [];
  let baseTime = new Date("2019-05-01T00:00:00").getTime();
  let dayMs = 24 * 60 * 60 * 1000;
  for (var i = 0; i < numItems; i++) {
    data.push({
      time: new Date(baseTime + i * dayMs),
      value: Math.round(20 + 80 * Math.random())
    });
  }
  return data;
}

function getRandomArray(numItems) {
  // Create random array of objects
  let names = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let data = [];
  for (var i = 0; i < numItems; i++) {
    data.push({
      label: names[i],
      value: Math.round(20 + 80 * Math.random())
    });
  }
  return data;
}

export default class Chartester extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getData()
    };
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        data: getData()
      });
    }, 5000);
  }

  render() {
    //   console.log(this.state, 'ini bukan')
    return (
      <>
        {this.state.data.length ? (
          <LineChart
            data={this.state.data[0].data}
            // title={this.state.data[0].title}
            color="#CFBA9B"
          />
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  }
}

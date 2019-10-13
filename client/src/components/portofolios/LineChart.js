import React, { Component } from "react";
import Chart from "chart.js";

export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.map(d => d.time);
    this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
    this.myChart.update();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: "line",
      options: {
        maintainAspectRatio: true,
        responsive: true,
        title: {
          display: false
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                unit: "day"
              },
              gridLines: {
                display:false
              },
              ticks : {
                lineHeight: 0.3,
                padding: 0,
                fontColor: "#8f8f8f",
                fontFamily:
                  'Montserrat, sans-serif, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !default'
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                lineHeight: 0.3,
                padding: 0.4,
                fontColor: "#8f8f8f",
                fontFamily:
                  'Montserrat, sans-serif, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !default'
              },
              gridLines: {
                display:false
              },
              position: "right"
            }
          ]
        }
      },
      data: {
        labels: this.props.data.map(d => d.time),
        datasets: [
          {
            // label: this.props.title,
            data: this.props.data.map(d => d.value),
            backgroundColor: "rgba(204, 184, 154, 0.2)",
            borderColor: "rgba(186, 167, 138, 1)",
            // fill: false,
            pointRadius: 0,
            borderWidth: 1,
            lineTension: 0
          }
        ]
      }
    });
  }

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

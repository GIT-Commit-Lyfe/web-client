// import React, { Component } from "react";
// import socketIOClient from "socket.io-client";
// class Io extends Component {
//   constructor() {
//     super();
//     this.state = {
//       response: false,
//       endpoint: "http://127.0.0.1:4000",
//       data : {
//         labels: [],
//         datasets: [
//              {
//                  label: [],
//                  data: [],
//              }
//          ]
//      },
//       myChart : '',
//       context : "",
//     };
//   }
//   componentDidMount() {
//     const { endpoint } = this.state;
//     const socket = socketIOClient(endpoint);
//     socket.on("vote", function(response) {
//       let i = 0;

//       for (let key in response) {
//         this.state.data.labels[i] = response[i]._id;
//         this.state.data.datasets[0].data[i] = response[i].total_vote;
//         i++;
//       }

//       // Update chart
//       myChart.update();
//     });
//   }
//   render() {
//     const { response } = this.state;
//     return (
//       <div style={{ textAlign: "center" }}>
//         {response ? (
//           <p>The temperature in Florence is: {response} °F</p>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     );
//   }
// }
// export default Io;

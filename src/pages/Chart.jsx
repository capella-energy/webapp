import React, { PureComponent } from 'react';
import {
  LineChart, Line,
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import "../assets/Dashboard.css";

// https://recharts.org/en-US/guide/getting-started
const data1 = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

const renderLineChart = (
  <LineChart width={400} height={400} data={data1}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default class MyChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <>
        <div className="graphs">
          <div>
            <BarChart
              className="aBar"
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              {/* <XAxis dataKey="name" /> */}
              {/* <YAxis /> */}
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#01203a" />
              <Bar dataKey="uv" fill="#e89c35" />
            </BarChart>
          </div>



          {/* Right Side */}
          <div>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              {/* <XAxis dataKey="name" /> */}
              {/* <YAxis /> */}
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
            </BarChart>
          </div>
        </div>


        {/* <LineChart width={600} height={300} data={data1} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart> */}
      </>
    );
  }
}
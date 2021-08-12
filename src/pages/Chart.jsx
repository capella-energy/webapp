import React, { PureComponent } from 'react';
import {
  LineChart, Line,
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import "../assets/Dashboard.css";

// https://recharts.org/en-US/guide/getting-started


const data = [
  {
    name: 'Jan', Prod: 4000, Cons: 2400, amt: 2400,
  },
  {
    name: 'Feb', Prod: 3000, Cons: 1398, amt: 2210,
  },
  {
    name: 'Mar', Prod: 2000, Cons: 4700, amt: 2290,
  },
  {
    name: 'Apr', Prod: 2780, Cons: 3908, amt: 2000,
  },
  {
    name: 'May', Prod: 1890, Cons: 4800, amt: 2181,
  },
  {
    name: 'Jun', Prod: 2390, Cons: 3800, amt: 2500,
  },
  {
    name: 'Jul', Prod: 3490, Cons: 4300, amt: 2100,
  },
];

const data1 = [
  {
    name: 'Jan', uv: 4000, Savings: 2400, amt: 2400,
  },
  {
    name: 'Feb', uv: 3000, Savings: 1398, amt: 2210,
  },
  {
    name: 'Mar', uv: 14000, Savings: 9800, amt: 2290,
  },
  {
    name: 'Apr', uv: 2780, Savings: 3908, amt: 2000,
  },
  {
    name: 'May', uv: 1890, Savings: 4800, amt: 2181,
  },
  {
    name: 'Jun', uv: 2390, Savings: 3800, amt: 2500,
  },
  {
    name: 'Jul', uv: 3490, Savings: 4300, amt: 2100,
  },
];

export default class MyChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <>
        <div className="graphs">
          <div className="chartContainer">
            <h6 className="chartTitle">Weekly Production & Consumption</h6>
            <BarChart
              className="aBar"
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20, right: 20, left: 20, bottom: 0,
              }}
            >
              
              <Tooltip />
              <Legend width={140} wrapperStyle={{ top: 20, right: 5,  lineHeight: '20px' }} />
              <XAxis dataKey="name" />
              <Bar dataKey="Prod" fill="#01203a" />
              <Bar dataKey="Cons" fill="#e89c35" />
            </BarChart>

            <BarChart
              className="mobileBar"
              width={430}
              height={250}
              data={data}
              margin={{
                top: 20, right: 20, left: 20, bottom: 0,
              }}
            >
              
              <Tooltip />
              <Legend width={140} wrapperStyle={{ top: 20, right: 5,  lineHeight: '20px' }} />
              <XAxis dataKey="name" />
              <Bar dataKey="Prod" fill="#01203a" />
              <Bar dataKey="Cons" fill="#e89c35" />
            </BarChart>
          </div>

          {/* Right Side */}
          <div className="chartContainer">
          <h6 className="chartTitle">Monthly Savings</h6>
            <BarChart
            className="aBar"
              width={500}
              height={300}
              data={data1}
              margin={{
                top: 5, right: 20, left: 20, bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <Tooltip />
              <Legend width={100} wrapperStyle={{ top: 20, right: 5,  lineHeight: '20px' }} />
              <Bar dataKey="Savings" fill="#e89c35" barSize={35}/>
            </BarChart>

            <BarChart
            className="mobileBar"
              width={430}
              height={250}
              data={data1}
              margin={{
                top: 5, right: 20, left: 20, bottom: 0,
              }}
            >
             <XAxis dataKey="name" />
              <Tooltip />
              <Legend width={100} wrapperStyle={{ top: 20, right: 5,  lineHeight: '20px' }} />
              <Bar dataKey="Savings" fill="#e89c35" barSize={35}/>
            </BarChart>
          </div>
        </div>


      </>
    );
  }
}
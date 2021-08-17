import React, { PureComponent } from 'react';
import {
  LineChart, Line,
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import "./Dashboard.css";

// https://recharts.org/en-US/guide/getting-started


const data = [
  {
    name: 'Mar', Prod: 4000, Cons: 2400,
  },
  {
    name: 'Apr', Prod: 3000, Cons: 1398,
  },
  {
    name: 'May', Prod: 2000, Cons: 4700, 
  },
  {
    name: 'Jun', Prod: 2780, Cons: 3908,
  },
  {
    name: 'Jul', Prod: 1890, Cons: 4800, 
  },
  {
    name: 'Aug', Prod: 2390, Cons: 3800,
  },
  {
    name: 'Sep', Prod: 3490, Cons: 4300, 
  },
];

const data1 = [
  {
    name: 'Mar', Savings: 2400, 
  },
  {
    name: 'Apr', Savings: 1398, 
  },
  {
    name: 'May',Savings: 7000,
  },
  {
    name: 'Jun',  Savings: 3908, 
  },
  {
    name: 'Jul', Savings: 4800, 
  },
  {
    name: 'Aug', Savings: 3800, 
  },
  {
    name: 'Sep',  Savings: 4300, 
  },
];

export default class MyChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <>
        <div className="graphs">
          <div className="chartContainer">
            <div className="innerChartContainer">
            <h6 className="chartTitle">Weekly Production & Consumption</h6>
            <BarChart
              className="aBar"
              width={530}
              height={300}
              data={data}
              margin={{
                top: 20, right: 20, left: 20, bottom: 10,
              }}
            >
              
              <Tooltip />
              <Legend width={140} wrapperStyle={{ top: 10, right: 5,  lineHeight: '20px' }} />
              <XAxis dataKey="name" />
              <Bar dataKey="Prod" fill="#01203a" />
              <Bar dataKey="Cons" fill="#e89c35" />
            </BarChart>

            <BarChart
              className="mobileBar"
              width={350}
              height={200}
              data={data}
              margin={{
                top: 20, right: 20, left: 20, bottom: 0,
              }}
            >
              
              <Tooltip />
              <Legend width={140} wrapperStyle={{ top: 10, right: 5,  lineHeight: '20px' }} />
              <XAxis dataKey="name" />
              <Bar dataKey="Prod" fill="#01203a" />
              <Bar dataKey="Cons" fill="#e89c35" />
            </BarChart>
            </div>
          </div>

          {/* Right Side */}
          <div className="chartContainer">
            <div className="innerChartContainer">
          <h6 className="chartTitle">Monthly Savings</h6>
            <BarChart
            className="aBar"
              width={530}
              height={300}
              data={data1}
              margin={{
                top: 10, right: 20, left: 20, bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <Tooltip />
              <Legend width={100} wrapperStyle={{ top: 10, right: 5,  lineHeight: '20px' }} />
              <Bar dataKey="Savings" fill="#e89c35" barSize={35}/>
            </BarChart>

            <BarChart
            className="mobileBar"
              width={350}
              height={200}
              data={data1}
              margin={{
                top: 5, right: 20, left: 20, bottom: 0,
              }}
            >
             <XAxis dataKey="name" />
              <Tooltip />
              <Legend width={100} wrapperStyle={{ top: 10, right: 5,  lineHeight: '20px' }} />
              <Bar dataKey="Savings" fill="#e89c35" barSize={35}/>
            </BarChart>
            </div>
          </div>
        </div>


      </>
    );
  }
}
import React from "react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { salesDataYear } from "./MockData";
import '../home/Home.css'

const LineGraph = () => {
  return (
    <div className="linegraph">
      <h4 className="chart-title">SALES BY YEAR</h4>
      <ResponsiveContainer width={"90%"} height={300}>
        <LineChart width={600} height={300} data={salesDataYear}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Sales" stroke="#9B3922" />
          <Line type="monotone" dataKey="Profit" stroke="#7c7b7a" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;

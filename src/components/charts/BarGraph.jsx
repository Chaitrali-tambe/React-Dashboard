import React from "react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { salesDataMonth  } from "./MockData";
import '../home/Home.css'

const BarGraph = () => {
  return (
    <div className="bargraph">
      <h4 className="chart-title">SALES BY MONTH</h4>
      <ResponsiveContainer width={"90%"} height={300}>
        
        <BarChart width={400} height={300} data={salesDataMonth}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Sales" fill="#9B3922" />
          <Bar dataKey="Profit" fill="#7c7b7a" />
        </BarChart>
    
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;

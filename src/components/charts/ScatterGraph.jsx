import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { profitByCategoryData } from "./MockData"; // Import the data

const ScatterGraph = () => (
  <div className="scattergraph">
    <h4 className="chart-title">PROFIT BY CATEGORY</h4>

    <ResponsiveContainer width={"90%"} height={300} data={profitByCategoryData}>
      <ScatterChart width={600} height={300}>
        <CartesianGrid />
        <XAxis type="category" dataKey="category" name="Category" />
        <YAxis type="number" dataKey="profit" name="Profit" unit="$" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter name="Profit" data={profitByCategoryData} fill="#481E14" />
      </ScatterChart>
    </ResponsiveContainer>
  </div>
);

export default ScatterGraph;

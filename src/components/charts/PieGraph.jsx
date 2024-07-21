import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { productData } from "./MockData";

const COLORS = ['#0C0C0C', '#F2613F', '#481E14', '#7c7b7a', '#9B3922'];

const PieGraph = () => (
    <div className="piechart">
      <PieChart width={400} height={300} align={'center'}>
      <Pie data={productData} dataKey="sales" nameKey="name" outerRadius={100} fill="#FFF5E1">
        {productData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend width={400} align="center" fontSize={10} />
    </PieChart>
    </div>
  );
  
  export default PieGraph;
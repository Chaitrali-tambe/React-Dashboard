import React from "react";
import BarGraph from "../charts/BarGraph";
import LineGraph from "../charts/LineGraph";
import PieGraph from "../charts/PieGraph";
import ScatterGraph from "../charts/ScatterGraph";
import './Home.css'

const Home = () => {
  return (
    
    <div >
      <LineGraph />
      <div className="flex-div">
      <BarGraph/>
      <PieGraph/>
      </div>
      <ScatterGraph/>
    </div>
  );
};

export default Home;

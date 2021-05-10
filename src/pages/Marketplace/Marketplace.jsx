import React from "react";
import Map from "./Map"; 
import Navbar from "../Navbar/Navbar";
import "../../assets/App.css";
import MarketColumns from "./MarketColumns"


const Marketplace = () => (
  <div className="Marketplace">
    <Navbar />
    <div className="webapp-content">
      <h1 className="section-titles">Find Solar Projects Nearby</h1>
      <Map />
      <MarketColumns/>
    </div>
    
  </div>
)

export default Marketplace;


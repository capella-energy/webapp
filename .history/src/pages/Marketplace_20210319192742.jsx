import React, { useState } from "react";
import Map from "./Map"; 
import Navbar from "./Navbar";

const location = {
  address: "Capella Headquarters",
  lat: 40.662,
  lng: -74.10427,
};

const Marketplace = () => (
  <div className="Marketplace">
    <Navbar />
    <h1 className="section-titles">Find Solar Projects Nearby</h1>
    <Map />
  </div>
)

export default Marketplace;
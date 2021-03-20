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
    <Map />
  </div>
)

export default Marketplace;

/*
{projectData.projects.map(project => (
    <Marker 
    key={project.ID} 
    position={{
      lat: project.lat,
      lng: project.lng
    }}
    /> 
))}
*/
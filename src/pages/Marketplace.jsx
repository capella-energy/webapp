import React, { useState } from "react";
import Map from "./Map"; 
import Navbar from "./Navbar";
import "../assets/App.css";


const location = {
  address: "Capella Headquarters",
  lat: 40.662,
  lng: -74.10427,
};

const Marketplace = () => (
  <div className="Marketplace">
    <Navbar />
    <div className="webapp-content">
      <h1 className="section-titles">Find Solar Projects Nearby</h1>
      <Map />
    </div>
    
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
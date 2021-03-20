import React, { useState } from "react";
import Navbar from "./Navbar";
import {
  GoogleMap, 
  withScriptjs, 
  withGoogleMap,  
  Marker, 
  InfoWindow, 
} from 'react-google-maps';
import '../assets/Marketplace.css'; 
import mapStyles from "./mapStyles"; 
import * as projectData from "./solar-projects.json"; 

const API_KEY = process.env.REACT_APP_APIKEY; 
const libraries = ["places"]; 
const mapContainerStyle = {
  width: '100vw', 
  height: '80vh', 
}; 
const center = {
  lat: 40.662,
  lng: -74.10427, 
}; 
const options = {
  styles: mapStyles, 
  disableDefaultUI: true, 
  zoomControl: true,  
}

function Map() { 

  return (
    <div>
      <h1>
        Find Solar Projects Nearby!
      </h1>
    <GoogleMap 
      mapContainerStyle={mapContainerStyle} 
      zoom={15}
      center={center}
      options={options} 
    >
      {projectData.projects.map(project => (
        <Marker 
          key={project.properties.ID} 
          position={{
            lat: project.location.coordinates[1],
            lng: project.location.coordinates[0]
          }}
          /> 
      ))}
    </GoogleMap>

  </div>); 
}

const WrappedMap = 

export default Map; 
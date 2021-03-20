import React, { useState } from "react";
import Navbar from "./Navbar";
import {
  GoogleMap, 
  withScriptjs, 
  withGoogleMap,  
  Marker, 
  InfoWindow, 
  useLoadScript, 
} from '@react-google-maps/api';
import '../assets/Marketplace.css'; 
import mapStyles from "./mapStyles"; 
import * as projectData from "./solar-projects.json"; 

const API_KEY = process.env.REACT_APP_APIKEY; 
const center = {
  lat: 40.662,
  lng: -74.10427, 
}; 
const options = {
  styles: mapStyles, 
  disableDefaultUI: true, 
  zoomControl: true,  
}

export default function Map() { 

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY
  });

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  return (
    <GoogleMap 
      defaultZoom={15}
      defaultCenter={center}
      defaultOptions={options} 
    >
      {projectData.projects.map(project => (
        <Marker 
          key={project.ID} 
          position={{
            lat: project.lat,
            lng: project.lng
          }}
          /> 
      ))}
    </GoogleMap>
  ); 
}
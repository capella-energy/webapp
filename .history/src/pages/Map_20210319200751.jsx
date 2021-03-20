import React, { useState } from "react";
import Navbar from "./Navbar";
import {
  GoogleMap, 
  useLoadScript, 
  Marker, 
  InfoWindow, 
} from '@react-google-maps/api';
import '../assets/Marketplace.css';
import { formatRelative } from "date-fns"; 
import mapStyles from "./mapStyles"; 

const API_KEY = process.env.REACT_APP_APIKEY; 
const libraries = ["places"]; 
const mapContainerStyle = {
  width: '100vw', 
  height: '100vh', 
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

/*const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)
*/

export default function Map() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: API_KEY, 
    libraries, 
  }); 

  const [markers, setMarkers] = React.useState([]); 

  if (loadError) return "Error loading maps"; 
  if (!isLoaded) return "Loading Maps"; 

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
      {markers.map((marker) => 
        <Marker 
          key={marker.time.toISOString()} 
          position={{lat: 40.662, lng: -74.10427 }}
        />
      )}
    </GoogleMap>

  </div>); 
}
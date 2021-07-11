import React from "react"; 
import './Marketplace.css'; 
import mapStyles from "./mapStyles"; 
import * as projectData from "./solar-projects.json";  
import { Link } from "react-router-dom"; 

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import "@reach/combobox/styles.css";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import * as FaIcons from "react-icons/fa";   

const API_KEY = "AIzaSyBawcqAK6VVEhjll05YASsIrt9wDoMXppg"; 
const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 40.7451,
  lng: -74.0248,
};

// const rootref = firebase.firestore().collection("Projects");
const projectList = []
// rootref.get().then(function(querySnapshot){
// querySnapshot.forEach(function(doc) {
// projectList.push(doc.data())
// console.log(doc.data())
// });
// });


console.log("LOOK BELOW")
console.log(projectList)
console.log("LOOK ABOVE") 




export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries,
  });
  const [selectedProject, setSelectedProject] = React.useState(null); 

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      
      <Search panTo={panTo} /> 

      <Locate panTo={panTo} />

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {projectData.projects.map(project => (
          <Marker 
            className="markerIcon"
            key={project.properties.PROJECT_ID} 
            position={{
              lat: project.geometry.coordinates[1],
              lng: project.geometry.coordinates[0]
            }}
            icon={{
              url: "https://lh3.googleusercontent.com/pw/ACtC-3eoIMEHvHhFrEnGjWsWYKk4bD8TY09mCUBZzBlb_erlpah5zoL710O_u2u_u5jb9e-S1B-uLXALiSlbR5bVhFO2WpkudlwXZg-74-ZRQYp7OQW5NpPIdTNCccg_pl2iAO8xU9grdN8-iWeohnW8NtJK=w95-h127-no?authuser=2", 
              scaledSize: new window.google.maps.Size(25, 30),
              origin: new window.google.maps.Point(0, 0), 
              anchor: new window.google.maps.Point(20, 20) 
            }}
            onClick={() => {
              setSelectedProject(project); 
            }}
          />  
        ))}

            {selectedProject && (
            <InfoWindow
              key={selectedProject.properties.PROJECT_ID}
              position={{ 
                lat: selectedProject.geometry.coordinates[1], 
                lng: selectedProject.geometry.coordinates[0] 
               }} 
              onCloseClick={() => {
              setSelectedProject(null); 
            }}>
              <div className="marker-container">
                <h3 id="markerName">{selectedProject.properties.NAME}</h3>
                <h4 id="markerAddress">{selectedProject.properties.LOCATION}</h4>
                <Link to={`/marketplace/${selectedProject.properties.projID}`}><button>View Project</button></Link>
             
              </div>
            </InfoWindow>)}

      </GoogleMap>
    </div>
  );
}

function Locate({ panTo }) {
  return (
    <button
      id= "user-location-button"
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <FaIcons.FaLocationArrow /> 
    </button>
  );
}


function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 40.662, lng: () => -74.10427 },
      radius: 400 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, true);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect} onSubmit={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
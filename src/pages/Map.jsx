import React from "react"; 
import '../assets/Marketplace.css'; 
import mapStyles from "./mapStyles"; 
import * as projectData from "./solar-projects.json"; 

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

const API_KEY = "AIzaSyCYtOMyY2cyh4RFwtoDtQmXLjWCbfIMx3c"; 
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
        zoom={16}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {projectData.projects.map(project => (
          <Marker 
            key={project.properties.PROJECT_ID} 
            position={{
              lat: project.geometry.coordinates[1],
              lng: project.geometry.coordinates[0]
            }}
            icon={{
              url: "https://lh3.googleusercontent.com/LfZrWPHfY3E7bZ675N-yu7m2AvgI39fxPePN_PZ4OKZtouJTuHKmA8JHbNGLSMfeMgkYnuFcusiyAd7leZzqKrTX4Li6_dzvx57hUPfhaEsLsMGJE1dCtb1TWIFpaYtsjjQn4kc1N1Pp6FT4n808Te91lUUMnQ3f_7z9wu_pQKaTcg0mYQSgxpf7rn5ewNIQqpptxZXpYQSHtyh4FcmE_7yjkCitPNa8AcZLZgFP14vcecJTrKfEJcnf6ZllZLp6dfyZ9GIKtEOS0NBOn25pHTfXiwYJGPPI9OZ77b0wOJXZJ9keHcf6OZSW9zk_VMUNiw2QEBIf5Qo21uDKnwma2BepetISYCQ471hhtdtTTYnWbMM6QlJ-wFQ9J_oeMvDfcDnrjxC7HNVfqg9fXVMoP2tCJ4bI73Y-iMA2grOPnfuD555Z_UVNkOyzO4zRnllWZrWp-iT1gPu2FcPBnKO-LcZEC0TJ3BIYPtde1BNayG5aX0IlFxYiLQ2Ltw6neUy5-zSk5Y9xwX-TGSo3rPmyxVbp-PIsjyI0XbCj0qIPlr_vOwXGkrnN4ga1_Os6YxEFTDJwx-rfVQDwkKlS987d2HFNoR8V1HTzYvPo3SYOaF3rSak_h_79v8Nqi4A2nVZzYm9TMUslE8OlYToFLEDorWziFP2X0bzIvjY-ASA_dQJgC9syalIBwqcEN5Md8bjs0ge5FDI7D1FkJDLOJKCvgQ=s32-no?authuser=2", 
              scaledSize: new window.google.maps.Size(35, 35),
              origin: new window.google.maps.Point(0, 0), 
              anchor: new window.google.maps.Point(15, 15) 
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
                <h4 id="markerAddress">{selectedProject.properties.ADDRESS}</h4>
                <img id="markerImg" src={selectedProject.properties.IMAGE} alt="photo"/>
                
                <p id="markerPP">{selectedProject.properties.NOTES}</p>
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
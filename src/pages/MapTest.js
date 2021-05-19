import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoBox,
  Autocomplete,
  useLoadScript,
} from "@react-google-maps/api";
import "antd/dist/antd.css";
import { useState , useEffect} from "react";
import "./MapTest.css";
import InputAdd from "../components/InputAdd";
import { Link } from "react-router-dom";
import { EnvironmentFilled } from "@ant-design/icons";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { formatRelative, set } from "date-fns";
import { useContext} from "react"
import {SkootarContext} from "../App"
import Price from "./Price"

const containerStyle = {
  width: "400px",
  height: "600px",
};

const center = {
  lat: 13.736717,
  lng: 100.523186,
};

const options = {
  closeBoxURL: "",
  enableEventPropagation: true,
};

function MapTest(){
  const [result , setResult] = useState({distranseAB: 0 , distranseBC: 0})
  const [page , setPage] = useState(true)
  const [addInputs, setAddInputs] = useState([{ text: "" }]);
  const [selected, setSelected] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [HideButtonC, setHideButtonC] = useState(true);
  const [HideInputC, setHideInputC] = useState(false);
  const [HideButtonB, setHideButtonB] = useState(true);
  const lat1 = markers[0]?.lat;
  const lng1 = markers[0]?.lng;
  const lat2 = markers[1]?.lat;
  const lng2 = markers[1]?.lng;
  const lat3 = markers[2]?.lat;
  const lng3 = markers[2]?.lng;

  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);

  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;

  }, []);

  const handleClickAdd = () => {
    setAddInputs([...addInputs, { text: "" }]);
    setHideInputC(true)
  };

  function handleClickNext(){
    setPage(false)
  }

  // ==============================================================================================

  function getDistanceFromLatLonInKm() {
    const R = 6371; 
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    result.distranseAB = d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  function getDistanceFromLatLonInKm1() {
    const R = 6371; 
    const dLat = deg2rad(lat3 - lat2); 
    const dLon = deg2rad(lng3 - lng2);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat2)) *
        Math.cos(deg2rad(lat3)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const dd = R * c; // Distance in km
    result.distranseBC = dd;
  }

  // ==============================================================================================

  return (
    <div className="map">
     {(page == true) ? (
       <div>
     <div className="autoInput">
        {addInputs.map((addInput, index) => {
          return (
            <div>
              <InputAdd
                key={index}
                addInput={addInput}
                index={index}
                type="text"
                placeholder="Find location"
                setAddInputs={setAddInputs}
                addInputs={addInputs}
                markers={markers}
                HideButtonC={HideButtonC}
                HideButtonB={HideButtonB}
                setMarkers={setMarkers}
                setHideInputC={setHideInputC}
              />
            </div>
          );
        })}
        <div>
          {markers.length == 2?
          <button className="addInput" onClick={handleClickAdd}>
            +
          </button>: <button className="addInput" >
            +
          </button>}
        </div>
      </div>

      <div className="mapShow">
        <LoadScript
          id="script-loader"
          libraries={["places" ,"drawing"]}
          googleMapsApiKey="AIzaSyA_FimuZDuBlubBNj1pPTSc900BVuBPO7g"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onClick={onMapClick}
            onLoad={onMapLoad}
            >
            {(markers.length <= 1)
              ? (markers.map((marker, index) => (
                  <Marker
                    key={`${marker.lat}-${marker.lng}`}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    onClick={() => {
                      setSelected(marker);
                    }}
                    icon={{
                      origin: new window.google.maps.Point(0, 0),
                      anchor: new window.google.maps.Point(15, 15),
                      scaledSize: new window.google.maps.Size(30, 30),
                    }}
                  />
                ))
             ) : ( markers.length == 2 ) 
                    ? (markers.map((marker, index) => (
                    <Marker
                    key={`${marker.lat}-${marker.lng}`}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    onClick={() => {
                      setSelected(marker);
                    }}
                    icon={{
                      origin: new window.google.maps.Point(0, 0),
                      anchor: new window.google.maps.Point(15, 15),
                      scaledSize: new window.google.maps.Size(30, 30),
                    }}
                  />
                  
                  ))) : (HideInputC == true && markers.length == 3) 
                  ? (markers.map((marker, index) => (
                  <Marker
                  key={`${marker.lat}-${marker.lng}`}
                  position={{ lat: marker.lat, lng: marker.lng }}
                  onClick={() => {
                    setSelected(marker);
                  }}
                  icon={{
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(15, 15),
                    scaledSize: new window.google.maps.Size(30, 30),
                  }}
                />
                  )) ) : null}



            {(selected) ? (
              <InfoBox
                position={{ lat: selected.lat, lng: selected.lng }}
                onCloseClick={() => {
                  setSelected(null);
                }}
              >
                <div className="info">
                  <p> {formatRelative(selected.time, new Date())}</p>
                </div>
              </InfoBox>
            ) : (markers.length == 4) ? setMarkers([]) : (markers.length == 3 && HideInputC == false) ? setMarkers([])  :(markers.length == 2)? getDistanceFromLatLonInKm() : (markers.length == 3)? getDistanceFromLatLonInKm1():null}

            
          </GoogleMap>
        </LoadScript>
        <div className="nextButton">
          <h3 className="distrance">Total {(markers.length == 2)? Math.round(result.distranseAB).toFixed(1) : (markers.length == 3)?  Math.round(result.distranseAB + result.distranseAB).toFixed(1) : 0} KM</h3>
          {(markers.length >= 2) ? <button className="next" onClick={handleClickNext}>Next</button> : <button className="next">Next</button>}
        </div>
      </div>
      </div>
      ) : (<div>
        <Price result={result} markers={markers} setPage={setPage}/>
      </div>
      )}

    </div>
    );
}

export default MapTest;

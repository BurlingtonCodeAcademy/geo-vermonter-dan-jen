import borderData from "../data/border";
import L, { MapContainer } from "leaflet";
import leafletPip from "leaflet-pip";
import PlayButtons from "./PlayButtons";
import { useState } from "react";
import React from "react";

function LocGen(props) {
  const [randomPosition, setRandomPosition] = useState([43.88, -72.7317]);
  // temp fix
  const [work, setWork] = useState(true)

  let minLat = 42.730315121762715;
  let maxLat = 45.007561302382754;
  let minLong = -71.51022535353107;
  let maxLong = -73.42613118833583;

  //Generates Random Number
  function randomSpot(min, max) {
    return Math.random() * (max - min) + min;
  }
  //Sets the border data for use in the leaflet pip manipulation
  let gjLayer = L.geoJson(borderData);

  //Create Consistent Randomized Location Variable
  function RandomLocation(minLat, maxLat, minLong, maxLong, gjLayer) {
    
    let randomLat = randomSpot(minLat, maxLat);
    let randomLong = randomSpot(minLong, maxLong);

    //Returns an array. if length is 0, not in VT, goes again. if length is 1, it is in VT
    let inBounds = leafletPip.pointInLayer([randomLat, randomLong], gjLayer);
    console.log(inBounds);
    //If In VT Change the Zoom and View

    //   const map = UseMapEvent("click", () => {
    //     map.setView([randomLat, randomLong], 18);
    //   });
    //   return null;
    // } else {
    //if not in VT loop over until it equals 1
    while (inBounds.length === 0) {
      randomLat = randomSpot(minLat, maxLat);
      randomLong = randomSpot(minLong, maxLong);
      inBounds = leafletPip.pointInLayer([randomLong, randomLat], gjLayer);

      // while (inBounds.length === 0) {
      //   randomLat = randomSpot(minLat, maxLat);
      //   randomLong = randomSpot(minLong, maxLong);
      //   inBounds = leafletPip.pointInLayer([randomLong, randomLat], gjLayer);

      //If In VT Change the Zoom and View
      // if (inBounds.length === 1) {
      //   const map = UseMapEvent("click", () => {
      //     map.setView([randomLat, randomLong], 18);
      //   });
      //   return null;
      // }
    }
    setRandomPosition([randomLat, randomLong]);
  }

  if (props.start === true && work) {
    RandomLocation(minLat, maxLat, minLong, maxLong, gjLayer);
    setWork(false)
    SendData();
  }

  function SendData() {
    console.log(props.center)
    props.handleCenter(randomPosition)
    console.log(RandomLocation(minLat, maxLat, minLong, maxLong, gjLayer))
  }

  props.setCenter(randomPosition)
  console.log(randomPosition);

  return (
    <div>

    </div>
    
  );
}

export default LocGen;

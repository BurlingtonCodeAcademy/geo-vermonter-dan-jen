//Data from leaflet and react
import borderData from "../data/border";
import L, { MapContainer } from "leaflet";
import leafletPip from "leaflet-pip";
import { useState } from "react";
import React from "react";

function LocGen(props) {
  const [randomPosition, setRandomPosition] = useState([43.88, -72.7317]);
  const [work, setWork] = useState(true);

  //the min & max lat and longs for the border of VT
  let minLat = 42.730315121762715;
  let maxLat = 45.007561302382754;
  let minLong = -71.51022535353107;
  let maxLong = -73.42613118833583;

  //Generates Random Number within the coordinates of VT
  function randomSpot(min, max) {
    return Math.random() * (max - min) + min;
  }
  //Sets the border data for use in the leaflet pip manipulation
  let gjLayer = L.geoJson(borderData);

  //Create Consistent Randomized Location Variable
  function RandomLocation(minLat, maxLat, minLong, maxLong, gjLayer) {
    //assigning variables to the random lat/long generated
    let randomLat = randomSpot(minLat, maxLat);
    let randomLong = randomSpot(minLong, maxLong);

    //Returns an array. if length is 0, not in VT, fires again. if length is 1, it is in VT
    let inBounds = leafletPip.pointInLayer([randomLat, randomLong], gjLayer);

    //loop for setting random coordinates
    while (inBounds.length === 0) {
      randomLat = randomSpot(minLat, maxLat);
      randomLong = randomSpot(minLong, maxLong);
      inBounds = leafletPip.pointInLayer([randomLong, randomLat], gjLayer);
    }
    setRandomPosition([randomLat, randomLong]);
  }
  //is start button is clicked & work is true, run randomLocation. Because work is false, stops infinite loop.
  //for resubmit -- look at more efficient way of doing this?
  if (props.start === true && work) {
    RandomLocation(minLat, maxLat, minLong, maxLong, gjLayer);
    setWork(false);
  }

  //moves the marker to the new "random" coordinates
  props.setCenter(randomPosition);

  //not properly working yet, but we want zoom to change to 18 when marker moves to new location
  props.setZoomLevel(18);

  //empty since no jsx addition was necessary
  return <div></div>;
}

export default LocGen;

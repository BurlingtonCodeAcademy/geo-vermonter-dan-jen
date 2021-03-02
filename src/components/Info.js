import { useState } from "react";

//setting long, lat, county, town using useState -- functionality to come
function Info(props) {
    const [longitude, setLongitude] = useState("?")
    const [latitude, setLatitude] = useState("?")
    const [county, setCounty] = useState("?")
    const [town, setTown] = useState("?")
  
  return (
    <>
      <p>Longitude: {longitude}</p>
      <p>Latitude: {latitude}</p>
      <p>County: {county}</p>
      <p>Town: {town}</p>
    </>
  );
}

export default Info;

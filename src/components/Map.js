import { MapContainer, TileLayer, Polygon, Marker, Polyline } from "react-leaflet";
import borderData from "../data/border";
// import LocationGenerator from "./LocGen";
// import L from "leaflet"
// import leafletPip from "leaflet-pip"

function Map(props) {
  let vtOutline = borderData.geometry.coordinates[0].map(coords => [coords[1], coords[0]])

  // const [newMarker, setNewMarker] = useState()

  // setNewMarker()

  // make local state.. update this.. using state from app.js
//pass new state as prop here / use function to set new state = whatever i sent
 // set your new states default to center...  
  

  return (
    <MapContainer
      center={props.center} //{newlocalstate}!!!!!!!!!!!!!!!!!!
      zoom={8}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      zoomControl={false}
      touchZoom={false}
      style={{ height: "600px", width: "600px" }}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
      <Marker position={props.center} />
      <Polygon
        positions={vtOutline}
        pathOptions={{ color: "beige", fillOpacity: 0 }}
      />
    </MapContainer>
  );
}

export default Map;

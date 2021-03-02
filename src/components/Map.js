//information from leaflet for map setup
import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Polyline,
} from "react-leaflet";
import borderData from "../data/border";

function Map(props) {
  //Vermont outline setup information
  let vtOutline = borderData.geometry.coordinates[0].map((coords) => [
    coords[1],
    coords[0],
  ]);

  return (
    <MapContainer
      //Messages sent from other components to App.js
      center={props.center}
      zoom={props.zoomLevel}
      //Static map data
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
      {/* Messages sent from other components to App.js*/}
      <Polygon
        //sets the outline for the state of VT based on the coordinates given in borderData
        positions={vtOutline}
        pathOptions={{ color: "beige", fillOpacity: 0 }}
      />
    </MapContainer>
  );
}

export default Map;

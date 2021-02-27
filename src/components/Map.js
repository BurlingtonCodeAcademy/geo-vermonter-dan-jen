import { MapContainer, TileLayer, Polygon, Marker, Polyline } from "react-leaflet";
import borderData from "../data/border";
import LocationGenerator from "./LocGen";
import L from "leaflet"
import leafletPip from "leaflet-pip"

function Map(props) {
  let vtOutline = borderData.geometry.coordinates[0].map(coords => [coords[1], coords[0]])

  // let gjLayer = L.geoJSON(borderData)

  // let results = leafletPip.pointInLayer([-72.7317 , 43.88], gjLayer); //returns an array. if length is 0, not in VT, goes again. if length is 1, it is in VT
  // console.log(results)

  //generate random coordinates 
  //using max/min .. compare against pip
  
  //https://nominatim.openstreetmap.org/reverse?lat=<value>&lon=<value>&<params>
  //use nominatim^^^^^^
  
  // format=[xml|json|jsonv2|geojson|geocodejson]
  //output format^^^^^^^^

  //use geoJson polygon output
  
  //
  
  return (
    <MapContainer
      center={props.center}
      zoom={8}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      zoomControl={false}
      touchZoom={false}
      style={{ height: "600px", width: "600px" }}
    >
      <LocationGenerator />
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
      <Marker position={props.center} />
      <Polygon
        positions={vtOutline}
        pathOptions={{ color: "orange", fillOpacity: 0 }}
      />
    </MapContainer>
  );
}

export default Map;

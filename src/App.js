//imports from installations and components
import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import DirButtons from "./components/DirButtons";
import Map from "./components/Map";
import Info from "./components/Info";
import Score from "./components/Score";
import PlayButtons from "./components/PlayButtons";
import LocGen from "./components/LocGen";

function App(props) {
  //setting state for centering the map around coordinates, when start button is clicked, and zoom level
  const [center, setCenter] = useState([43.88, -72.7317]);
  //boolean state that determines both initial map state, button disables and zoom level
  const [startClick, setStartClick] = useState(false);
  //we can hard code a value but haven't figured out how to set it in tandem with marker
  const [zoomLevel, setZoomLevel] = useState(8);

  //Sent to PlayButtons to communicate boolean state
  function HandleStart() {
    setStartClick(true);
  }
  //components that create the page layout and pass down props
  return (
    <div>
      <NavBar />
      {/*Sends map details as props */}
      <Map center={center} zoomLevel={zoomLevel} />
      {/*Sends messages between start button and other components */}
      <PlayButtons play={HandleStart} />
      <DirButtons />
      {/*Sends messages between map and buttons*/}
      <LocGen
        start={startClick}
        setCenter={setCenter}
        setZoomLevel={setZoomLevel}
      />
      {/*Functionality still in progress*/}
      <Info />
      <Score />
    </div>
  );
}

export default App;

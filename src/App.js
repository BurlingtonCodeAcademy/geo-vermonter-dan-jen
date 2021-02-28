import './App.css';
import { useState } from 'react'
import NavBar from './components/NavBar'
import DirButtons from './components/DirButtons'
import Map from './components/Map'
import Info from './components/Info'
import Score from './components/Score'
import PlayButtons from './components/PlayButtons';
import LocGen from './components/LocGen'

function App(props) {

  const [center, setCenter] = useState([43.88, -72.7317])
  const [startClick, setStartClick] = useState(false)
  const [newPosition, setNewPosition] = useState()
  //state thats linked to state of locgen - try updating that state to update center/

  //Updates the Center 
  function HandleCenter() {
    setNewPosition()
    console.log(center)
    // console.log()
  }

 console.log(startClick)

  function HandleStart() {
    setStartClick(true)
  }

  

  return (
    <div>
      <NavBar />
      <Map center={center} />
      <PlayButtons play={HandleStart} />
      <DirButtons />
      <LocGen start={startClick} setCenter={setCenter} handleCenter={HandleCenter}/>
      <Info />
      <Score />
    </div>
  );
}

export default App;

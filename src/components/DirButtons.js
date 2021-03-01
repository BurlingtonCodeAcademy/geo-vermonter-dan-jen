//buttons for north, south, east, west for player to move on map
function DirButtons(props) {
  return (
    <>
      <button onClick={props.DirButtons}>North</button>
      <button onClick={props.DirButtons}>South</button>
      <button onClick={props.DirButtons}>East</button>
      <button onClick={props.DirButtons}>West</button>
    </>
  );
}

//we will add in a 'deduct' onClick to each button that deducts 10pts from the score every time button is clicked

export default DirButtons;

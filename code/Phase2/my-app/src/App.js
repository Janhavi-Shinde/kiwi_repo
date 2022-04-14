import { React, useState, useEffect } from "react";
import Carousel from "./Carousel";
import './App.css';

function App() {
  const [ apiData, setApidata] = useState(null);

  useEffect(
    ()=>{
      fetch('http://hp-api.herokuapp.com/api/characters/students')
      .then(r=>r.json())
      .then(data=> setApidata(data));
          },[]

  )

  return (
    <div className="App">
      <p> Click the 'Next' button to explore the main Hogwarts students! </p>
       {apiData && <Carousel apiData={apiData}/>}
       

    </div>
  );
}

export default App;

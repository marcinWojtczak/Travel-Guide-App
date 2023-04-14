import React, { useState, useEffect } from 'react';
import Main from "./components/Main/Main";
import Map from "./components/Map/Map"
import PlacesList from './components/PlacesList/PlacesList'
// import { getPlacesData } from './api/travelAdvisorApi'
import SearchingDestination from './components/SearchingDestination/SearchingDestination';



function App() {

  //Coordinates
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0})
  console.log(coordinates)
  const [places, setPlaces] = useState([])
  const [bounds, setBounds] = useState(null)

  //input data
  const [destination, setDestination] = useState('')

 //Set coordinates to be coordinates of the user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoordinates({lat: coords.latitude, lng: coords.longitude})
    })
  },[])

  //Get data places info 
  useEffect(() => {
    if(bounds) {
      getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        setPlaces(data);
      })
    }
  }, []);

  

  return (
    <>
      <Main 
        setDestination={setDestination} 
      />
      <SearchingDestination 
        destination={destination}
        coordinates={coordinates}
      />
      {/* <Map 
        coordinates={coordinates} 
        setCoordinates={setCoordinates}
        bounds={bounds}
        setBounds={setBounds}
        places={places}
      /> */}
    </>
  );
}

export default App;


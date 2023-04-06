import React, { useState, useEffect } from 'react';
import Main from "./components/Main/Main";
import Map from "./components/Map/Map"
import { getDestinationCoordinates } from './api/coordinateApi';
import PlacesList from './components/PlacesList/PlacesList'
import { getPlacesData } from './api/travelAdvisorApi'


function App() {
  //Coordinates
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0})
  console.log(coordinates)
  const [places, setPlaces] = useState([])
  const [bounds, setBounds] = useState(null)

  //input data
  const [destination, setDestination] = useState('warsaw')
  // console.log(destination);

  
  //Distance for bounding
  // const distance = 5

  // Get destination input coordinate
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const {tr_latitude, tr_longitude, bl_latitude, bl_longitude } = await getDestinationCoordinates(destination, distance)
  //   setCoordinates({tr_latitude, tr_latitude, bl_latitude, bl_longitude})
  // } 

  //Set coordinates to be coordinates of the user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoordinates({lat: coords.latitude, lng: coords.longitude})
    })
  },[])

  useEffect(() => {
    console.log(coordinates, bounds)
    if(bounds) {
      getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        console.log(data)
        setPlaces(data);
      })
    }
  }, [coordinates, bounds]);

  

  return (
    <>
      <Main 
        setDestination={setDestination} 
        // handleSubmit={handleSubmit} 
      />
      <Map 
        coordinates={coordinates} 
        setCoordinates={setCoordinates}
        bounds={bounds}
        setBounds={setBounds}
        places={places}
      />
    </>
  );
}

export default App;

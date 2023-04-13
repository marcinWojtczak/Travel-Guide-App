import React, { useState, useEffect } from 'react';
import Main from "./components/Main/Main";
import Map from "./components/Map/Map"
import { getDestinationCoordinates } from './api/coordinateApi';
import PlacesList from './components/PlacesList/PlacesList'
// import { getPlacesData } from './api/travelAdvisorApi'
import SearchingDestination from './components/SearchingDestination/SearchingDestination';



function App() {

  //Coordinates
  const [coordinates, setCoordinates] = useState({ lat: 52.237049, lng: 21.017532})
  const [places, setPlaces] = useState([])
  const [bounds, setBounds] = useState(null)

  //input data
  const [destination, setDestination] = useState('warsaw')
  // console.log(destination);


  //Set coordinates to be coordinates of the user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoordinates({lat: coords.latitude, lng: coords.longitude})
    })
  },[])

  //Get data places info 
  useEffect(() => {
    console.log(coordinates, bounds)
    if(bounds) {
      getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        // console.log(data)
        setPlaces(data);
      })
    }
  }, []);

  

  return (
    <>
      <Main 
        setDestination={setDestination} 
        
        // handleSubmit={handleSubmit} 
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

//Distance for bounding
  // const distance = 5

  // Get destination input coordinate
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const {tr_latitude, tr_longitude, bl_latitude, bl_longitude } = await getDestinationCoordinates(destination, distance)
  //   setCoordinates({tr_latitude, tr_latitude, bl_latitude, bl_longitude})
  // } 
  //Get search info data
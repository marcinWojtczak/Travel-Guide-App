import React, { useState, useEffect } from 'react';
import Main from "./components/Main/Main";
import Map from "./components/Map/Map";
import Weather from './components/Weather/Weather';
import PlacesList from './components/PlacesList/PlacesList';
import SearchingDestination from './components/SearchingDestination/SearchingDestination';
import TouristAttractions from './components/TouristAttractions/TouristAttractions';
import { getRestaurantsData, getSearchingData } from './api/travelAdvisorApi';
import { getPlaceName } from './api/googleMapApi';


function App() {

  //Coordinates
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0})
  const [placeName, setPlaceName] = useState('')
  const [bounds, setBounds] = useState(null)
  const [inputData, setInputData] = useState()
  console.log(inputData)
  const [searchingDestination, setSearchingDestination] = useState()
  const [searchingData, setSearchingData] = useState();
  console.log(searchingData)
  const [stateValue, setStateValue] = useState();
  

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchingDestination(inputData)
    
  }
  
  //Set coordinates to be coordinates of the user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoordinates({lat: coords.latitude, lng: coords.longitude})
    })
  },[])

  //
  useEffect(() => {
    getPlaceName(coordinates)
    .then((data) => {
      setPlaceName(data)
    })
  }, [])

  //Get data places info 
  useEffect(() => {
    if(bounds) {
      getRestaurantsData(bounds.sw, bounds.ne)
      .then((data) => {
        setRestaurants(data);
      })
    }
  }, []);

  useEffect(() => {
    if(searchingDestination) {
      getSearchingData(searchingDestination)
      .then((data) => {
        setSearchingData(data)
        console.log(data)
      })
    }
  }, [searchingDestination]);

  return (
    <>
      <Main 
        setInputData={setInputData}
        setStateValue={setStateValue} 
        searchingDestination={searchingDestination}
        handleSubmit={handleSubmit}
      />
      <div className='flex flex-row'>
        <div className='basis-3/4'>
          <SearchingDestination 
            searchingData={searchingData} 
            coordinates={coordinates}
          />
        </div>
        <div className='basis-1/4'>
          <Weather 
            searchingData={searchingData}
            coordinates={coordinates}
          />
        </div>
      </div>
      <TouristAttractions 
        searchingData={searchingData}
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


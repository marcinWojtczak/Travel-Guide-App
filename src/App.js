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
  const [coordinates, setCoordinates] = useState({})
  console.log(coordinates )
  // const [placeName, setPlaceName] = useState('')
  // console.log(placeName)
  // const [bounds, setBounds] = useState(null)
  const [inputData, setInputData] = useState()
  console.log(inputData)

  const [searchingDestination, setSearchingDestination] = useState()
  console.log(searchingDestination)

  const [searchingData, setSearchingData] = useState();
  console.log(searchingData)
  
  
  //set input data to searchingDestination
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchingDestination(inputData)
  }
  
  // Set coordinates to be coordinates of the user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoordinates({lat: coords.latitude, lng: coords.longitude})
    })
  },[])

  //Get searching date
  useEffect(() => {
    if(searchingDestination) {
      getSearchingData(searchingDestination)
      .then((data) => {
        setSearchingData(data)
        setCoordinates(data)
      })
    }
  }, [searchingDestination]);

  //
  // useEffect(() => {
  //   getPlaceName(coordinates)
  //   .then((data) => {
  //     setPlaceName(data)
  //   })
  // }, [])

  //Get data places info 
  // useEffect(() => {
  //   if(bounds) {
  //     getRestaurantsData(bounds.sw, bounds.ne)
  //     .then((data) => {
  //       setRestaurants(data);
  //     })
  //   }
  // }, []);

  return (
    <>
      <Main 
        setInputData={setInputData}
        handleSubmit={handleSubmit}
      />
      <div className='flex flex-row'>
        <div className='basis-3/4'>
          <SearchingDestination  
            searchingData={searchingData} 
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


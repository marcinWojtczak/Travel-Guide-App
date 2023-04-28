import React, { useState, useEffect, createContext, useContext } from 'react';
import Main from "./components/Main/Main";
import Map from "./components/Map/Map";
import Weather from './components/Weather/Weather';
import PlacesList from './components/PlacesList/PlacesList';
import SearchingDestination from './components/SearchingDestination/SearchingDestination';
import TouristAttractions from './components/TouristAttractions/TouristAttractions';
import { useGetTravelLocationsQuery, useGetTravelAttractionsQuery } from './services/travelAdvisor'
import { useGetPlaceNameQuery } from './services/googleMap';

export const TravelLocationsContext = createContext()
export const TravelAttractionsContext = createContext()
export const CoordinatesContext = createContext()

function App() {
  const [searchingDestination, setSearchingDestination] = useState('')
  console.log(searchingDestination)
  
  //set coordinate from geolocation
  const [coordinates, setCoordinates] = useState({})
  //Input Data
  const [inputData, setInputData] = useState()
  //get place address by coordinates
  const { data: place,  isFetching: placeIsFetching, error: placeError } = useGetPlaceNameQuery(coordinates)
  //extract place name
  const placeData = place?.plus_code?.compound_code
  const placeName = placeData?.split(' ')[1]
  //get searching destination data
  const { data: locationsData, isFetching: locationsIsFetching, error: locationError } = 
  useGetTravelLocationsQuery(searchingDestination)
  console.log(locationsData)
  //Get searching destination attractions data
  const locationDataId = locationsData?.data?.[0]?.result_object.location_id
  
  const { data: attractionsData, isFetching: attractionsIsFetching, error: attractionsError } = useGetTravelAttractionsQuery(locationDataId)
  
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
  
  //set place name as an initial state 
  useEffect(() => {
    if(placeName) {
      setSearchingDestination(placeName)
    }
  }, [placeName])

  

  return (
    <TravelLocationsContext.Provider value={{locationsData, locationsIsFetching}}>
      <TravelAttractionsContext.Provider value={{attractionsData, searchingDestination, locationsData}}>
        <CoordinatesContext.Provider value={coordinates}>
          <Main setInputData={setInputData} handleSubmit={handleSubmit}/>
          <SearchingDestination />
          {/* <Weather  /> */}
          <TouristAttractions  />
        </CoordinatesContext.Provider>
      </TravelAttractionsContext.Provider>
    </TravelLocationsContext.Provider>
  );
}

export default App;

//Get searching date
  // useEffect(() => {
  //   if(searchingDestination) {
  //     getSearchingData(searchingDestination)
  //     .then((data) => {
  //       setSearchingData(data)
  //       setCoordinates(data)
  //     })
  //   }
  // }, [searchingDestination]);

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

  {/* <Map 
        coordinates={coordinates} 
        setCoordinates={setCoordinates}
        bounds={bounds}
        setBounds={setBounds}
        places={places}
      /> */}

      // const [placeName, setPlaceName] = useState('')
  // console.log(placeName)
  // const [bounds, setBounds] = useState(null)
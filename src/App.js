import React, { useState, useEffect, createContext } from 'react';
import Main from "./components/Main/Main";
import Navbar from './components/Navbar/Navbar';
import Map from './components/Map/Map';
import SearchingDestination from './components/SearchingDestination/SearchingDestination';
import { useGetTravelLocationsQuery } from './services/travelAdvisor'
import { useGetPlaceNameQuery } from './services/googleMap';
import {Route, Routes } from 'react-router-dom';

export const TravelLocationsContext = createContext()
export const CoordinatesContext = createContext()
export const PlaceNameContext = createContext()
export const ChildClickedContext = createContext()

function App() {
  //searching place, 
  const [searchingPlace, setSearchingPlace] = useState('')
  console.log(searchingPlace)
  
  //set coordinate from geolocation
  const [coordinates, setCoordinates] = useState({})
  // const [inputCoordinates, setInputCoordinates] = useState('')
  const [inputData, setInputData] = useState()
  const [childClicked, setChildClicked] = useState(null);
  
  
  
  //get place address by coordinates
  const { data: place,  isFetching: placeIsFetching, error: placeError } = useGetPlaceNameQuery(coordinates)
  
  //extract place name
  const placeData = place?.plus_code?.compound_code
  const placeName = placeData?.split(' ')[1]
  //get searching place data
  const { data: locationsData, isFetching: locationsIsFetching, error: locationError } = 
  useGetTravelLocationsQuery(searchingPlace)
  
  const inputCoordinates = ({lat: locationsData?.data?.[0]?.result_object?.latitude, lng: locationsData?.data?.[0]?.result_object?.longitude })

  const locationDataId = locationsData?.data?.[0]?.result_object.location_id
  
  //set input data to search Place
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchingPlace(inputData)
  }
  
  // Set coordinates to be coordinates of the user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoordinates({lat: coords.latitude, lng: coords.longitude})
    })
  },[])
  
  //set place name as an initial place 
  useEffect(() => {
    if(placeName) {
      setSearchingPlace(placeName)
    }
  }, [placeName])

  // useEffect(() => {
  //   setCoordinates(inputCoordinates)
  // },[inputData])

  return (
    <TravelLocationsContext.Provider value={{locationsData, locationsIsFetching, locationDataId}}>
      <CoordinatesContext.Provider value={{ coordinates, setCoordinates }}>
        <ChildClickedContext.Provider value={{childClicked, setChildClicked}}>
          <Navbar />
          <Routes>
            <Route 
              path='/' 
              element={
              <>
                <Main setSearchingPlace={setSearchingPlace} handleSubmit={handleSubmit} setInputData={setInputData}/>
                <SearchingDestination />
              </>
            }>
            </Route>
            <Route 
              path='/map' 
              element={<Map />}>
            </Route>
          </Routes>
        </ChildClickedContext.Provider>
      </CoordinatesContext.Provider>
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
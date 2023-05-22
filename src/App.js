import React, { useEffect, useContext} from 'react';
import Main from "./components/Main/Main";
import Navbar from './components/Navbar/Navbar';
import Map from './components/Map/Map';
import SearchingDestination from './components/SearchingDestination/SearchingDestination';
import {Route, Routes } from 'react-router-dom';
import PlaceDataContext from './context/PlaceDataContext'


function App() {
  
  const { setBounds, setCoordinates } = useContext(PlaceDataContext)

  useEffect(() => {
    // Set coordinates to be coordinates of the user location
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoordinates({lat: coords.latitude, lng: coords.longitude})
      // Calculate the initial bounds based on the initial coordinates
      const sw = { lat: coords.latitude - 0.1, lng: coords.longitude - 0.1 };
      const ne = { lat: coords.latitude + 0.1, lng: coords.longitude + 0.1 };
      setBounds({ ne, sw })
    })
  },[setBounds, setCoordinates])

  return (
    <>
      <Navbar />
      <Routes>
        <Route 
          path='/' 
          element={
          <>
            <Main />
            <SearchingDestination />
          </>
        }>
        </Route>
        <Route 
          path='/map' 
          element={<Map />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;


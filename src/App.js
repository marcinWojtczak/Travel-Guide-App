import React, { useState, useEffect, createContext} from 'react';
import Main from "./components/Main/Main";
import Navbar from './components/Navbar/Navbar';
import Map from './components/Map/Map';
import SearchingDestination from './components/SearchingDestination/SearchingDestination';
import {Route, Routes } from 'react-router-dom';

export const CoordinatesContext = createContext()
export const ChildClickedContext = createContext()
export const BoundsContext = createContext()
export const PlacesContext = createContext()


function App() {
  
  const [coordinates, setCoordinates] = useState({})
  console.log({coordinates})
  const [bounds, setBounds] = useState(null)
  console.log(bounds)

  const [childClicked, setChildClicked] = useState(null);
  const [places, setPlaces] = useState();
  
  
  useEffect(() => {
    // Set coordinates to be coordinates of the user location
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoordinates({lat: coords.latitude, lng: coords.longitude})
      // Calculate the initial bounds based on the initial coordinates
      const ne = { lat: coords.latitude + 0.1, lng: coords.longitude + 0.1 };
      const sw = { lat: coords.latitude - 0.1, lng: coords.longitude - 0.1 };
      setBounds({ ne, sw })
    })
  },[])

  

  return (
    <CoordinatesContext.Provider value={{ coordinates, setCoordinates }}>
      <ChildClickedContext.Provider value={{childClicked, setChildClicked}}>
        <BoundsContext.Provider value={{bounds, setBounds}}>
        <PlacesContext.Provider value={{places, setPlaces}}>
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
        </PlacesContext.Provider >
        </BoundsContext.Provider >
      </ChildClickedContext.Provider>
    </CoordinatesContext.Provider>
  );
}

export default App;


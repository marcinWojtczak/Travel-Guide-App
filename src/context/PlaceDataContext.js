import { useState, createContext } from 'react';
import { useGetPlaceNameQuery } from '../services/googleMap';

const PlaceDataContext = createContext({})

export const PlaceDataProvider = ({ children }) => {

  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)
  const [childClicked, setChildClicked] = useState(null);
  const [places, setPlaces] = useState([]);

  const { data } = useGetPlaceNameQuery(coordinates)

  return (
    < PlaceDataContext.Provider value={{
        coordinates, setCoordinates, 
        bounds, setBounds, 
        childClicked, setChildClicked, 
        places, setPlaces,
        data
    }}>
      {children}
    </PlaceDataContext.Provider>
  )
}

export default PlaceDataContext
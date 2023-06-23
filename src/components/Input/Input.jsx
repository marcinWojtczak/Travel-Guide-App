import React, { useState, useContext } from 'react'
import {Autocomplete} from '@react-google-maps/api';
import PlaceDataContext from '../../context/PlaceDataContext'

const Input = () => {

  const { setCoordinates, setBounds, setPlaces  } = useContext(PlaceDataContext)
  const [autocomplete, setAutocomplete] = useState(null)
  const onLoad = (autoC) => setAutocomplete(autoC)

  const onPlaceChanged = () => {
    const newPlaces = autocomplete.getPlace();
    setPlaces(newPlaces);
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    const ne = {
      lat: autocomplete.getPlace().geometry.viewport.getNorthEast().lat(),
      lng: autocomplete.getPlace().geometry.viewport.getNorthEast().lng(),
    };
    const sw = {
      lat: autocomplete.getPlace().geometry.viewport.getSouthWest().lat(),
      lng: autocomplete.getPlace().geometry.viewport.getSouthWest().lng(),
    };
    setCoordinates({lat, lng})
    setBounds({ ne, sw })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Autocomplete 
    className='w-full'
      onLoad={onLoad} 
      onPlaceChanged={onPlaceChanged}  
      options={{
        types: ["(regions)"]
      }}
    >
      <form  onSubmit={handleSubmit}>
        <input 
          className='w-full border-2 h-10 md:h-12 outline-none rounded-lg pl-4 text-[black] shadow-lg'
          placeholder='Search destination'
          type='text'
          name='destination'
          >
        </input>
        <button type='submit'></button>
      </form>
    </Autocomplete>
  )
}

export default Input
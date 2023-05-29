import React, { useState, useContext } from 'react'
import travel  from '../../assets/img/travel.jpg';
import {Autocomplete} from '@react-google-maps/api';
import PlaceDataContext from '../../context/PlaceDataContext'

const Main = () => {

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
    <>
      <div style={{backgroundImage: `url(${travel})` }} className='bg-center bg-cover w-full h-[60vh] md:h-[80vh] flex flex-col items-center py-16'>
        <div className='w-2/3 text-center'>
          <h1 className='font-bold w-content tracking-wider mb-8 md:font-[42px]'>Explore the World with Us - Your Ultimate Travel Guide</h1>
          <Autocomplete 
            onLoad={onLoad} 
            onPlaceChanged={onPlaceChanged}  
            options={{
              types: ["(regions)"]
            }}
          >
            <form  onSubmit={handleSubmit}>
              <input 
                className='w-full h-12 outline-none rounded-lg pl-8 text-[black]   'placeholder='Search destination'
                type='text'
                name='destination'
                >
              </input>
              <button type='submit'></button>
          </form>
          </Autocomplete>
        </div>
      </div>
    </>
  )
}

export default Main
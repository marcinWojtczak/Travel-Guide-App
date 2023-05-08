import React, { useState, useContext} from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from 'google-map-react'
import PlacesList from '../PlacesList/PlacesList';
import { ImLocation2 } from 'react-icons/im'
import { useGetPlacesInBoundaryQuery } from '../../services/travelAdvisor'
import { CoordinatesContext } from '../../App';
import { useEffect } from 'react';
import { googleMapApi } from '../../services/googleMap';

const Map = () => {

  const { coordinates, setCoordinates } = useContext(CoordinatesContext)
  console.log(coordinates)
  
  const [places, setPlaces] = useState({});
  console.log(places)
  const [bounds, setBounds] = useState({})

  const { data: {data: placesInBoundary} = {} } = useGetPlacesInBoundaryQuery(bounds)
  console.log(placesInBoundary)
  
  useEffect(() => {
    if (placesInBoundary) {
    setPlaces(placesInBoundary)
    }
  }, [placesInBoundary])
  
  useEffect(() => {
    setPlaces(placesInBoundary)
  }, [bounds, coordinates])

return (
    <div className='h-screen w-full flex gap-8 p-16 max-lg:flex-col max-lg:h-full max-lg:p-8 max-sm:p-4'>
      <div className='w-[30%] max-lg:w-full'>
        {places && <PlacesList places={places}/>}
      </div>
      <div className='w-[70%] max-lg:w-full'>
        {coordinates && <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC9gBgsOK526RiisjBBOpCvXmslolP6_4Y'}}
          defaultCenter={coordinates}
          center = {coordinates}
          zoom={14}
          margin={[50, 50, 50, 50]}
          options={''}
          onChange={(e) => {
            console.log(e)
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          // onChildClick={''}
        >
          {places?.map((place, index) => (
            <div 
              className='w-[150px] h-[150px] bg-white border-2 text-center p-2'
              lat={(place.latitude)}
              lng={(place.longitude)}
              key={index}
            >
              <p className='font-semibold'>{place.name}</p>
              <img
                className='w-full h-[100px] z-10'
                src={place.photo ? place.photo.images?.large?.url : ''} 
                alt={place.name}/>
            </div>
          ))}
        </GoogleMapReact>}
      </div>
    </div>
  )
}

export default Map



            // <MapMarker
            //   key={index} 
            //   lat={place.latitude}
            //   lng={place.longitude}
            //   name={place.name}
            //   photoUrl={place.photo ? restaurant.photo.images?.large?.url : ''}
            // />
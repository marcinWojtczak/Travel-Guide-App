import React, { useState} from 'react';
import GoogleMapReact from 'google-map-react';
import PlacesList from '../PlacesList/PlacesList';
import { ImLocation2 } from 'react-icons/im'




const Map = ({coordinates, setCoordinates, setBounds, places}) => {

  // convert coordinate 
  const tr_latitude = parseFloat(coordinates.tr_latitude);
  const tr_longitude = parseFloat(coordinates.tr_longitude);
  const bl_latitude = parseFloat(coordinates.bl_latitude);
  const bl_longitude = parseFloat(coordinates.bl_longitude);
  const coordinatesObj = {tr_latitude, tr_longitude, bl_latitude, bl_longitude};

  return (
    <div className='h-screen w-full flex gap-8 p-16 max-lg:flex-col max-lg:h-full max-lg:p-8 max-sm:p-4'>
      <div className='w-[40%] max-lg:w-full'>
        <PlacesList places={places}/>
      </div>
      <div className='w-[60%] max-lg:w-full' >
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC9gBgsOK526RiisjBBOpCvXmslolP6_4Y'}}
          center = {{lat:52.237049, lng:21.017532}}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          // options={''}
          onChange={(e) => {
            console.log(e)
            setCoordinates({ lat: e.center.lat, lng: e.center.lng});
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw})
          }}
          // onChildClick={''}
        >
          {places?.data?.map((place, index) => (
            <div 
              className='w-[150px] h-[150px] bg-white border-2 text-center p-2'
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={index}
            >
              <p className='font-semibold'>{place.name}</p>
              <img
                className='w-full h-[100px] z-10'
                src={place?.photo ? place.photo.images?.large?.url : ''} 
                alt={place.name}/>
            </div>
          ))}
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map
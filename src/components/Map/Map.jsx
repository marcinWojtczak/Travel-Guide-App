import React, { useState, useContext} from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from 'google-map-react'
import PlacesList from '../PlacesList/PlacesList';
import { ImLocation2 } from 'react-icons/im'
import { useGetPlacesInBoundaryQuery } from '../../services/travelAdvisor'
import { CoordinatesContext } from '../../App';
import { useEffect } from 'react';
import { googleMapApi } from '../../services/googleMap';
import ReactStarRatings from 'react-star-ratings';

const Map = () => {

  const { coordinates, setCoordinates } = useContext(CoordinatesContext)
  
  const [places, setPlaces] = useState();
  
  // const rating = Number(places?.rating)
  const [bounds, setBounds] = useState({})
  const [childClicked, setChildClicked] = useState(null)
  const { data: placesInBoundary } = useGetPlacesInBoundaryQuery(bounds)
  
  
  useEffect(() => {
    if(placesInBoundary) {
    setPlaces(placesInBoundary.data)
    }
  }, [placesInBoundary])
  
  useEffect(() => {
    setPlaces(placesInBoundary?.data)
  }, [bounds, coordinates])

return (
    <div className='h-screen w-full flex gap-8 p-16 max-lg:flex-col max-lg:h-full max-lg:p-8 max-sm:p-4'>
      <div className='w-[30%] max-lg:w-full'>
        {places && <PlacesList places={places} childClicked={childClicked}/>}
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
          onChildClick={(childe) => {setChildCliked(child)}}
        >
          {places && places?.map((place, index) => (
            <div 
              className='w-[150px] bg-white border-2 text-center p-2 flex flex-col items-center'
              lat={(place.latitude)}
              lng={(place.longitude)}
              key={index}
            >
              <p className='font-semibold'>{place.name}</p>
              <img
                className='w-full h-[90px] z-10'
                src={place.photo ? place.photo.images?.large?.url : ''} 
                alt={place.name}/>
              <ReactStarRatings
                rating={place && place.rating && Number(place.rating)}
                starRatedColor='gold'
                numberOfStars={5}
                name='rating'
                starDimension='17px'
                starSpacing='1px'
              ></ReactStarRatings>
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
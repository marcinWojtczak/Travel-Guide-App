import React, { useState, useContext, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import PlacesList from '../PlacesList/PlacesList';
import { MdHotel, MdRestaurant, MdPhotoCamera } from 'react-icons/md'
import { useGetPlacesInBoundaryQuery } from '../../services/travelAdvisor'
import { CoordinatesContext, ChildClickedContext } from '../../App';


const Map = () => {

  const { coordinates, setCoordinates } = useContext(CoordinatesContext)
  const { childClicked, setChildClicked } = useContext(ChildClickedContext)
  
  const [places, setPlaces] = useState();
  
  // const rating = Number(places?.rating)
  const [bounds, setBounds] = useState({})
  console.log(bounds)
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
    <div className='w-full h-screen flex max-lg:flex-col max-lg:h-full max-lg:p-8 max-sm:p-4 relative'>
      <div className='w-[30vw] h-screen absolute left-0 top-0 max-lg:w-full z-10 bg-white'>
        {places && <PlacesList places={places} />}
      </div>
      <div className='w-full h-screen max-lg:w-full absolute left-0 top-0'>
        {coordinates && <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC9gBgsOK526RiisjBBOpCvXmslolP6_4Y'}}
          defaultCenter={coordinates}
          center = {coordinates}
          zoom={14}
          // margin={[50, 50, 50, 50]}
          options={''}
          onChange={(e) => {
            console.log(e)
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={(child) => setChildClicked(child)}
        >
          {places && places?.map((place, index) => (
            <div 
              className='border-2 text-center p-2 flex flex-col items-center cursor-pointer '
              lat={(place.latitude)}
              lng={(place.longitude)}
              key={index}
            >
              <div className='p-2 bg-[red] rounded-[50%] hover:p-3'>
                <MdRestaurant size={'19px'} style={{color: 'white'}}/>
              </div>
              <p className='font-semibold'>{place.name}</p>
            </div>
          ))}
        </GoogleMapReact>}
      </div>
    </div>
  )
}

export default Map



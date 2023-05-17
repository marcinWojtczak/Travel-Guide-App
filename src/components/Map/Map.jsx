  import React, { useState, useContext, useEffect, createContext } from 'react';
  import GoogleMapReact from 'google-map-react';
  import PlacesList from './PlacesList/PlacesList';
  import { MdHotel, MdRestaurant, MdPhotoCamera, } from 'react-icons/md'
  import { useGetPlacesInBoundaryQuery } from '../../services/travelAdvisor'
  import { CoordinatesContext, ChildClickedContext, BoundsContext, PlacesContext } from '../../App';

  const Map = () => {

    const { coordinates, setCoordinates } = useContext(CoordinatesContext)
    const { bounds, setBounds } = useContext(BoundsContext)
    const { childClicked, setChildClicked } = useContext(ChildClickedContext)
    const { places, setPlaces } = useContext(PlacesContext)
    console.log({places})
    console.log({bounds})

    
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    

    const { data: placesInBoundary, isLoading } = useGetPlacesInBoundaryQuery({type, bounds});
    
    useEffect(() => {
      if(bounds) {
        setPlaces(placesInBoundary)
      }
    }, [bounds, coordinates, ])

    const setIcon = () => {
      switch(type) {
        case 'restaurants':
          return <MdRestaurant size={'19px'} style={{color: 'white'}}/>;
        case 'attractions':
          return <MdPhotoCamera size={'19px'} style={{color: 'white'}}/>;
        case 'hotels':
          return <MdHotel size={'19px'} style={{color: 'white'}}/>;
      }
    }

  return (
      <div className='w-full h-screen flex max-lg:flex-col max-lg:h-full max-lg:p-8 max-sm:p-4 relative'>
        <div className='w-[30vw] h-screen absolute left-0 top-0 max-lg:w-full z-10 bg-white p-0'>
          <PlacesList  type={type} setType={setType} placesInBoundary={placesInBoundary}/>
        </div>
        <div className='w-full h-screen max-lg:w-full absolute left-0 top-0'>
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
              setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw});
            }}
            onChildClick={(child) => setChildClicked(child)}
          >
            {placesInBoundary?.data?.map((place, index) => (
              <div 
                className='flex flex-col items-center cursor-pointer z-30'
                lat={(place.latitude)}
                lng={(place.longitude)}
                key={index}
              >
                <div className='p-2 bg-[red] rounded-[50%] hover:p-3'>
                  {setIcon()}
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



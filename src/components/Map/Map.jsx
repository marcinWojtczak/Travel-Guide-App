  import React, { useState, useContext, useEffect } from 'react';
  import GoogleMapReact from 'google-map-react';
  import PlacesList from './PlacesList/PlacesList';
  import { MdHotel, MdRestaurant, MdPhotoCamera, } from 'react-icons/md'
  import { useGetPlacesInBoundaryQuery } from '../../services/travelAdvisor'
  import PlaceDataContext from '../../context/PlaceDataContext';


  const Map = () => {

    const { coordinates, setCoordinates, bounds, setBounds, setChildClicked, setPlaces } = useContext(PlaceDataContext)
    
    const [filteredPlaces, setFilteredPlaces] = useState([])
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    
    const { data: placesInBoundary } = useGetPlacesInBoundaryQuery({type, bounds});
    const placesData = placesInBoundary?.data.filter((place) => place.name && place.num_reviews > 0)

    //filter by rating
    useEffect(() => {
      const filteredPlaces = placesData?.filter((place) => place.rating > rating)
      setFilteredPlaces(filteredPlaces)
    }, [rating])
    
    useEffect(() => {
      if(bounds) {
        setPlaces(placesData)
        setFilteredPlaces([])
      }
    }, [bounds, type, bounds])

    const setIcon = () => {
      switch(type) {
        case 'restaurants':
          return <MdRestaurant size={'19px'} style={{color: 'white'}}/>;
        case 'attractions':
          return <MdPhotoCamera size={'19px'} style={{color: 'white'}}/>;
        case 'hotels':
          return <MdHotel size={'19px'} style={{color: 'white'}}/>;
        default:
      }
    }

  return (
      <div className='w-full h-screen flex max-lg:flex-col max-lg:h-full max-lg:p-8 max-sm:p-4 relative'>
        <div className='w-[30vw] h-screen border absolute left-0 top-0 max-lg:w-full z-10 bg-white p-0'>
          <div className="flex justify-center items-center cursor-pointer gap-2 p-4">
          </div>
          <PlacesList  
            type={type} 
            setType={setType} 
            places={filteredPlaces?.length ? filteredPlaces : placesData}
            setRating={setRating}
            rating={rating}
          />
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
              setCoordinates({ lat: e.center.lat, lng: e.center.lng });
              setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw});
            }}
            onChildClick={(child) => setChildClicked(child)}
          >
            {filteredPlaces?.length 
              ? filteredPlaces.map((place, index) =>
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
              )
              : placesData?.map((place, index) => (
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



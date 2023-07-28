import { useContext } from 'react';
import TouristAttractions  from './TouristAttractions/TouristAttractions';
import Restaurants  from './Restaurants/Restaurants';
import Hotels  from './Hotels/Hotels';
import { useGetPlaceNameQuery } from '../../services/googleMap';
import PlaceDataContext from '../../context/PlaceDataContext';


const SearchingDestination = () => {

  const { coordinates } = useContext(PlaceDataContext)

  //get place address by coordinates
  const { data } = useGetPlaceNameQuery(coordinates)
  
  //extract place name
  const placeData = data?.plus_code?.compound_code
  const placeName = placeData?.split(' ')[1]
  
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-8 w-full p-4 sm:p-6'>
        <h2 className='font-bold'>Essential {placeName}</h2>
          <div className='flex flex-col gap-16'>
            <TouristAttractions />
            <Hotels />
            <Restaurants />
          </div>
        </div>
    </div>
  )
}

export default SearchingDestination
import { useContext } from 'react';
import TouristAttractions  from './TouristAttractions/TouristAttractions';
import Restaurants  from './Restaurants/Restaurants';
import Hotels  from './Hotels/Hotels';
import { CoordinatesContext } from '../../App';
import { useGetPlaceNameQuery } from '../../services/googleMap';


const SearchingDestination = () => {

  const { coordinates} = useContext(CoordinatesContext)

  //get place address by coordinates
  const { data } = useGetPlaceNameQuery(coordinates)
  
  //extract place name
  const placeData = data?.plus_code?.compound_code
  const placeName = placeData?.split(' ')[1]
  
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-8 p-4 xl:p-16 lg:p-12 md:p-10'>
        <h2 className='font-bold'>Essential {placeName}</h2>
          <div className='flex flex-col gap-32'>
            <TouristAttractions />
            <Hotels />
            <Restaurants />
          </div>
        </div>
    </div>
  )
}

export default SearchingDestination
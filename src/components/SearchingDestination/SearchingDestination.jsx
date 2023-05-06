import { useContext } from 'react';
import { TravelLocationsContext } from '../../App';
import TouristAttractions  from './TouristAttractions/TouristAttractions';
import Restaurants  from './Restaurants/Restaurants';
import Hotels  from './Hotels/Hotels';


const SearchingDestination = () => {

  const {locationsData, locationsIsFetching} = useContext(TravelLocationsContext)
  const data = locationsData?.data
  const name = locationsData?.data?.[0]?.result_object?.name


  const displayData = () => {
    if(!data || data.length === 0) {
      return <h3>Can't find the destinations</h3>;
    }

    const resultType = data?.[0]?.result_type
    const resultObject = data?.[0]?.result_object;
    
    if(resultType === 'geos') {
      return (
        <div className='flex flex-col gap-8 p-0 md:p-4 lg:p-8 xl:p-12'>
          <img style={{ width: '100%' ,height: '550px', objectFit: 'cover'}} 
              src={resultObject.photo?.images?.original.url}  
          />
          {resultObject?.geo_description 
            ?  
              (
                <>
                  <h2 className='font-semibold p-0'>About {resultObject?.name}</h2>  
                  <h4>{resultObject?.geo_description}</h4>
                </>
              )
            : ''
          }
          
        </div>
      )
    } else if (resultType === 'things_to_do') {
      return (
        <div className='flex flex-col gap-8'>
          <img src={resultObject?.photo.images.large.url} />
          <h2 className='font-semibold'>{resultObject?.name}</h2>
          <h5>{searchingData[0]?.review_snippet?.snippet}</h5>
        </div>
      )
    } else {
      return (
        <h3>Can't find the destinations</h3>
      )
    }
  }
  

  return (
    <div className='flex flex-col'>
      {locationsIsFetching && <h4>Loading...</h4>}
      {data &&
        displayData()
      }
      <div className='flex flex-col gap-8 p-4 xl:p-16 lg:p-12 md:p-10'>
        <h2 className='font-bold'>Essential {name}</h2>
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
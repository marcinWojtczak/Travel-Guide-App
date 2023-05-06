import React, {useContext} from 'react';
import { TravelLocationsContext } from '../../../App'
import { useGetRestaurantsQuery } from '../../../services/travelAdvisor';
import Slider from './Slider';


const Restaurants = () => {

  const {locationsData, locationDataId} = useContext(TravelLocationsContext)
  console.log(locationsData)
  const name = locationsData?.data?.[0]?.result_object?.name

  const { data: restaurantsData, isFetching: restaurantsIsFetching, error: restaurantsError } = useGetRestaurantsQuery(locationDataId)

  console.log(restaurantsData?.data)

  return (
    <div className='flex-col lg:flex-row gap-4 md:flex border-y-2 border-black py-8'>
      <div className='basis-1/5 flex flex-col gap-4 md:gap-4 '>
        <h3 className='font-semibold'>Eat</h3>
        <h5>Can't-miss spots to dine, drink, and feast.</h5>
        <a><h5 className='underline font-bold'>See All</h5></a>
      </div>
      <div className='basis-4/5 flex w-[40%]'>
        <Slider />
      </div>
    </div>
  )
}

export default Restaurants
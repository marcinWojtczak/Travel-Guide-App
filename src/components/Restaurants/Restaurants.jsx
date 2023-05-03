import React, {useContext} from 'react';
import { TravelLocationsContext } from '../../App'
import { useGetRestaurantsQuery } from '../../services/travelAdvisor';

const Restaurants = () => {

  const {locationsData, locationDataId} = useContext(TravelLocationsContext)
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
      {restaurantsData?.data
        ?.filter((restaurant) => restaurant?.address_obj?.city === name )
        .slice(0, 4)
        .sort((a, b) => a.ranking_position - b.ranking_position)
        .map((restaurant, index) => (
          <div key={index} className='basis-1/5 flex flex-col gap-4'>
            <div 
              style={{backgroundImage: `url("${restaurant.photo?.images?.large?.url}")`}}
              className='h-[450px] lg:h-[200px] xl:h-[300px] 2xl:h-[400px] bg-cover bg-center'
            >
            </div>
            <div>
              <h5 className='font-semibold'>{restaurant.name}</h5>
              {/* <p className='font-medium text-zinc-700'>{attraction.subtype[0].name}</p> */}
              <p className='font-medium text-zinc-700'>Number Reviews: {restaurant.num_reviews}</p>
              <p className='font-medium text-zinc-700'>Rating: {restaurant.rating}</p>
              <p className='font-medium text-zinc-700'>Rating: {restaurant.price}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Restaurants
import React, { useContext } from 'react'
import { TravelLocationsContext } from '../../App'
import { useGetTravelAttractionsQuery } from '../../services/travelAdvisor';


const TouristAttractions = () => {

  const {locationsData, locationDataId} = useContext(TravelLocationsContext)
  const name = locationsData?.data?.[0]?.result_object?.name

  const { data: attractionsData, isFetching: attractionsIsFetching, error: attractionsError } = useGetTravelAttractionsQuery(locationDataId)

    console.log(attractionsData)
  
  return (
    <div className='flex-col lg:flex-row gap-4 md:flex border-y-2 border-black py-8'>
      <div className='basis-1/5 flex flex-col gap-4 md:gap-4 '>
        <h3 className='font-semibold'>Do</h3>
        <h5>Places to see, ways to wander, and signature experiences.</h5>
        <a><h5 className='underline font-bold'>See All</h5></a>
      </div>
      {attractionsData?.data
        ?.filter((attraction) => attraction?.address_obj?.city === name )
        .slice(0, 4)
        .sort((a, b) => a.ranking_position - b.ranking_position)
        .map((attraction, index) => (
          <div key={index} className='basis-1/5 flex flex-col gap-4'>
            <div 
              style={{backgroundImage: `url("${attraction.photo?.images?.large?.url}")`}}
              className='h-[450px] lg:h-[200px] xl:h-[300px] 2xl:h-[400px] bg-cover bg-center'
            >
            </div>
            <div>
              <h5 className='font-semibold'>{attraction.name}</h5>
              <p className='font-medium text-zinc-700'>{attraction.subtype[0].name}</p>
              <p className='font-medium text-zinc-700'>Number Reviews: {attraction.num_reviews}</p>
              <p className='font-medium text-zinc-700'>Rating: {attraction.rating}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default TouristAttractions
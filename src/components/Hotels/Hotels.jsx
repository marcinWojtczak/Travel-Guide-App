import React, { useContext } from 'react'
import { TravelLocationsContext } from '../../App'
import { useGetHotelsQuery } from '../../services/travelAdvisor'

const Hotels = () => {

  const {locationsData, locationDataId} = useContext(TravelLocationsContext)
  const name = locationsData?.data?.[0]?.result_object?.name
  const hotelsData = locationsData?.data
  console.log(hotelsData)

  return (
      <div className='flex flex-col basis 1/5 lg:flex-row gap-4 md:flex'>
        <div className='flex flex-col gap-4 md:gap-4 '>
          <h3 className='font-semibold'>Stay</h3>
          <h5>A mix of the charming, modern, and tried and true.</h5>
          <a><h5>See All</h5></a>
        </div>
        {hotelsData
          ?.filter(hotel => hotel.result_type === 'lodging')
          // .sort((a, b) => a.ranking_position - b.ranking_position)
          .slice(0, 4)
          .map((hotel, index) => (
            <div key={index} className='basis-1/3 flex flex-col gap-4'>
              <div 
                style={{backgroundImage: `url("${hotel?.result_object?.photo?.images?.original?.url}")`}}
                className='h-[450px] lg:h-[200px] xl:h-[300px] 2xl:h-[400px] bg-cover bg-center'
              >
              </div>
              <div>
                <h5 className='font-semibold'>{hotel.result_object?.name}</h5>
                {/* <p className='font-medium text-zinc-700'>{hotel?.subtype[0]?.name}</p> */}
                <p className='font-medium text-zinc-700'>Number Reviews: {hotel?.result_object?.num_reviews}</p>
                <p className='font-medium text-zinc-700'>Rating: {hotel?.result_object?.rating}</p>
              </div>
            </div>
        ))}
      </div>
  )
}

export default Hotels
import React, {useEffect, useState, useContext} from 'react'
import { RiContactsBookUploadLine } from 'react-icons/ri'
import { TravelAttractionsContext } from '../../App'

const TouristAttractions = () => {


  const {attractionsData, searchingDestination, locationsData} = useContext(TravelAttractionsContext)
  console.log(attractionsData)
  console.log(locationsData)

  const name = locationsData?.data?.[0]?.result_object?.name
  console.log(name)
  
  
  return (
    <div className='flex flex-col gap-4 p-4 xl:p-16 lg:p-12 md:p-10'>
      <h2 className='font-bold'>Essential {name}:</h2>
      <div className='flex-col lg:flex-row gap-4 md:flex'>
        <div className='basis-1/3 flex flex-col gap-4 md:gap-2 '>
          <h3 className='font-semibold'>Do</h3>
          <h5>Places to see, ways to wander, and signature experiences.</h5>
          <a><h5>See All</h5></a>
        </div>
        {attractionsData?.data
          ?.filter(attraction => attraction.ranking_position >= 1 && attraction.ranking_position <= 4 &&
            attraction.parent_display_name === name )
          .sort((a, b) => a.ranking_position - b.ranking_position)
          .map((attraction, index) => (
            <div key={index} className='basis-1/3 flex flex-col gap-4'>
              <div 
                style={{backgroundImage: `url("${attraction.photo.images.large.url}")`}}
                className='h-450 lg:h-[200px] xl:h-[300px] 2xl:h-[400px] bg-cover bg-center'
                >

              </div>
              <div>
                <h5 className='font-semibold'>{attraction.name}</h5>
                <p className='font-medium text-zinc-700'>{attraction.subtype[0].name}</p>
                <p className='font-medium text-zinc-700'>Number Reviews: {attraction.num_reviews}</p>
                <p className='font-medium text-zinc-700'>Rating: {attraction.rating}</p>
                
              </div>
            </div>
        ))}
        
      </div>
    </div>
  )
}

export default TouristAttractions
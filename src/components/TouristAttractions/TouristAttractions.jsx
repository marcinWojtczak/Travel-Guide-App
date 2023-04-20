import React, {useEffect, useState} from 'react'
import {getAttractionsData} from '../../api/travelAdvisorApi'

const TouristAttractions = ({ searchingData}) => {
  
  const [attractions, setAttractions] = useState([])
  console.log(attractions)
  const location_id = searchingData?.[0]?.result_object?.location_id
  
  useEffect(() => {
    {if(searchingData)
      getAttractionsData(location_id)
      .then((data) => {
      setAttractions(data)
      })
    }
  }, [searchingData])
  
  return (
    <div className='flex flex-col gap-4 p-16'>
      <h2 className='font-bold'>Essential Warsaw:</h2>
      <div className='flex flex-row gap-4'>
        <div className='basis-1/3 flex flex-col gap-4'>
          <h3 className='font-semibold'>Do</h3>
          <h5>Places to see, ways to wander, and signature experiences.</h5>
          <a><h5>See All</h5></a>
        </div>
        {attractions?.data
          ?.filter(attraction => attraction.ranking_position >= 1 && attraction.ranking_position <= 4 && attraction.parent_display_name === 'Warsaw')
          .sort((a, b) => a.ranking_position - b.ranking_position)
          .map((attraction, index) => (
            <div key={index} className='basis-1/3 flex flex-col gap-4'>
              <img src={attraction.photo.images.large.url}/>
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
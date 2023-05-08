import React, {useContext} from 'react';
import { TravelLocationsContext } from '../../../App'
import { useGetTravelAttractionsQuery } from '../../../services/travelAdvisor';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({}) => {

  const {locationsData, locationDataId} = useContext(TravelLocationsContext)
  const name = locationsData?.data?.[0]?.result_object?.name

  //fetching data by location id
  const { data: attractionsData, isFetching: attractionsIsFetching, error: attractionsError } = useGetTravelAttractionsQuery(locationDataId)

return (
  <>
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={'auto'}
      style={{
        '--swiper-navigation-size': '30px',
        '--swiper-navigation-color': 'white',
      }}
      navigation={true}
      pagination={{ el:'.swiper-pagination', clickable: true }}
    >
      {attractionsData?.data
        ?.filter((attraction) => attraction?.address_obj?.city === name )
        .slice(0, 10)
        .sort((a, b) => a.ranking_position - b.ranking_position)
        .map((attraction, index) => (
          <SwiperSlide key={index} className='flex-col basis-1/3'>
            <div 
              style={{backgroundImage: `url("${attraction.photo?.images?.original?.url}")`}}
              className='h-[350px] lg:h-[200px] xl:h-[250px] 2xl:h-[300px]  bg-cover bg-center mb-2'
            > 
            </div>
            <div className='flex flex-col gap-2'>
              <h5 className='font-semibold'>{attraction.name}</h5>
              <p className='font-medium text-zinc-700'>{attraction.subtype[0].name}</p>
              <p className='font-medium text-zinc-700'>Number Reviews: {attraction.num_reviews}</p>
              <p className='font-medium text-zinc-700'>Rating: {attraction.rating}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Slider
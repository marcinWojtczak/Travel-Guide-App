import React, {useContext} from 'react';
import { TravelLocationsContext } from '../../../App';
import { useGetRestaurantsQuery } from '../../../services/travelAdvisor';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {

  const {locationsData, locationDataId} = useContext(TravelLocationsContext)
  const name = locationsData?.data?.[0]?.result_object?.name

  const { data: restaurantsData, isFetching: restaurantsIsFetching, error: restaurantsError } = useGetRestaurantsQuery(locationDataId)
  
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
      {restaurantsData?.data
      ?.filter((restaurant) => restaurant?.address_obj?.city === name )
      .slice(0, 10)
      .sort((a, b) => a.ranking_position - b.ranking_position)
      .map((restaurant, index) => (
        <SwiperSlide key={index} className='flex-col basis-1/3'>
          <div 
            style={{backgroundImage: `url("${restaurant.photo?.images?.large?.url}")`}}
            className='h-[350px] lg:h-[200px] xl:h-[250px] 2xl:h-[300px]  bg-cover bg-center mb-2'
          >
          </div>
          <div>
            <h5 className='font-semibold'>{restaurant.name}</h5>
            <p className='font-medium text-zinc-700'>Number Reviews: {restaurant.num_reviews}</p>
            <p className='font-medium text-zinc-700'>Rating: {restaurant.rating}</p>
            <p className='font-medium text-zinc-700'>Price: {restaurant.price}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </>
  )
}

export default Slider
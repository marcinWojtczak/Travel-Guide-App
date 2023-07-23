import React, {useContext } from 'react';
import { useGetAttractionsQuery } from '../../../services/travelAdvisor';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import PlaceDataContext from '../../../context/PlaceDataContext';
import ReactStarRatings from 'react-star-ratings';

const Slider = () => {

  const { bounds } = useContext(PlaceDataContext)

  const { data: attractionsData, isLoading, isError, error } = useGetAttractionsQuery(bounds);
  
  if(isLoading) {
    return <h4>Loading...</h4>
  } else if(isError) {
    return <h4>{error.message}</h4>
  }

  
return (
  <>
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={'auto'}
      navigation={true}
      pagination={{ el:'.swiper-pagination', clickable: true }}
    >
      {attractionsData?.data
        ?.filter((attraction) => attraction.ranking_position)
        .slice(0, 10)
        .sort((a, b) => a.ranking_position - b.ranking_position)
        .map((attraction, index) => (
              <SwiperSlide key={index} className='flex-col lg:basis-1/4 '>
                <div 
                style={{backgroundImage: `url("${attraction.photo?.images?.original?.url}")`}}
                className='h-[400px] lg:h-[250px] 2xl:h-[300px] bg-cover bg-center mb-2'
                > 
                </div>
                <div>
                  <h5 className='font-semibold'>{attraction.name}</h5>
                  <p className='font-medium text-zinc-700'>{attraction.subtype[0].name}</p>
                  <p className='font-medium text-zinc-700'>Number Reviews: {attraction.num_reviews}</p>
                  <div className='flex gap-1 items-center'>
                    <p className='font-medium text-zinc-700'>Rating:</p>
                    <ReactStarRatings
                      rating={parseFloat(attraction.rating)}
                      starRatedColor='gold'
                      numberOfStars={5}
                      name='rating'
                      starDimension='18px'
                      starSpacing='2px'
                    >
                    </ReactStarRatings>
                </div>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Slider
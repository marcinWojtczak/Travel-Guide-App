import Slider from './Slider';

const TouristAttractions = () => {

  return (
    <div className='flex-col lg:flex-row gap-4 md:flex border-y-2 border-black py-8'>
      <div className='basis-1/5 flex flex-col gap-4 md:gap-4 '>
        <h3 className='font-semibold'>Do</h3>
        <h5>Places to see, ways to wander, and signature experiences.</h5>
        <a><h5 className='underline font-bold'>See All</h5></a>
      </div>
      <div className='basis-4/5 flex w-[40%]'>
        <Slider />
      </div>
    </div>
  )
}

export default TouristAttractions
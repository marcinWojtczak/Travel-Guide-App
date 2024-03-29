import Slider from './Slider';
import { Link } from 'react-router-dom';

const TouristAttractions = () => {

  return (
    <div className='flex-col gap-4 md:flex border-y border-zinc-300 p-8'>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='basis-3/4 flex flex-col gap-2'>
          <h3 className='font-semibold'>Do</h3>
          <h5>Places to see, ways to wander, and signature experiences.</h5>
          <h5 className='underline font-bold'>
            <Link to='map'>See All</Link>
          </h5>
        </div>
      </div>
      <div className=' flex w-full'>
        <Slider />
      </div>
    </div>
  )
}

export default TouristAttractions
import { Link } from 'react-router-dom'
import Slider from './Slider';


const Restaurants = () => {

  return (
    <div className='flex-col lg:flex-row gap-4 md:flex border-y-2 border-black py-8'>
      <div className='basis-1/5 flex flex-col gap-4 md:gap-4 '>
        <h3 className='font-semibold'>Eat</h3>
        <h5>Can't-miss spots to dine, drink, and feast.</h5>
        <h5 className='underline font-bold'>
          <Link to='map'>See Al</Link>
        </h5>
      </div>
      <div className='basis-4/5 flex w-[40%]'>
        <Slider />
      </div>
    </div>
  )
}

export default Restaurants
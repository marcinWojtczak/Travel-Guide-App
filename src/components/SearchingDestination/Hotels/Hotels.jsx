import Slider from './Slider'
import { Link } from 'react-router-dom'

const Hotels = () => {

  return (
    <div className='flex-col gap-4 md:flex border-y border-zinc-300 p-8'>
      <div className='basis-1/5 flex flex-col gap-4 md:gap-4'>
        <h3 className='font-semibold'>Stay</h3>
        <h5>A mix of the charming, modern, and tried and true.</h5>
        <h5 className='underline font-bold'>
          <Link to='map'>See All</Link>
        </h5>
      </div>
      <div className='basis-4/5 flex w-full'>
        <Slider />
      </div>
    </div>
  )
}

export default Hotels
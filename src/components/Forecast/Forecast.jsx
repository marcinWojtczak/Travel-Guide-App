import React from 'react';
import { BsSunFill } from 'react-icons/bs'

const Forecast = () => {
  return (
    <div className='py-8'>
      <div>
        <p className='tracking-wide'>Hourly Weather Forecast</p>
      </div>
      <hr className='my-2'/>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col justify-center items-center gap-1'>
          <p className='font-light text-sm'>04:30</p>
          <BsSunFill style={{ fontSize: '30', color: 'yellow'}}/>
          <p>25°</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-1'>
          <p className='font-light text-sm'>04:30</p>
          <BsSunFill style={{ fontSize: '30', color: 'yellow'}}/>
          <p>25°</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-1'>
          <p className='font-light text-sm'>04:30</p>
          <BsSunFill style={{ fontSize: '30', color: 'yellow'}}/>
          <p>25°</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-1'>
          <p className='font-light text-sm'>04:30</p>
          <BsSunFill style={{ fontSize: '30', color: 'yellow'}}/>
          <p>25°</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-1'>
          <p className='font-light text-sm'>04:30</p>
          <BsSunFill style={{ fontSize: '30', color: 'yellow'}}/>
          <p>25°</p>
        </div>
      </div>
    </div>
  )
}

export default Forecast
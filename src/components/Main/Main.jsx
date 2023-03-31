import React from 'react';
import { greece, canyon, river, mountains2, hawaii } from '../../assets/index';
import Navbar from '../Navbar/Navbar';


const Main = () => {
  return (
    <div className='relative'>
      <div className='flex flex-col h-screen sticky top-0'>
        <Navbar />
        <div className='flex absolute top-0 h-full '>
          <div className='w-1/3 max-lg:hidden'>
            <img className='w-full h-full object-cover' src={river} />
          </div>
          <div className='w-1/3 max-lg:hidden'>
            <img className='w-full h-full object-cover' src={mountains2} />
          </div>
          <div className='w-1/3 max-lg:w-screen'>
            <img className='w-full h-full object-cover' src={canyon} />
          </div>
        </div>
        <div className='w-full absolute top-[40%] left-0 right-0'>
          <div className='w-3/5 m-auto'>
            <h1 className='font-bold text-7xl w-content mx-auto text-center tracking-wider max-lg:text-5xl max-sm:text-4xl '>Explore the World with Us - Your Ultimate Travel Guide</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
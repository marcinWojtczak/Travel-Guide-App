import React, { useState } from 'react';
import { greece, river, mountains2, barcelona, canyon, sanFrancisco, island, peru } from '../../assets/index';
import Navbar from '../Navbar/Navbar';
import { useGetCoordinatesQuery } from '../../services/coordinatesApi';
import { getDestinationCoordinates } from '../../api/index'


const Main = () => {
  //Coordinates
  const [coordinates, setCoordinates] = useState(null)
  console.log(coordinates)

  const { data ,isLoading, isError } = useGetCoordinatesQuery(coordinates)
  console.log(data)

  const [destination, setDestination] = useState('')
  
  //distance in km to calculate the bounding box
  const distance = 10

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {tr_latitude, tr_longitude, bl_latitude, bl_longitude } = await getDestinationCoordinates(destination,distance)
    setCoordinates({tr_latitude, tr_longitude, bl_latitude, bl_longitude })
  } 
  

  return (
    <>
      <Navbar />
      <div style={{backgroundImage: `url(${sanFrancisco})` }} className='bg-center bg-cover w-full h-screen flex flex-col justify-center items-center'>
        <div className='w-2/3 text-center'>
          <h1 className='font-bold w-content tracking-wider mb-6'>Explore the World with Us - Your Ultimate Travel Guide</h1>
          <form onSubmit={handleSubmit}>
            <input className='w-full h-16 border-0 outline-none rounded-3xl pl-8 text-[black]   'placeholder='Search destination'
            type='text'
            name='destination'
            onChange={(e) => setDestination(e.target.value)}
            >
            </input>
          </form>

          <div>
            <button className='bg-[red] p-4'>Search</button>
          </div>
        
        </div>
      </div>
        
      
    </>
  )
}

export default Main
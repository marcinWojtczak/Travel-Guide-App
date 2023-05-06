import React, { useRef, useEffect, useState } from 'react'
import { greece, river, mountains2, barcelona, canyon, sanFrancisco, island, peru } from '../../assets/index';
import Navbar from '../Navbar/Navbar';
import GoogleMapReact from 'google-map-react';


const Main = ({ setInputData, handleSubmit, inputData}) => {
  const [inputValue, setInputValue] = useState('');
  const autoCompleteRef = useRef(null);
  const inputRef = useRef(null);
  

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
    inputRef.current, {
      types: ['(cities)']
    });
  }, []);

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
            onChange={(e) => setInputData(e.target.value)}
            ref={inputRef}
            
            >
            </input>
            <button type='submit'></button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Main
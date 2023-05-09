import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { SiYourtraveldottv, SiInstagram, SiFacebook} from "react-icons/si"
import { RiCloseLine, RiMenuFill } from "react-icons/ri"


const Navbar = () => {

  const [toggleBtn, setToggleBtn] = useState(true)

  const handleNav = () => {
    setToggleBtn(toggleBtn => !toggleBtn)
    
  }

  return (
    <nav className="flex justify-between items-center sticky top-0 z-20 py-8 px-10 lg:px-14 bg-[white]">
      <Link to="/">
        <div className="flex justify-evenly cursor-pointer gap-2">
          <h2><SiYourtraveldottv /></h2>
          <h2 className='font-bold'>Travel Places</h2>
        </div>
      </Link>

      <div className="max-lg:hidden">
        <ul className="flex justify-evenly items-center gap-12">
          <li className='font-semibold'>
            <a href="/">Home</a>
          </li>
          <li className='font-semibold'>
            <a href="/">Destinations</a>
          </li>
          <li className='font-semibold'>
            <a href="/">Most Popular Places To Visit</a>
          </li>
        </ul>
      </div>
      <div onClick={handleNav} className='lg:hidden'>
        <h2><RiMenuFill /></h2>
      </div>
  
      <div className={!toggleBtn 
      ? "w-[50%] min-w-[350px] h-screen bg-gradient-to-bl from-[#005F73]  to-[#0A9396] fixed top-0 right-0 flex flex-col items-start justify-start pt-8 px-10  gap-16 lg:hidden ease-in-out duration-500 opacity-90"
      : "w-[50%] min-w-[350px] h-screen bg-gradient-to-bl from-[#005F73]  to-[#0A9396] fixed top-0 right-[-100%] flex flex-col items-start justify-start pt-8 px-10 gap-16 lg:hidden ease-in-out duration-500"
      }>
        <div onClick={handleNav}>
          <h2 className='text-[#001219] font-bold'><RiCloseLine /></h2>
        </div>
        <ul>
          <li className='py-4'>
            <h3 className='text-[#001219] font-bold'><a href="/">Home</a></h3>
          </li>
          <li className='py-4'>
            <h3 className='text-[#001219] font-bold'><a href="/">Destinations</a></h3>
          </li>
          <li className='py-4'>
            <h3 className='text-[#001219] font-bold'><a href="/">Most Popular Places To Visit</a></h3>
          </li>
        </ul>
        <div className='flex gap-4 fixed bottom-6'>
          <h2 className='text-[#001219] font-bold'><SiInstagram /></h2>
          <h2 className='text-[#001219] font-bold'><SiFacebook /></h2>
        </div>  
      </div>
    </nav>
  )
}

export default Navbar
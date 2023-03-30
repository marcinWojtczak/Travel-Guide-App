import React, {useState} from 'react';
import { SiYourtraveldottv, SiInstagram, SiFacebook} from "react-icons/si"
import { RiCloseLine, RiMenuFill } from "react-icons/ri"


const Navbar = () => {

  const [toggleBtn, setToggleBtn] = useState(true)

  console.log(toggleBtn)

  const handleNav = () => {
    setToggleBtn(toggleBtn => !toggleBtn)
    
  }

  return (
    <nav className="flex justify-between items-center sticky top-0 z-10 py-8 px-10 mp-10 lg:px-14">
      <div className="flex justify-evenly cursor-pointer gap-2">
        <a href="/"><h2><SiYourtraveldottv /></h2></a> 
        <h2 className='font-bold'>Travel Places</h2>
      </div>

      <div className="max-lg:hidden">
        <ul className="flex justify-evenly gap-12">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Destinations</a>
          </li>
          <li>
            <a href="/">Most Popular Places To Visit</a>
          </li>
        </ul>
      </div>
      <div onClick={handleNav} className='lg:hidden'>
        <h2><RiMenuFill /></h2>
      </div>
  
      <div className={!toggleBtn 
      ? "w-[50%] min-w-[350px] h-screen bg-[red] fixed top-0 right-0 flex flex-col items-start    justify-start pt-8 px-10 opacity-700 gap-16 lg:hidden ease-in-out duration-500"
      : "w-[50%] min-w-[350px] h-screen bg-[red] fixed top-0 right-[-100%] flex flex-col items-start justify-start pt-8 px-10 opacity-700 gap-16 lg:hidden ease-in-out duration-500"
      }>
        <div onClick={handleNav}>
          <h2><RiCloseLine /></h2>
        </div>
        <ul>
          <li className='py-4'>
            <h3><a href="/">Home</a></h3>
          </li>
          <li className='py-4'>
            <h3><a href="/">Destinations</a></h3>
          </li>
          <li className='py-4'>
            <h3><a href="/">Most Popular Places To Visit</a></h3>
          </li>
        </ul>
        <div className='flex gap-4 fixed bottom-6'>
          <h2><SiInstagram /></h2>
          <h2><SiFacebook /></h2>
        </div>  
      </div>
    </nav>
  )
}

export default Navbar
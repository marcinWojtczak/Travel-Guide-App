import React from 'react';
import { Link } from 'react-router-dom'
import { SiYourtraveldottv } from "react-icons/si"


const Navbar = () => {

  return (
    <nav className="flex justify-center items-center sticky top-0 z-20 py-4 px-10 lg:px-14 bg-[white] shadow-2xl">
      <Link to="/">
        <div className="flex justify-evenly cursor-pointer gap-2">
          <h3><SiYourtraveldottv /></h3>
          <h3 className='font-bold'>Travel Places</h3>
        </div>
      </Link>
    </nav>
  )
}

export default Navbar
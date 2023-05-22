import React from 'react';
import { Link } from 'react-router-dom'
import { SiYourtraveldottv } from "react-icons/si"


const Navbar = () => {

  return (
    <nav className="flex justify-center items-center sticky top-0 z-20 py-8 px-10 lg:px-14 bg-[white]">
      <Link to="/">
        <div className="flex justify-evenly cursor-pointer gap-2">
          <h2><SiYourtraveldottv /></h2>
          <h2 className='font-bold'>Travel Places</h2>
        </div>
      </Link>
    </nav>
  )
}

export default Navbar
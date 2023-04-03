import React from 'react';
import { warsaw } from '../../assets/index'

const SearchPlace = () => {
  return (
    <div className='flex p-24 gap-8 h-[70vh]'>
      <div className='w-1/3 h-full'>
        <img src={warsaw} className='w-full h-full object-cover'/>
      </div>
      <div className='w-2/3'>
        <h2 className='font-semibold mb-8'>Warsaw</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat possimus ipsum pariatur tempora minus nam distinctio ea et, mollitia at! Incidunt repudiandae soluta dignissimos omnis deleniti nostrum, quidem quae architecto autem similique? Perferendis ea laborum hic quo praesentium dignissimos in. Explicabo dolor, praesentium minus atque tempora necessitatibus magni quae temporibus, ut amet provident, dolores quos ipsam dolorem porro non pariatur labore culpa accusamus illum. Aspernatur voluptatem dicta nam esse aliquid consectetur excepturi, corporis, dignissimos quibusdam quia aliquam. Quam, ipsam.</p>
        <div className='p-4 bg-[red] inline-block mt-8'>Read More</div>
      </div>
    </div>
  )
}

export default SearchPlace
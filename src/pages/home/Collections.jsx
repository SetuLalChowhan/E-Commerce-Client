import React, { cloneElement } from 'react'

const Collections = () => {
  return (
    <div className='bg-[url("/images/bg.png")] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20'>
        <div className='h-[568px] flex justify-between  md:flex-row items-center'>
       <div className='md:w-1/2'>
       </div>
       <div className='md:w-1/2'>
        <img src='/zara.png'  />
        <p className='text-lg text-white capitalize my-8 md:w-2/3 leading-[32px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore id libero nobis impedit accusamus exercitationem alias, maiores temporibus rem architecto modi sed perspiciatis doloribus sequi.</p>
        <button className='px-6 py-2 bg-white text-black rounded-sm font-semibold'>See Collections</button>
       </div>
        </div>
    </div>
  )
}

export default Collections
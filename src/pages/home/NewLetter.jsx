import React from 'react'
import { Link } from 'react-router-dom'

const NewLetter = () => {
  return (
    <div className='bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16 '> <h2 className='text-3xl font-semibold capitalize text-center my-8 mb-8'>
        Follow products and Discounts on Instagram
        </h2>
        <div className='flex  flex-wrap gap-4 items-center justify-center mb-20'>
            <Link to='/'>
                <img src='/images/insta/01.png' />
            </Link>
            <Link to='/'>
                <img src='/images/insta/2.png' />
            </Link>
            <Link to='/'>
                <img src='/images/insta/3.png' />
            </Link>
            <Link to='/'>
                <img src='/images/insta/4.png' />
            </Link>
            <Link to='/'>
                <img src='/images/insta/5.png' />
            </Link>
            <Link to='/'>
                <img src='/images/insta/6.png' />
            </Link>
        </div>
        <div>
            <h2 className='text-3xl font-semibold capitalize text-center my-8mb-8'>Or subscribe to the newsletter</h2>
            <form className='md:w-1/2 mx-auto text-center'>
                <input name='email' id='email' placeholder='Email address....' className='h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4'/>
                <input type='submit' value={"Submit"} className='bg-Black text-white px-6 py-1 rounded-sm' />
            </form> 
        </div>
        </div>
  )
}

export default NewLetter
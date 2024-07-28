import React from 'react'
import { FaHeart, FaReact } from 'react-icons/fa'

const Footer = () => {
  return (
    <div class='mt-12 w-max-[800px] border-t border-gray-500 text-center'>
        <p className='my-5 text-gray-500'>
            Made with <FaHeart className='inline-block text-red-500' /> <br />(Made with React)
        </p>
        <div class="inline-flex text-gray-500 gap-4 text-3xl">
            <FaReact/>
            <FaReact/>
            <FaReact/>
        </div>
    </div>
  )
}

export default Footer

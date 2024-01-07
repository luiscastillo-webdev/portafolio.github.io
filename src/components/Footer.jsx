import React from 'react'
import { FaHeartbeat } from "react-icons/fa";
import Clima from './Clima';

const Footer = () => {
  return (
    <div className='w-full border-t-4 border-amber-500 bg-black'>
        <div className='grid grid-cols-6 gap-10 w-full h-auto p-6 items-center justify-center'>
            <div className='flex flex-col col-span-6 md:col-span-2 text-center text-white text-m md:text-xl'>
              <h1 className='logo uppercase'>castillo web dev</h1> &copy;{(new Date().getFullYear())}
            </div>
            <div className='flex flex-row items-center justify-center col-span-3 md:col-span-2 text-center text-white text-m md:text-xl'>
                Codificado con <span className='mx-2 inline-block text-cnter'><FaHeartbeat/></span> por K25
            </div>
            <div className='flex flex-col col-span-3 md:col-span-2 items-center justify-center text-center text-white text-m md:text-xl'>
                <Clima />
            </div>
        </div>
    </div>
  )
}

export default Footer
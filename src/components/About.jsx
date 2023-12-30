import React from 'react'
import AboutUno from '../contenidos/AboutUno'

const About = () => {
  return (
    <div className='bg-gradient-to-r from-black to-[#252734] w-full h-full overflow-hidden'>
      <div className='max-w-screen-xl pt-[5rem] md:pt-[10rem] mx-auto px-4'>
        <div className="h-auto w-full">
              <div className='pb-8'>
                  <h2 className='text-3xl md:text-5xl text-white font-bold border-b-4 border-gray-500'>Prfesional donde me pongan!</h2>                   
              </div>              
              <AboutUno/>
          </div>
       </div>
    </div>
  )
}

export default About
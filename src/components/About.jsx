import React from 'react'
import AboutUno from '../contenidos/AboutUno'
import Habilidades from './Habilidades'
import Contratame from "./Contratame.jsx"; 


const About = () => {
  return (
    <div className='bg-gradient-to-r from-black to-[#252734] w-full h-full overflow-hidden'>
      <div className='pt-[5rem] md:pt-[10rem] px-4'>
        <div className="h-auto w-full">
              <div className='pb-8'>
                  <h2 className='text-3xl md:text-6xl text-white text-center font-bold border-b-4 border-gray-500'>Profesional donde me pongan!</h2>                   
              </div>              
              <AboutUno/>
              <Habilidades/>
              <Contratame/>
          </div>          
       </div>
    </div>
  )
}

export default About
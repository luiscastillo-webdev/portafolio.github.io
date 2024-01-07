import React from 'react'
import ImgPortafolio  from "./ImgPortafolio.jsx";
import Contratame from "./Contratame.jsx"; 

 

const Portafolio = () => {
 
  return (
    <div id="portafolio" className='bg-gradient-to-r from-black to-[#252734]'>
       <div className='max-w-screen-xl px-2 pt-[6rem] md:pt-[8rem] mx-auto'>
        <div className="h-auto w-full">
              <div className='pb-8'>
                  <h2 className='text-5xl text-white border-b-4 border-gray-500'>Proyectos</h2>
                  <p className='mt-2 p-6 rounded text-xl bg-[#252734] text-white'>
                    Proyectos desarrollados y culminados para clientes que han creido en mi trabajo
                  </p>
              </div>              
              <ImgPortafolio/>
          </div>
       </div>
        <Portafolio/>
    </div>
  )
}

export default Portafolio
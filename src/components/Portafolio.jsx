import React from 'react'
import ImgPortafolio  from "./ImgPortafolio.jsx";
import Contratame from "./Contratame.jsx"; 
import { IoMdMailUnread } from 'react-icons/io';
import Seo from '../contenidos/Seo.jsx';

 

const Portafolio = () => {
 
  return (
    <>
    <Seo 
    titulo="Portafolio | Desarrollo y Diseño Web | Freelancer"
    descripcion="Portafolio de clientes satisfechos que han trabajado conmigo y volverian hacerlo"    
  />
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
        <Contratame
        titulo='vamos a conversar'
        descrip='Podemos asociarnos y juntos podemos lograr objetivos, hacer que tu emprendimiento llegue lejos.'
        boton='charlemos'
        icono={<IoMdMailUnread/>}
        />
    </div>
    </>
  )
}

export default Portafolio
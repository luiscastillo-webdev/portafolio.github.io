import React from 'react'
import AboutUno from '../contenidos/AboutUno'
import Habilidades from './Habilidades'
import Contratame from "./Contratame.jsx"; 
import { IoMdMailUnread } from 'react-icons/io';
import Seo from '../contenidos/Seo.jsx';


const About = () => {
  return (
    <>
    <Seo 
      titulo="Acerca de mi | Desarrollo y Diseño Web | Freelancer"
      descripcion="Desarrollador web con más de 5 años de experiencia"    
    />
    <div className='bg-gradient-to-r from-black to-[#252734] w-full h-full overflow-hidden'>
      <div className='pt-[5rem] md:pt-[10rem] px-4'>
        <div className="h-auto w-full">
              <div className='pb-8'>
                  <h2 className='text-3xl md:text-6xl text-white text-center font-bold border-b-4 border-gray-500'>Profesional donde me pongan!</h2>                   
              </div>              
              <AboutUno/>
              <Habilidades/>
              <Contratame
              titulo='al dia con la técnologia'
              descrip='Siempre actualizado con las ultimas técnologias de desarrollo frontend y diseño web'
              boton='escribeme'
              icono={<IoMdMailUnread/>}              
              />
          </div>          
       </div>
    </div>
    </>
  )
}

export default About
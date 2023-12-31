import React from 'react'
import HeroImage from "../assets/img/heroimage.png"

const AboutUno = () => {
  return (
    
    <div className='w-full items-center justify-center'>
        <div className='grid grid-cols-8 gap-4 md:gap-16 px-0 md:px-4'>
          <div className='col-span-8 md:col-span-3 order-2 md:order-1 items-start'>
            <h2 className='mb-4 text-lg font-bold uppercase text-white'>biografia</h2>
            <p className='text-lg text-white w-full'>
              El trozo de texto estándar de Lorem Ipsum usado 
              desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 
              1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas 
              en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham
              </p>
          </div>
           
          <div className='col-span-8 mx-auto rounded-2xl border-l-2 border-t-2 border-r-[10px] border-b-[10px] border-solid
           border-sky-500 p-4 bg-slate-300 sm:col-span-3 order-1 md:order-2'>             
                <img src={HeroImage} alt="me programador" className="w-full h-auto"/>            
          </div>

          <div className='col-span-2 flex flex-row md:flex-col items-start justify-between order-3'>
            <div className='flex flex-col items-end justify-center px-1'>
              <span className='inline-block text-4xl md:text-7xl font-bold text-yellow-50'>
                +15
              </span>
              <h3 className='text-s text-center md:text-xl font-medium capitalize text-yellow-50'>
                Clientes satisfechos
              </h3>
            </div> 

            <div className='flex flex-col items-center md:items-end justify-center px-1'>
              <span className='inline-block text-4xl md:text-7xl font-bold text-yellow-50'>
                4+
              </span>
              <h3 className='text-s text-center md:text-xl font-medium capitalize text-yellow-50'>
                años de experiencia
              </h3>
            </div> 

            <div className='flex flex-col items-end justify-center px-1'>
              <span className='inline-block text-4xl md:text-7xl font-bold text-yellow-50'>
                20+
              </span>
              <h3 className='text-s text-center md:text-xl font-medium capitalize text-yellow-50'>
                proyecto culminados
              </h3>
            </div> 

          </div> 
          

        </div>
    </div>
  )
}

export default AboutUno
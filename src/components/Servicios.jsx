import React from 'react'
import { motion } from 'framer-motion';
import { FaHeartbeat } from "react-icons/fa";




const Servicios = () => {
  const servicio=[
    {
      id:1,
      icono:<FaHeartbeat/>,
      titulo:"Diseño",
      descrip:"Los mejoresergerg er  erge errthr hthhrtrt",
    },
    {
      id:2,
      icono:<FaHeartbeat/>,
      titulo:"Diseño",
      descrip:"Los mejores rgerg egregrefhgrg gre re ergergterg ",
    },
    {
      id:3,
      icono:<FaHeartbeat/>,
      titulo:"Diseño",
      descrip:"Los mejores hjaysdadñashduia dhdywq",
    },
    {
      id:4,
      icono:<FaHeartbeat/>,
      titulo:"Diseño",
      descrip:"Los mejoresergerg er  erge errthr hthhrtrt",
    },
    {
      id:5,
      icono:<FaHeartbeat/>,
      titulo:"Diseño",
      descrip:"Los mejores rgerg egregrefhgrg gre re ergergterg ",
    },
    {
      id:6,
      icono:<FaHeartbeat/>,
      titulo:"Diseño",
      descrip:"Los mejores hjaysdadñashduia dhdywq",
    },
  ];
  return (
  <div id="servicios" className='border-t-4 border-amber-500 bg-gradient-to-r from-black to-[#252734]'>
    
    <div className='encabezado py-16'>
      <h2 className='text-white text-center  text-6xl'>Servicios</h2>
    </div>   
      <div className='grid grid-cols-2 md:grid-cols-6 gap-1 md:gap-2 md:max-w-screen-lg justify-center mx-auto'>

        {servicio.map(({id,icono,titulo,descrip})=>(
          <div key={id} className='mb-4 mx-auto rounded bg-slate-300 md:col-span-2 text-m md:text-xl shadow-2xl'>
            <motion.div
            className='flex justify-center py-4 md:py-8'
            whileHover={{ scale: 1.2 }} 
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 }
            }}
            >
              <span class="text-6xl shadow-inner rounded-full border border-amber-500">{icono}</span>
            </motion.div>
            <div className="px-2 md:px-6 py-4">
                <div className="mb-4">
                  <h3 className='text-xl'>
                    {titulo}
                  </h3>
                </div>                
                <p className="justify-content">
                {descrip}
                </p>
            </div> 
          </div>
         ))}
        </div>        
     
  </div>
  )
}

export default Servicios
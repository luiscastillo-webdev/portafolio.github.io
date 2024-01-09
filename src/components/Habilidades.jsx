import React from 'react'
import { motion,useSpring } from "framer-motion"

 
    const itemsHabilidades =[
      {
        id:1,
        nombre:"React",
        porcentaje:"80",
        progreso:"w-[80%]",
        retraso:0.1,
        
      },
      {
        id:2,
        nombre:"HTML",
        porcentaje:"98",
        progreso:"w-[98%]",
        retraso:0.2,
      },
       {
        id:3,
        nombre:"CSS",
        porcentaje:"95",
        progreso:"w-[95%]",
        retraso:0.3,
      },
       {
        id:4,
        nombre:"JS",
        porcentaje:"85",
        progreso:"w-[85%]",
        retraso:0.4,
      },
         {
        id:5,
        nombre:"wordpress",
        porcentaje:"95",
        progreso:"w-[95%]",
        retraso:0.5,
      },
         {
        id:6,
        nombre:"Joomla",
        porcentaje:"90",
        progreso:"w-[90%]",
        retraso:0.6,
      },
          {
        id:7,
        nombre:"Php",
        porcentaje:"90",
        progreso:"w-[90%]",
        retraso:0.7,
      },
    ];
   
 

const Habilidades = () => {

 

  return (
    <>
        <h2 className='text-white text-5xl md:text-7xl text-center w-full mt-[2rem] md:mt-[10rem]'>Habilidades</h2>
        <div className='max-w-screen-lg mx-auto md:h-screen items-center justify-center'>   
             
        {itemsHabilidades.map(({id,nombre,porcentaje,progreso,retraso})=>(
        <div 
       
        key={id} className="w-full flex flex-cols-6 bg-gray-200 my-6 p-1 rounded-md"
        >      
        <motion.div  
          initial={{scale:0}}
          animate={{scale:1}}
          transition={{
            duration:3,
            ease:'easeInOut',
            delay:retraso,
          }}          
          className={`col-span-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-amber-500 to-90% text-2xl font-bold text-blue-100 text-center rounded-md p-4 leading-none ${progreso}`}>
            {nombre} <span>{porcentaje}%</span>           
          </motion.div>
        </div>
        ))}
        </div>
    </>
  )
}

export default Habilidades
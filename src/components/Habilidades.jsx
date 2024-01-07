import React from 'react'
import { motion } from 'framer-motion'

const Habilidad= ({name,x,y}) => {
  return(
    <motion.div className='flex items-center justify-center rounded-full uppercase 
    font-bold text-white py-3 px-6 bg-amber-600 shadow-lime-200 cursor-pointer'
    whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    animate={{x:x,y:y}}
    transition={{duration:1.5}}
    >
      {name}
    </motion.div>
  )
}

const Habilidades = () => {
  return (
    <>
        <h2 className='text-white text-7xl text-center w-full mt-[10rem]'>Habilidades</h2>
        <div className='w-full h-screen flex items-center justify-center bg-luzCircular rounded-3xl'>
         
          <motion.div className='flex items-center justify-center rounded-full uppercase 
          font-bold text-white py-3 px-6 bg-amber-600 shadow-lime-200 cursor-pointer absolute'
          whileHover={{scale:1.05}}
         
          >
            web
          </motion.div>

          <Habilidad name="wordpress" x="30vw" y="15vw"/>
          <Habilidad name="CSS" x="-15vw" y="-10vw"/>
          <Habilidad name="html" x="-15vw" y="12vw"/>
          <Habilidad name="react" x="18vw" y="3vw"/>
          <Habilidad name="javascript" x="8vw" y="-13vw"/>
          <Habilidad name="joomla" x="-25vw" y="-16vw"/>
          <Habilidad name="diseño" x="-32vw" y="-5vw"/>
          <Habilidad name="bootstrap" x="2vw" y="-5vw"/>

        </div>
    </>
  )
}

export default Habilidades
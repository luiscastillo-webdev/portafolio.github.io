import React from 'react' 
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
 

 

const Contratame = ({titulo,descrip,boton,icono}) => {
  return (
    <div id="contacto" className='w-full bg-gradient-to-r from-black to-[#252734] md:p-16'>
        <div className='grid md:gap-4'>
            <div className='max-w-screen-lg mx-auto text-white md:text-2xl md:px-[6rem] py-[3rem] justify-center items-center text-center rounded-xl bg-gradient-to-r from-orange-500 to-amber-700'>
                <h3 className='uppercase w-auto pb-5'>{titulo}</h3>
                <p>{descrip}</p>
                <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-white px-6 py-3 mt-6 mx-auto flex cursor-pointer bg-[#252734] capitalize"
                    >                     
                        <NavLink to="/contacto">{boton}</NavLink>                     
                        <span className='pl-3 mt-1 hover:rotate-90'>{icono} </span>                      
                    </motion.button>
            </div>                        
        </div>
    </div>
  )
}

export default Contratame
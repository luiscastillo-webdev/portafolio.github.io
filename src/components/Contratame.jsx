import React from 'react' 
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import { IoMdMailUnread } from 'react-icons/io';

 

const Contratame = () => {
  return (
    <div id="contacto" className='w-full bg-gradient-to-r from-black to-[#252734] md:p-16'>
        <div className='grid md:grid-cols-6 md:gap-4'>
            <div className='md:col-span-4 text-white md:text-2xl md:px-[6rem] py-[3rem] justify-center items-center text-center rounded-xl bg-gradient-to-r from-orange-500 to-amber-700 '>
                <h3 className='uppercase w-auto pb-5'>Transforma tu idea en realidad con mi ayuda</h3>
                <p>No esperes más y agenda tu cita conmigo. Te ofreceré un presupuesto personalizado y sin compromiso.</p>
                <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-white px-6 py-3 mt-6 mx-auto flex cursor-pointer bg-[#252734]"
                    >                     
                        <NavLink to="/contacto">Contáctame</NavLink>                     
                        <span className='pl-3 mt-1 hover:rotate-90'><IoMdMailUnread /></span>                      
                    </motion.button>
            </div>                        
        </div>
    </div>
  )
}

export default Contratame
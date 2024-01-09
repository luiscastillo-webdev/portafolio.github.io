import React from 'react'
import MuroImage from "../assets/img/muro.jpg"
import { motion } from "framer-motion"; 
import { NavLink } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";

const NoEncontrado = () => {
  return (
    <div className='h-screen w-full bg-slate-400 justify-center items-center flex flex-col' style={{backgroundImage:`url(${MuroImage})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
     <h1 className='text-8xl text-white mb-3'>404</h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-white px-6 py-3 my-2 mx-2
        flex bg-gradient-to-r from-orange-500 to-amber-700 cursor-pointer"
      >                     
      <NavLink to="/" spy={true} smooth={true} offset={0}>Ir al inicio</NavLink>                        
        <span className='pl-3 mt-1 hover:rotate-90'><FaHouse /></span>                      
      </motion.button>
    </div>
  )
}

export default NoEncontrado
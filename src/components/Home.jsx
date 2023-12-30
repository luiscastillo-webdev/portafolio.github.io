import React, {useState} from 'react'
import HeroImage from "../assets/img/heroimage.png"
import MuroImage from "../assets/img/muro.jpg"
import { SiAsciinema } from "react-icons/si";
import RedesSociales from "./RedesSociales.jsx";
import { motion } from "framer-motion";
 

 

const Home = () => {
     
  return (    
    <div className="home h-screen w-full overflow-hidden" style={{backgroundImage:`url(${MuroImage})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>   
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 items-center justify-center px-4 h-full md:grid-cols-2">
            <div className="items-center justify-center mt-10 md:mt-0">
                <h2 className='text-4xl sm:text-8xl font-bold text-slate-200 mb-4'>Castillo Web Dev</h2>
                <p className='p-4 rounded-xl max-w-md bg-gradient-to-b from-orange-500 to-amber-700 font-bold text-slate-200 text-2l'>
                    Desarrollador web freelancer experto en la creación y mantenimiento de sitios web y aplicaciones web
                </p>
                <div className="mt-5">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-white px-6 py-3 my-2 
                        flex bg-gradient-to-r from-orange-500 to-amber-700 cursor-pointer"
                    >                     
                        Portafolio                          
                        <span className='pl-3 mt-1 hover:rotate-90'><SiAsciinema /></span>                      
                    </motion.button>
                </div>
                <RedesSociales/>
            </div>
            <div className='h'>
                <img src={HeroImage} alt="me programador" className="mx-auto w-4/3 md:w-full"/>
            </div>           
        </div>
       
    </div>
  )
}

export default Home
import React, {useState} from 'react'
import HeroImage from "../assets/img/heroimage.png"
import MuroImage from "../assets/img/muro.jpg"
import { SiAsciinema } from "react-icons/si";
import RedesSociales from "./RedesSociales.jsx";
import { motion } from "framer-motion"; 
import BtnContratame from '../contenidos/BtnContratame.jsx';
import { NavLink } from "react-router-dom";
import { Link as LinkScroll } from 'react-scroll/modules'
import Servicios from "./Servicios.jsx";
import Contratame from "./Contratame.jsx"; 
import { IoMdMailUnread } from 'react-icons/io';
import Seo from '../contenidos/Seo.jsx';

 

 

const Home = () => {
     
  return ( 
    <>  
    
    <Seo 
        titulo="Desarrollo y Diseño Web | Freelancer"
        descripcion="Desarrollo y diseño para tu web o emprendimiento, destacate delante los demas y llega a la cima"    
    />
   
    <div className="home h-screen w-full overflow-hidden" style={{backgroundImage:`url(${MuroImage})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>   
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 items-center justify-center px-4 h-full md:grid-cols-2">
            <div className="items-center justify-center mt-16 md:mt-0">
                <h2 className='text-4xl sm:text-7xl text-slate-200 mb-4'>Diseño y Desarrollo Web</h2>
                <p className='p-4 rounded-xl bg-gradient-to-b from-orange-500 to-amber-700 text-slate-200 text-2xl'>
                    Soy freelancer experto en la creación y mantenimiento de sitios web y aplicaciones web
                </p>
                <div className="flex mt-5 justify-between">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-white px-6 py-3 my-2 
                        flex bg-gradient-to-r from-orange-500 to-amber-700 cursor-pointer"
                    >                     
                       <NavLink to="/portafolio">Portafolio</NavLink>                        
                        <span className='pl-3 mt-1 hover:rotate-90'><SiAsciinema /></span>                      
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-white px-6 py-3 my-2 mx-2
                        flex bg-gradient-to-r from-orange-500 to-amber-700 cursor-pointer"
                    >                     
                       <LinkScroll to="servicios" spy={true} smooth={true} offset={0}>Servicios</LinkScroll>                        
                        <span className='pl-3 mt-1 hover:rotate-90'><SiAsciinema /></span>                      
                    </motion.button>
                </div>
                <RedesSociales/>
            </div>
            <div className='flex w-full'>
                <img src={HeroImage} alt="me programador" className="mx-auto w-4/3 md:w-full"/>                
            </div>  
            <BtnContratame/>         
        </div>       
    </div>

    <Servicios/>
    <Contratame
    titulo='Transforma tu idea en realidad con mi ayuda'
    descrip='No esperes más y agenda tu cita conmigo. Te ofreceré un presupuesto personalizado y sin compromiso.'
    boton='Contáctame'
    icono={<IoMdMailUnread/>}
    
    />
    
    </> 
  )
}

export default Home
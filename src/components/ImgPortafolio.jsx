 import React, { useState } from 'react'
 import { motion } from 'framer-motion';
 import BD from "../assets/img/proyectos/bd.jpg";
 import Gotoca from "../assets/img/proyectos/gotoca.jpg";
 import MiWeb from "../assets/img/proyectos/miweb_portafolio.jpg";
 import CriptoMine from "../assets/img/proyectos/cripto.jpg";
 import Fencingven from "../assets/img/proyectos/fencingven.jpg";
 import ViralMkt from "../assets/img/proyectos/viralmkt.jpg";
 
 
 const ImgPortafolio = () => {
   
    const itemsimg=[
        {
          id:1,
          titulo:"CriptoMine",
          descrip:"Simple billetera para criptomonedas, para trading, esta plantilla es para la venta",
          categ1:"Js",
          categ2:"ventas",  
          destacado:"bg-amber-600",         
          imagen:CriptoMine,
          url:"https://www.templatemonster.com/website-templates/criptomine-wallet-website-template-248029.html",
          tituloBtn:"comprar",
        },
        {
          id:2,
          titulo:"Federación Venezolana de Esgrima",
          descrip:"Página oficial de la federación venezolana de esgrima, hecha con tecnologia de Wordpress.",
          categ1:"Wordpress",
          categ2:"Elementor",
          destacado:"bg-[#252734]", 
          imagen:Fencingven,
          url:"https://fencingven.com",
          tituloBtn:"visitar",
        },
        {
          id:3,
          titulo:"Gotoca Imports",
          descrip:"Diseño y desarrollo de un ecommerce para la empresa importadora de repuestos para camiones Gotoca Imports.",
          categ1:"Wordpress",
          categ2:"Elementor",
          destacado:"bg-[#252734]", 
          imagen:Gotoca,
          url:"https://gotoca.net.ve",
          tituloBtn:"visitar",
        },
        {
          id:4,
          titulo:"Castillo Web Dev",
          descrip:"Desarrollo de mi propia web portafolio, hecha con react, vite y framer motion.",
          categ1:"React",
          categ2:"Frontend",
          destacado:"bg-[#252734]", 
          imagen:MiWeb,
          url:"https://castillowebdev.netlify.app/",
          tituloBtn:"visitar",
        },
        {
          id:5,
          titulo:"Viralization Mkt",
          descrip:"Agencia de marketing digital radicada en Lima, Peru, le hice algunos trabajos incluyendo su web.",
          categ1:"Wordpress",
          categ2:"Diseño Web",
          destacado:"bg-[#252734]", 
          imagen:ViralMkt,
          url:"https://viralizationmkt.com/",
          tituloBtn:"visitar",
        },
        {
          id:6,
          titulo:"Bodegón Diesel",
          descrip:"Tienda retail para venta de respuestos para camiones diesel y transporte de carga.",
          categ1:"Wordpress",
          categ2:"Elementor",
          destacado:"bg-[#252734]", 
          imagen:BD,
          url:"https://bodegondiesel.pro",
          tituloBtn:"visitar",
        },   
    
      ];
       
   return (
    <div className='grid grid-cols-1 md:grid-cols-3 justify-center gap-2'>  
    {itemsimg.map(({id,imagen,destacado, tituloBtn,titulo,url,descrip,categ1,categ2})=>(
        <div key={id}
        className={`${destacado} mb-4 rounded overflow-hidden shadow-inner`}>
          <motion.div
           whileHover={{ scale: 1.2 }} 
           transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 }
          }}
          >
            <img className="w-full cursor-pointer" src={imagen} alt={titulo}/>
          </motion.div>
          <div className="px-6 py-4">
              <div className="mb-4"><h3 className='text-xl text-white'>{titulo}</h3></div>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{categ1}</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{categ2}</span>
              <p className="text-white justify-content">
              {descrip}
              </p>
          </div>
          <div className='px-6 pt-4 pb-2'>             
              <a href={url} target="_blank" rel='noreferrer' className="inline-block w-full bg-gray-200 rounded px-5 py-2 text-center uppercase
               font-bold text-gray-700 mr-2 mb-2 hover:text-sky-600">
             {tituloBtn}
            </a>                             
          </div>
        </div>
      ))}
    </div>
   )
 }
 
 export default ImgPortafolio
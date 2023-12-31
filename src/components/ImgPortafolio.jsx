 import React from 'react'
 import Billetera from "../assets/img/billetera.png";
 import Gotoca from "../assets/img/proyectos/gotoca.jpg";
 import CriptoMine from "../assets/img/proyectos/cripto.jpg";
 import Fencingven from "../assets/img/proyectos/fencingven.jpg";
 
 const ImgPortafolio = () => {

    const itemsimg=[
        {
          id:1,
          titulo:"CriptoMine",
          texto:"Simple billetera para criptomonedas, usala para trading",
          categ1:"Js",
          categ2:"Html",
          imagen:CriptoMine,
          url:"#",
        },
        {
          id:2,
          titulo:"Federación Venezolana de Esgrima",
          texto:"Página oficial de la federación venezolana de esgrima, hecha con tecnologia de Wordpress",
          categ1:"Wordpress",
          categ2:"Elementor",
          imagen:Fencingven,
          url:"https://fencingven.com",
        },
        {
          id:3,
          titulo:"Gotoca Imports",
          texto:"Diseño y desarrollo de un ecommerce para la empresa importadora de repuestos para camiones Gotoca Imports ",
          categ1:"Wordpress",
          categ2:"Elementor",
          imagen:Gotoca,
          url:"https://gotoca.net.ve",
        },
        {
          id:4,
          titulo:"Windows",
          texto:"Aqui va algo",
          categ1:"Wordpress",
          categ2:"Html",
          imagen:Billetera,
          url:"#",
        },
        {
          id:5,
          titulo:"Windows",
          texto:"Aqui va algo",
          categ1:"Wordpress",
          categ2:"Html",
          imagen:Billetera,
          url:"#",
        },
        {
          id:6,
          titulo:"Mac",
          texto:"Aqui va algo",
          categ1:"Wordpress",
          categ2:"Html",
          imagen:Billetera,
          url:"#",
        },   
    
      ];
   return (
    <div className='grid grid-cols-1 md:grid-cols-3 justify-center gap-2'>  
    {itemsimg.map(({id,imagen, titulo,url,texto,categ1,categ2})=>(
        <div key={id} className="mb-4 bg-[#252734] rounded overflow-hidden shadow-inner">
          <img className="w-full" src={imagen} alt={titulo}/>
          <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">{titulo}</div>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{categ1}</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{categ2}</span>
              <p className="text-white text-base">
              {texto}
              </p>
          </div>
          <div className="px-6 pt-4 pb-2">
              <a href={url} target="_blank" rel='noreferrer' class="inline-block w-full bg-gray-200 rounded px-5 py-2 text-center uppercase
               font-bold text-gray-700 hover:text-white mr-2 mb-2 hover:bg-amber-300">
                visitar
            </a>                             
          </div>
        </div>
      ))}
    </div>
   )
 }
 
 export default ImgPortafolio
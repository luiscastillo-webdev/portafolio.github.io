 import React from 'react'
 import Billetera from "../assets/img/billetera.png";
 import Qtk from "../assets/img/proyectos/quanthyka.png";
 
 const ImgPortafolio = () => {

    const itemsimg=[
        {
          id:1,
          titulo:"Linux",
          texto:"Aqui va algo",
          categ1:"Wordpress",
          categ2:"Html",
          imagen:Billetera,
          url:"#",
        },
        {
          id:2,
          titulo:"Windows",
          texto:"Aqui va algo",
          categ1:"Wordpress",
          categ2:"Html",
          imagen:Qtk,
          url:"#",
        },
        {
          id:3,
          titulo:"Windows",
          texto:"Aqui va algo",
          categ1:"Wordpress",
          categ2:"Html",
          imagen:Billetera,
          url:"#",
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
        <div key={id} class="mb-4 bg-[#252734] rounded overflow-hidden shadow-inner">
          <img class="w-full" src={imagen} alt={titulo}/>
          <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-white">{titulo}</div>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{categ1}</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{categ2}</span>
              <p class="text-white text-base">
              {texto}
              </p>
          </div>
          <div class="px-6 pt-4 pb-2">
              <a href={url} target="_blank" class="inline-block bg-gray-200 rounded px-5 py-2 text-md font-bold text-gray-700 mr-2 mb-2 hover:bg-violet-100">
                visitar
            </a>                             
          </div>
        </div>
      ))}
      </div>
   )
 }
 
 export default ImgPortafolio
import { useState, useEffect } from "react";
import {FaBars,FaTimes} from "react-icons/fa";
import { NavLink } from "react-router-dom";
 
const NavBar = () => {
  const [navSize, setnavSize] = useState("5rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 5 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 5 ? setnavSize("4rem") : setnavSize("5rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

const [nav,setNav] = useState(false)
  const links = [
    {
      id:1,
      link:"home",
      url:"/",
    },
    {
      id:2,
      link:"about",
      url:"/about",
    },
    {
      id:3,
      link:"portafolio",
      url:"/portafolio",
    },
    {
      id:4,
      link:"experiencia",
      url:"/experiencia",
    },
    {
      id:5,
      link:"contacto",
      url:"/contacto",
    },

  ];

  return (
    
    <div style={{
      backgroundColor: navColor,
      height: navSize,
      transition: "all 1s",
      position: "fixed",
      width: "100%",
      alignItems: "center",
      display:"flex",
      justifyContent:"space-between",
      padding:"0 1rem 0 1rem",
      color:"#fff"
    }}> 
        
        <h1 className="text-4xl ml-3">Castillo Web Dev</h1>
        
        <ul className="hidden md:flex">
          {links.map(({id, link, url})=>(
            <li key={id} 
                className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-125">
                <NavLink to={url}>{link}</NavLink>
            </li>                
          ))}          
        </ul>
        <div onClick={()=>setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}          
        </div>

        {nav && (          
          <ul className="flex flex-col justify-center items-center absolute z-999 top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({id, link, url})=>(
              <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white">               
                 <NavLink to={url}>{link}</NavLink>
              </li>                
            ))}          
          </ul>
        )}     
    </div>
    
  )
}

export default NavBar
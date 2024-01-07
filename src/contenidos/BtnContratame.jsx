import React from 'react'
import K from "../assets/img/k.png";
import { motion, useTime, useTransform } from "framer-motion";

const BtnContratame = () => {
    const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  return (
    
    <div className="items-center absolute z-10 ml-4 md:ml-[60rem] mt-52 md:mt-[25rem]">
      <motion.div style={{rotate}} >
        <img className='h-[128px] md:h-[250px] w-[128px] md:w-[250px]' src={K} />
      </motion.div>
      
    </div>
     
  )
}

export default BtnContratame
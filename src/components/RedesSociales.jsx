import React from 'react'
import { TiSocialTwitter,TiSocialInstagram,TiSocialGithub } from "react-icons/ti";
import { IoIosMail } from "react-icons/io";
import { motion } from 'framer-motion';

const RedesSociales = () => {
    const linksocial=[
        {
            id:1,
            item:<TiSocialTwitter size={40}/>,
            href:'#',
        },
        {
            id:2,
            item:<TiSocialInstagram size={40}/>,
            href:'#',
        },
        {
            id:3,
            item:<TiSocialGithub size={40}/>,
            href:'#',
        },
        {
            id:4,
            item:<IoIosMail size={40}/>,
            href:'#',
        },
    ];
  return (
    <div className="my-5">
        <ul className='flex flex-row mt-6'>
        {linksocial.map(({id,item,href})=>(
            <li key={id} className="link-social bg-gradient-to-r from-orange-800 to-amber-900 text-white mr-3 p-1 rounded-xl">
                <motion.div
                  whileHover={{ scale: 1.6 }} 
                    transition={{
                    ease: "linear",
                    duration: 5,
                    x: { duration: 1 }
                  }}                
                >
                  <a href={href}>{item}</a>
                </motion.div>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default RedesSociales
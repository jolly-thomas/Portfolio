import React from 'react'
import { motion } from "framer-motion"
const Nav = () => {
  
  return (
    <motion.div 
        initial={{ opacity: 0, scale: 1.0 }}
        animate={{ opacity: 1, scale: 1.0 }}
        transition={{ duration: 1.5}}>
    <div className='flex justify-end space-x-10 h-10 w-full'>
        
        <a className='text-white font-medium text-3xl text hover:text-gray-400 hover:cursor-pointer' href='#socials'>
          Socials
        </a>
        <a className='text-white font-medium text-3xl hover:text-gray-400 hover:cursor-pointer' href='#recruiters' >
          Recruiters
        </a>
        <a className='text-white font-medium text-3xl hover:text-gray-400 hover:cursor-pointer' href='#contact'>
          Contact
        </a>
        
    </div>
    </motion.div>
  )
}

export default Nav
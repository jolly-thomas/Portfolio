import React from 'react'
import { motion } from "framer-motion"
import About from './About'
import { styles } from './styles'
const Name = () => {
  return (
    
    <div className='md:h-screen block w-full  space-y-5 pt-10 pb-10 bg-black hover:cursor-default '>
      <div className='md:text-left pt-24 md:pt-52  bg-black'>
      <motion.div 
        initial={{ opacity: 0, scale: 1.0 }}
        animate={{ opacity: 1, scale: 1.0 }}
        transition={{ duration: 1.5}}>
        <h1 className={styles.Title}>Hi! I'm Aditya</h1>
      </motion.div>
      </div>
      <div>
      <About/>
      </div>
      </div>
    
      
  )
}

export default Name
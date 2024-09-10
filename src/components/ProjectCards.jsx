import React from 'react'
import { styles } from './styles'
import { motion } from "framer-motion"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from '@/components/ui/button'
  import { Tilt } from 'react-tilt'
  const defaultOptions = {
      reverse:        false,  // reverse the tilt direction
      max:            30,     // max tilt rotation (degrees)
      perspective:    1500,   // Transform perspective, the lower the more extreme the tilt gets.
      scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
      speed:          1000,   // Speed of the enter/exit transition
      transition:     true,   // Set a transition on enter/exit.
      axis:           null,   // What axis should be disabled. Can be X or Y.
      reset:          true,    // If the tilt effect has to be reset on exit.
      easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  
const ProjectCards = (props) => {
    const list = {
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
        hidden: {
          opacity: 0,
          transition: {
            when: "afterChildren",
          },
        },
      }
      const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }
  return (
    <motion.div
    variants={list}
            initial={{x:-200}}
            animate={{x:0}}
            delay={1}
            transition={{ ease: "easeOut", duration: 2 }}
        >
        <Tilt options={defaultOptions} >
        <motion.div
        variants={item}
        >
            <Card className=' md:w-72 shadow-xl shadow-indigo-500/50 '>
                <CardHeader>
                    <CardTitle>
                        <p className={styles.ItemHead}>{props.name}</p>
                    </CardTitle>
                    <img src={props.image} className=' rounded w-full h-36 '/>
                    
                    <CardDescription>
                        <p className={styles.ItemSubHead}>{props.description}</p>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button className='rounded bg-white text-black text-[20px] hover:bg-slate-400 w-1/3' onClick={() => window.open(props.link, "_blank")}>Github</Button>
                </CardContent>
            </Card>
            </motion.div>
           
        </Tilt>
        </motion.div>
  )
}

export default ProjectCards
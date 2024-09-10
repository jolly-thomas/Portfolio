import React from 'react'
import { styles } from './styles'
import ProjectCards from './ProjectCards'
import { projects } from '@/components/Information'
const Projects = () => {
  return (
    <div className=' bg-black  pb-10'>
        
        <div className=' w-full text-center hover:cursor-default'>
            <h1 className={styles.SectionHead}>Projects Showcase</h1>
            <h3 className={styles.SectionSubHead}>Let him cook.</h3>
        </div>
        <div className=' grid grid-cols-1 gap-y-10 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-y-12 pt-10  justify-items-center '>
         
          { projects.map((project,index) =>(                  
              <ProjectCards  key ={index} name={project.title} description={project.description} link={project.github} image={project.image}/>
       
          ))}
        </div>
        
    </div>
  )
}

export default Projects
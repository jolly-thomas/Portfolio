import React from 'react'
import TimelineComponent from './TimelineComponent'
import { styles } from './styles'
const Experience = () => {
  return (
    <div>
    <div className=' w-full text-center bg-black pt-10 pb-10 hover:cursor-default'>
       <h1 className={styles.SectionHead}>My Journey so Far</h1>
       <h3 className={styles.SectionSubHead}>From clueless to slightly less clueless.</h3>
      </div>
       <div className='pt-10 pb-10'>
          <TimelineComponent />
       </div>
       </div>
    
  )
}

export default Experience
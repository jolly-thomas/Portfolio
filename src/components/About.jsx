import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const About = () => {
  return (
    <div className=' w-5/6 '>
        <div className=' w-full md:text-left '>
        <TypeAnimation 
        sequence={[
            // Same substring at the start will only be typed out once, initially
          "Currently pursuing a degree in AI and Machine Learning, a deep passion for mathematics and problem-solving guides my journey. Driven by curiosity, I delight in exploring new concepts and tackling challenges. In leisure, I enjoy gaming and diverse readings, and occasionally find peace in gazing at the wall or ceiling."         
          ,1000, // wait 1s before replacing "Mice" with "Hamsters"
        ]}
        wrapper="span"
        speed={70}
        style={{ fontSize: '30px', display: 'inline-block' }}
        repeat={1}
        />
        </div>
    </div>
  )
}

export default About
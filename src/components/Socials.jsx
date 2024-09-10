import React from 'react'
import github from '../assets/github-sign.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin-logo.png'
import pin from '../assets/pin.png'
import discord from '../assets/discord.png'
import { styles } from './styles'
import spotify from '../assets/spotify.png'

const Socials = () => {
  return (
    <div className='w-full md:flex md:flex-col md:items-center' id='socials'>
        <div className=' text-center hover:cursor-default pt-10 pb-10'>
        <h1 className={styles.SectionHead}>Find me Online</h1>
        <h3 className={styles.SectionSubHead}>I'm everywhere!</h3>
        </div>
        <div className=' grid grid-rows-2 grid-flow-col gap-y-4 pt-4 pb-4  justify-items-center  md:w-4/6  bg-white md:flex md:justify-center md:items-center md:space-x-8 rounded'>
        
        <a href='https://github.com/thatadi' target='_blank'><img src={github} alt='github' className='w-9 h-9 md:w-12 md:h-12 transition-transform ease-in-out hover:duration-300 hover:scale-125 hover:cursor-pointer'/></a>
        <a href='https://x.com/furious_thomas_?t=30-WjMrP2oR4FmV39IIWRA&s=09' target='_blank'><img src={twitter} alt='twitter' className='w-9 h-9 md:w-12 md:h-12 transition-transform ease-in-out hover:duration-300 hover:scale-125 hover:cursor-pointer'/></a>
        <a href='www.linkedin.com/in/adityaryaka' target='_blank'><img src={linkedin} alt='linkedin' className='w-9 h-9 md:w-12 md:h-12 transition-transform ease-in-out hover:duration-300 hover:scale-125 hover:cursor-pointer' /></a>
        <a href='https://maps.app.goo.gl/EswqXuvzbTvUi4pn9' target='_blank'><img src={pin} alt='google maps' className='w-9 h-9 md:w-12 md:h-12 transition-transform ease-in-out hover:duration-300 hover:scale-125 hover:cursor-pointer'/></a>
        <a href='https://discord.gg/4vHVaBaV' target='_blank'><img src={discord} alt='discord' className='w-9 h-9 md:w-12 md:h-12 transition-transform ease-in-out hover:duration-300 hover:scale-125 hover:cursor-pointer'/></a>
        <a href='https://open.spotify.com/user/31rbwimf5gwy5esv63ukitmg5kj4?si=pUoYkjFkTQi-x8z0bqdClA' target='_blank'><img src={spotify} alt='spotify' className='w-9 h-9 md:w-12 md:h-12 transition-transform ease-in-out hover:duration-300 hover:scale-125 hover:cursor-pointer'/></a>
        </div>
    </div>
  )
}

export default Socials
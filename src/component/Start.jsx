import React, { useState } from 'react';
import videoBg from '../assets/vloop.mp4';
import { motion } from "framer-motion";
import { disableBodyScroll, enableBodyScroll, 
  clearAllBodyScrollLocks } from 'body-scroll-lock';
import disableScroll from 'disable-scroll';
import { ArrowStart } from './ArrowStart';
import { ArrowOptions } from './ArrowOptions';


const Start = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  isActive ? disableScroll.off() : disableScroll.on()

  return (
    <div className='start'>
        <div className="overlay"></div>
        <video src={videoBg} muted loop autoPlay/>
        <div className="content">
          <div className="welcome-title">
            <h1 style= {{backgroundColor: isActive ? 'blue' : 'pink',}}
            >Welcome</h1>
          </div>
          <div className="arrow-buttons">
            <div onClick={handleClick}><ArrowStart /></div>
            <ArrowOptions />
          </div>
        </div>
        
    </div>
  )
}

export default Start
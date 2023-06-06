import React from 'react';
import videoBg from '../assets/vloop.mp4';
import { motion } from "framer-motion";
import { ArrowStart } from './ArrowStart';
import { ArrowOptions } from './ArrowOptions';



const Start = () => {
  return (
    <div className='start'>
        <div className="overlay"></div>
        <video src={videoBg} muted loop autoPlay />
        <div className="content">
          <div className="welcome-title">
            <h1>Welcome</h1>
          </div>
          <div className="arrow-buttons">
            <ArrowStart />
            <ArrowOptions />
          </div>
        </div>

    </div>
  )
}

export default Start
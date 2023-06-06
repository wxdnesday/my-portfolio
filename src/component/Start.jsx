import React from 'react'
import videoBg from '../assets/vloop.mp4'
import { motion } from "framer-motion";
const Start = () => {
  return (
    <div className='start'>
        <div className="overlay"></div>
        <video src={videoBg} muted loop autoPlay />
        <div className="content">
            <h1>Welcome</h1>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="start-button"
              onClick={() => null}
            >
              START
            </motion.button>
        </div>

    </div>
  )
}

export default Start
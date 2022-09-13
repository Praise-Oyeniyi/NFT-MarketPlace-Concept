import React from 'react'
import { motion } from 'framer-motion'

const Loader = ({loading, setLoading, container, item, Logo}) => {
  return (
    <motion.div 
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className='bg-dark-bg w-screen h-screen fixed z-50 flex justify-center items-center'>

        <motion.div 
        layoutId='logo-animate' variants={item}>
        <img src={Logo} alt="Logo" className='h-72'/>
        </motion.div>
    </motion.div>
  )
}

export default Loader
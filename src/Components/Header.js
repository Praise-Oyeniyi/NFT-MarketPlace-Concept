import React from 'react'
import Button from './Button'
import Logo from '../Images/logo.png'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <header className='header-container h-screen w-screen'>
          <div className="header w-5/6 h-full mx-auto sm:w-[90%]">

            <nav className='w-full flex justify-between h-20 items-center'>
              <div className="logo-area flex justify-center items-center">
                <img src={Logo} alt="Logo" className='h-24 sm:h-20'/>
                <h3 className='Sitename text-2xl font-semibold tracking-wide hover:text-linear-mid'>EMC<span className=' line-through'>2</span></h3>
              </div>

              <div className="nav-links w-3/6 flex justify-evenly space-x-5 items-center sm:w-auto">
                <ul className='w-full flex space-x-5 items-center justify-around text-base font-medium sm:hidden'>
                  <li className='link-hover border-y-2 py-2 border-y-transparent hover:border-y-linear-mid'>Marketplace</li>
                  <li className='link-hover border-y-2 py-2 border-y-transparent hover:border-y-linear-mid'>Collection</li>
                  <li className='link-hover border-y-2 py-2 border-y-transparent hover:border-y-linear-mid'>Community</li>
                  <li className='link-hover border-y-2 py-2 border-y-transparent hover:border-y-linear-mid'>Create</li>
                </ul>
                
                <Button Text={'Wallet'} Class={'bg-button px-5'}/>
              </div>
            </nav>


            <main className='header-text w-3/6 space-y-5 mt-[4%] small:w-full small:mt-[15%]'>

              <section className='space-y-5 small:text-center'>
                <motion.h2
                  initial={{y:"-100%", x:"-100%",}} animate={{y:0, x:0,}} transition={{duration:1, type:'ease', delay:.5}} 
                  className='text-6xl font-medium md:text-5xl sm:text-4xl'>
                  
                  Discover <br/>Collect, & Sell 
                  <span className='extra font-bold tracking-wider bg-clip-text bg-gradient-to-r from-linear-left via-linear-mid to-linear-right '> Extraordinary </span><br/>
                  NFTs
                </motion.h2>
                <motion.div 
                  initial={{y:"100%", x:"-100%",}} animate={{y:0, x:0,}} transition={{duration:1, type:'ease', delay:.5}}
                  className='call-to-action w-full space-y-5'>
                  
                  <p className='w-4/6 text-base small:w-full '>
                    The leading NFT Marketplace on Ethereum Home to the next generation of digital creators.
                  </p>

                  <Button Text={'Explore'} Class={'bg-button px-7'}/>
                </motion.div>

              </section>
              
              <motion.section 
              initial={{y:'100%',opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.6, type:'ease', delay:.3}}
              className='w-3/6 flex justify-between items-center pt-8 small:mx-auto md:w-4/6 sm:w-5/6 sm:pt-2'>
                <div className='block text-center'>
                  <h3 className='text-2xl font-medium'>
                    432K+
                  </h3>
                  <h6 className='text-xs text-center'>Collection</h6>
                </div>

                <div className='block text-center'>
                  <h3 className='text-2xl font-medium'>
                    200K+
                  </h3>
                  <h6 className='text-xs text-center'>CArtists</h6>
                </div>

                <div className='block text-center'>
                  <h3 className='text-2xl font-medium'>
                    10K+
                  </h3>
                  <h6 className='text-xs text-center'>Community</h6>
                </div>
              </motion.section>

            </main>
          </div>

        </header>
  )
}

export default Header
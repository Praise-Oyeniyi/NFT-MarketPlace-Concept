import React from 'react'
import Button from './Button'
import Logo from '../Images/logo.png'

const Header = () => {
  return (
    <header className='header-container h-screen w-screen'>
          <div className="header w-5/6 h-full mx-auto">

            <nav className='w-full flex justify-between h-20 items-center'>
              <div className="logo-area flex justify-center items-center">
                <img src={Logo} alt="Logo" className='h-24'/>
                <h3 className='Sitename text-2xl font-semibold tracking-wide hover:text-linear-mid'>EMC<span className=' line-through'>2</span></h3>
              </div>

              <div className="nav-links w-3/6 flex justify-evenly space-x-5 items-center">
                <ul className='w-full flex space-x-5 items-center justify-around text-base font-medium'>
                  <li className='link-hover border-y-2 py-2 border-y-transparent hover:border-y-linear-mid'>Marketplace</li>
                  <li className='link-hover border-y-2 py-2 border-y-transparent hover:border-y-linear-mid'>Collection</li>
                  <li className='link-hover border-y-2 py-2 border-y-transparent hover:border-y-linear-mid'>Community</li>
                  <li className='link-hover border-y-2 py-2 border-y-transparent hover:border-y-linear-mid'>Create</li>
                </ul>
                
                <Button Text={'Wallet'} Class={'bg-button px-5'}/>
              </div>
            </nav>


            <main className='header-text w-3/6 space-y-5 mt-[4%]'>

              <section className='space-y-5'>
                <h2 className='text-6xl font-medium'>
                  Discover <br/>Collect, & Sell 
                  <span className='extra font-bold tracking-wider bg-clip-text bg-gradient-to-r from-linear-left via-linear-mid to-linear-right '> Extraordinary </span><br/>
                  NFTs
                </h2>
                <p className='w-4/6 text-base'>
                  The leading NFT Marketplace on Ethereum Home to the next generation of digital creators.
                </p>
                <Button Text={'Explore'} Class={'bg-button px-7'}/>
              </section>
              
              <section className='w-3/6 flex justify-between items-center pt-8'>
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
              </section>

            </main>
          </div>

        </header>
  )
}

export default Header
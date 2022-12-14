import React from 'react'
import Box from '../Images/image5.png'
import Crypto from '../Images/crypto.png'
import Button from '../Components/Button';
import MM from '../Images/mm.png';
import BIN from '../Images/binance.png';
import TW from '../Images/TransferWise.png';

const Discover = () => {
  return (
    <div className='mask discover-outer w-full mt-24 pb-16 mb-8'>
          <div className="dis-inner w-[90%] flex justify-between items-start mx-auto space-x-24 px-16 small:px-0 md:space-x-5 sm:flex-col sm:space-x-0">
            <div className='animate-border w-[35%] border hover:border-button flex flex-col justify-center items-center space-y-5 pb-8 sm:w-5/6 md:w-3/6 sm:mx-auto'>
              <div className="animate-image h-[25em] sm:h-[20em] w-5/6 mx-auto bg-[url('./Images/Ape1.png')]"></div>

              <div className='w-4/6 flex items-center justify-between bg-ape-desc small:w-5/6'>
                <img src={Box} alt="" className='h-10'/>
                <div>
                  <h3 className='text-sm pb-1'>HAPE #8064</h3>
                  <p className='text-[0.7rem]'>HAPE PRIME</p>
                </div>
                <img src={Crypto} alt="Cryptocurrency Logo" className='h-10'/>
              </div>

              <div className='w-4/6 flex justify-between items-center bg-ape-desc h-12 small:w-5/6'>
                <div>
                  <h3 className='text-sm pb-1 tracking-wider sm:tracking-wide'>15.8 ETH</h3>
                  <p className='text-[0.7rem]'>latest bid</p>
                </div>

                <div>
                  <h3 className='text-sm pb-1 tracking-wider sm:tracking-wide'>9.45 ETH</h3>
                  <p className='text-[0.7rem]'>from</p>
                </div>

                <div>
                  <h3 className='text-sm pb-1 tracking-wider sm:tracking-wide'>$180, 345</h3>
                  <p className='text-[0.7rem] text-price'>+12.45%</p>
                </div>

              </div>

            </div>

            <section className='w-3/6 pt-20 space-y-14 sm:w-full sm:!mx-auto sm:text-center'>
              <div className='space-y-5'>
                <h2 className='text-6xl font-medium md:text-5xl sm:text-4xl'>
                  Discover<br/>
                  <span className='extra font-bold tracking-wider bg-clip-text bg-gradient-to-r from-linear-left via-linear-mid to-linear-right '>Trending</span> <br/>
                  Collections
                </h2>
                <p className='w-4/6 text-base md:w-5/6 sm:w-full sm:text-sm'>
                  The leading NFT Marketplace on Ethereum Home to the next generation of digital creators.
                </p>
                <Button Text={'See All'} Class={'bg-button px-8'}/>
              </div>


              <div className='w-4/6 flex justify-between items-center md:w-full sm:space-x-5 sm:mx-auto'>
                <div className='text-center space-y-2 icon-div'>
                  <img src={MM} alt="metamask" className='h-14 sm:h-10'/>
                  <h4 className='sm:text-xs'>METAMASK</h4>
                </div>

                <div className='text-center space-y-2 icon-div'>
                  <img src={BIN} alt="binance" className='h-14 sm:h-10'/>
                  <h4 className='sm:text-xs'>BINANCE</h4>
                </div>
              
                <div className='text-center space-y-2 icon-div'>
                  <img src={TW} alt="transferwise Logo" className='h-14 sm:h-10'/>
                  <h4 className='sm:text-xs'>TransferWise</h4>
                </div>
              </div>


            </section>          
          </div>
    </div>

  )
}

export default Discover
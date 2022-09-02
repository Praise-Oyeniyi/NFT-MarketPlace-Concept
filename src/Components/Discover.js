import React from 'react'
import Ape from '../Images/Ape1.png';
import Box from '../Images/image5.png'
import Button from '../Components/Button';
import MM from '../Images/mm.png';
import BIN from '../Images/binance.png';
import TW from '../Images/TransferWise.png';

const Discover = () => {
  return (
    <div className='discover-outer w-full mt-24'>
          <div className="dis-inner w-[90%] flex justify-between items-start mx-auto space-x-24 px-16">
            <div className='w-[35%] border border-button flex flex-col justify-center items-center space-y-5 py-5'>
              <img src={Ape} alt="ape" className='w-[25em]' />

              <div className='w-4/6 flex items-center justify-between bg-ape-desc'>
                <img src={Box} alt="" className='h-10'/>
                <div>
                  <h3 className='text-sm pb-1'>HAPE #8064</h3>
                  <p className='text-[0.7rem]'>HAPE PRIME</p>
                </div>
                <img src={Box} alt="Cryptocurrency Logo" className='h-10'/>
              </div>

              <div className='w-4/6 flex justify-between items-center bg-ape-desc h-12'>
                <div>
                  <h3 className='text-sm pb-1'>15.8 ETH</h3>
                  <p className='text-[0.7rem]'>latest bid</p>
                </div>

                <div>
                  <h3 className='text-sm pb-1'>9.45 ETH</h3>
                  <p className='text-[0.7rem]'>from</p>
                </div>

                <div>
                  <h3 className='text-sm pb-1'>$180, 345</h3>
                  <p className='text-[0.7rem] text-price'>+12.45%</p>
                </div>

              </div>

            </div>

            <section className='w-3/6 pt-20 space-y-16'>
              <div className='space-y-5'>
                <h2 className='text-6xl font-medium'>
                  Discover<br/>
                  <span className='extra font-bold tracking-wider bg-clip-text bg-gradient-to-r from-linear-left via-linear-mid to-linear-right '>Trending</span> <br/>
                  Collections
                </h2>
                <p className='w-4/6 text-base'>
                  The leading NFT Marketplace on Ethereum Home to the next generation of digital creators.
                </p>
                <Button Text={'See All'} Class={'bg-button px-8'}/>
              </div>


              <div className='w-5/6 flex justify-between items-center'>
                <div className='text-center space-y-2'>
                  <img src={MM} alt="metamask" className='h-14'/>
                  <h4>METAMASK</h4>
                </div>

                <div className='text-center space-y-2'>
                  <img src={BIN} alt="binance" className='h-14'/>
                  <h4>BINANCE</h4>
                </div>
              
                <div className='text-center space-y-2'>
                  <img src={TW} alt="transferwise Logo" className='h-14'/>
                  <h4>TransferWise</h4>
                </div>
              </div>


            </section>          
          </div>
    </div>

  )
}

export default Discover
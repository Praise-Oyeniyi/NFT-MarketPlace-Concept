import React from 'react'
import Instagram from '../Images/insta.svg';
import Twitter from '../Images/twitter.svg';
import Facebook from '../Images/facebook.svg';
import Discord from '../Images/discord.svg';
import Youtube from '../Images/youtube.svg';
import Button from './Button'
import Logo from '../Images/logo.png'

const Footer = () => {
  return (
    <footer className='w-full text-center space-y-8 bg-[#ffffff13] py-10'>
            
    <h3 className='text-3xl pb-2'>Get More Updates</h3>

    <p className='text-base'>
      Join our mailing list to stay in the loop with our newest feature releases, 
      NFT drops, and tips and tricks 
    </p>

    <form action="#" className='w-3/6 bg-lwhite mx-auto relative flex rounded-xl p-1 h-12'>
      <input type="email" name="Email" id="email" placeholder='Your Email' className='pl-6 h-full bg-[rgba(255,255,255,0%)] border-none outline-none w-5/6 placeholder:text-lwhite placeholder:text-sm' required/>
      <Button Text={"I'm in"} Class={'px-6 bg-button w-1/6'}/>
    </form>


    <div className='w-full p-4 text-left'>

      <div className='w-full mx-auto border-t border-lwhite flex justify-evenly items-baseline px-24 space-x-8 py-4'>

        <div className='w-auto space-y-5'>
          <div className="logo-area flex justify-start items-center">
            <img src={Logo} alt="Logo" className='h-14'/>
            <h3 className='Sitename text-2xl font-semibold tracking-wider hover:text-linear-mid'>EMC<span className=' line-through'>2</span></h3>
          </div>
          <p className='text-base w-4/6'>
            The leading NFT Marketplace on Ethereum
            Home to the next generation of digital creators. Discover the best NFT collections.
          </p>
          <div className="w-5/6 icons flex space-x-5 pt-2">
            <img src={Discord} alt="social icons" className='h-10 w-10 p-2 border border-lwhite hover:border-button'/>
            <img src={Twitter} alt="social icons" className='h-10 w-10 p-2 border border-lwhite hover:border-button'/>
            <img src={Facebook} alt="social icons" className='h-10 w-10 p-2 border border-lwhite hover:border-button'/>
            <img src={Discord} alt="social icons" className='h-10 w-10 p-2 border border-lwhite hover:border-button'/>
            <img src={Youtube} alt="social icons" className='h-10 w-10 p-2 border border-lwhite hover:border-button'/>
          </div>
        </div>

        <div className='w-2/6 space-y-5'>
          <h3 className='text-2xl font-medium tracking-wide'>MarketPlace</h3>
          <ul className='footer-links space-y-3 text'>
            <li className='hover:text-linear-mid'>Explore</li>
            <li className='hover:text-linear-mid'>Articles</li>
            <li className='hover:text-linear-mid'>How It Works</li>
            <li className='hover:text-linear-mid'>Help</li>
          </ul>
        </div>

        <div className='w-2/6 space-y-5'>
          <h3 className='text-2xl font-medium tracking-wide'>Links</h3>
          <ul className='footer-links space-y-3 text-lg'>
            <li className='hover:text-linear-mid'>Tokens</li>
            <li className='hover:text-linear-mid'>API</li>
            <li className='hover:text-linear-mid'>Big Bounty</li>
            <li className='hover:text-linear-mid'>Become Partners</li>
          </ul>
        </div>

      </div>

    </div>


  </footer>
  )
}

export default Footer
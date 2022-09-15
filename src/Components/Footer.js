import React from 'react'
import Instagram from '../Images/insta.svg';
import Twitter from '../Images/twitter.svg';
import Facebook from '../Images/facebook.svg';
import Discord from '../Images/discord.svg';
import Youtube from '../Images/youtube.svg';
import Button from './Button'
import Logo from '../Images/logo.svg'

const Footer = () => {
  return (
    <footer className='w-full text-center space-y-8 sm:space-y-5 bg-[#ffffff13] py-10 z-50 pointer-events-auto box-after relative'>
            
        <h3 className='text-3xl pb-2 font-medium'>Get More Updates</h3>

        <p className='text-base px-5 sm:text-sm sm:!mt-0'>
        Join our mailing list to stay in the loop with our newest feature releases, 
        NFT drops, and tips and tricks 
        </p>

        <form action="#" className='w-3/6 bg-lwhite mx-auto relative flex rounded-xl p-1 h-12 small:w-5/6 items-center'>
            <input type="email" name="Email" id="email" placeholder='Your Email' className='pl-6 h-full bg-[rgba(255,255,255,0%)] border-none outline-none w-5/6 placeholder:text-lwhite placeholder:text-sm' required/>
            <Button Text={"I'm in"} Class={'px-6 bg-button w-1/6 form-btn sm:!w-2/6'}/>
        </form>


        <div className='w-full p-4 text-left'>

            <div className='w-full mx-auto border-t border-lwhite flex justify-evenly items-baseline px-24 space-x-8 py-4 small:px-5 small:items-start sm:flex-col sm:space-y-8 sm:space-x-0'>

                <div className='w-auto space-y-5 md:w-3/6 sm:w-full sm:space-y-3'>
                    <div className="logo-area flex justify-start items-center sm:justify-center">
                        <img src={Logo} alt="Logo" className='h-14'/>
                        <h3 className='Sitename text-2xl font-semibold tracking-wider hover:text-linear-mid'>EMC<span className=' line-through'>2</span></h3>
                    </div>
                    <p className='text-base w-4/6 md:w-5/6 sm:w-full sm:text-center sm:text-sm'>
                        The leading NFT Marketplace on Ethereum
                        Home to the next generation of digital creators. Discover the best NFT collections.
                    </p>
                    <div className="w-5/6 icons flex space-x-5 pt-2 sm:hidden">
                        <img src={Instagram} alt="social icons" className='h-10 w-10 p-2 border border-lwhite hover:border-button'/>
                        <img src={Twitter} alt="social icons" className='h-10 w-10 p-2 border border-lwhite hover:border-button'/>
                        <img src={Facebook} alt="social icons" className='h-10 w-10 p-2 border border-lwhite hover:border-button'/>
                        <img src={Discord} alt="social icons" className='h-10 w-10 p-2 border border-lwhite hover:border-button'/>
                        <img src={Youtube} alt="social icons" className='h-10 w-10 p-2 border border-lwhite hover:border-button'/>
                    </div>
                </div>

                <div className='w-2/6 space-y-5 sm:w-full sm:mx-auto sm:text-center sm:space-y-3'>
                    <h3 className='text-2xl font-medium tracking-wide md:pt-4'>MarketPlace</h3>
                    <ul className='footer-links space-y-3 text-lg sm:text-base'>
                        <li className='link-hover'>Explore</li>
                        <li className='link-hover'>Articles</li>
                        <li className='link-hover'>How It Works</li>
                        <li className='link-hover'>Help</li>
                    </ul>
                </div>

                <div className='w-2/6 space-y-5 sm:w-full sm:mx-auto sm:text-center sm:space-y-3'>
                    <h3 className='text-2xl font-medium tracking-wide md:pt-4'>Links</h3>
                    <ul className='footer-links space-y-3 text-lg sm:text-base'>
                        <li className='link-hover'>Tokens</li>
                        <li className='link-hover'>API</li>
                        <li className='link-hover'>Big Bounty</li>
                        <li className='link-hover'>Become Partners</li>
                    </ul>
                    <div className="w-5/6 icons flex space-x-5 pt-2 xl:hidden sm:w-full sm:justify-center sm:items-center">
                        <img src={Instagram} alt="social icons" className='h-10 w-10 p-2 border border-lwhite hover:border-button'/>
                        <img src={Twitter} alt="social icons" className='h-10 w-10 p-2 border border-lwhite hover:border-button'/>
                        <img src={Facebook} alt="social icons" className='h-10 w-10 p-2 border border-lwhite hover:border-button'/>
                        <img src={Discord} alt="social icons" className='h-10 w-10 p-2 border border-lwhite hover:border-button'/>
                        <img src={Youtube} alt="social icons" className='h-10 w-10 p-2 border border-lwhite hover:border-button'/>
                    </div>
                </div>

            </div>


        </div>
        <div className="attributes text-center bg-dark-bg text-linear-mid text-sm absolute bottom-0 w-full h-10 flex justify-center items-center">
            <h4>Designed By <a className='text-linear-left hover:!text-linear-right link-hover' href={'https://twitter.com/Olatoba9'}>@Olatoba</a>, coded by <a className='text-linear-left hover:!text-linear-right link-hover' href={'https://twitter.com/praise_oyeniyi'}>Praise_Oyeniyi</a></h4>
        </div>
    </footer>
  );
};

export default Footer
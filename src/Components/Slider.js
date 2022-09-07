import React from 'react'
import Banner from '../Images/Banner.png';
import Prev from '../Images/Prev.png';
import Next from '../Images/Next.png';

const Slider = () => {
  return (
    <div className='w-[98%] mx-auto mb-24 flex items-center relative'>
        <button className='absolute left-[5%] z-10 top-[49%] translate-y-[-50%]'><img src={Prev} alt='button' className='h-12'/></button>
        <div className='w-[95%] flex mx-auto relative h-auto'>
        <img src={Banner} alt={'slide-views'} className='w-full'/>
        </div>
        <button className='absolute left-[91%] z-10 top-[47.9%] translate-y-[-50%]' ><img src={Next} alt='button' className='h-12'/></button>
    </div>
  )
}

export default Slider
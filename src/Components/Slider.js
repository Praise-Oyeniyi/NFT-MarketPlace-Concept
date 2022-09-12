import React from 'react'
import Banner from '../Images/Banner.png';
import Banner2 from '../Images/Banner02.png';
import Banner3 from '../Images/Banner03.png';
import Prev from '../Images/Prev.png';
import Next from '../Images/Next.png';
import { useState } from 'react';

const Slider = () => {
    const images = [Banner, Banner2, Banner3];
    const [slide, currentSlide] = useState(0);

  return (
    <div className='w-[98%] mx-auto mb-24 flex items-center relative'>
        <button className='absolute left-[5%] z-10 top-[49%] translate-y-[-50%]' onClick={()=>slide === 0?currentSlide(images.length - 1):currentSlide(slide -1)}><img src={Prev} alt='button' className='h-12 sm:h-8'/></button>
        <div className='w-[95%] flex mx-auto relative h-auto'>
            <img src={images[slide]} alt={'slide-views'} className='w-full'/>
        </div>
        <button className='absolute left-[91%] sm:left-[87%] z-10 top-[47.9%] translate-y-[-50%]' onClick={()=>slide === images.length -1? currentSlide(0):currentSlide(slide + 1)}><img src={Next} alt='button' className='h-12 sm:h-8'/></button>
    </div>
  )
}

export default Slider
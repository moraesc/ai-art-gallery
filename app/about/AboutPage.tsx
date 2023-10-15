import React from 'react';
import Image from 'next/image'
import { SAMPLE_IMAGES } from '../constants';

export const AboutPage = () => {
    return <div className='relative flex flex-col lg:flex-row gap-8 justify-center h-full items-center'>
      <div className='flex lg:hidden'>
        <div className='flex flex-col justify-between lg:h-[400px] items-center'>
        <p className='text-white text-[20px] md:text-[20px] w-full px-2 md:w-[520px] font-[Open Sans] font-thin'>
          The AI Art gallery was founded in 2022 with a mission to demonstrate the creative power of AI art tools like Midjourney and DALL•e. 
          The gallery includes a wide variety of art styles (modern, cinematic, contemporary, etc. . .), AI generated branding material, and AI
          genered marketing material. 
        </p>
      </div>   
      </div>
      <div className='grid grid-cols-6 gap-2 mt-4 lg:mt-8'>
        {SAMPLE_IMAGES.slice(0,36).map((image, index) => (
            <div className='relative group' key={index}>
              <div className='absolute top-0 left-0 bg-[rgba(0,0,0,0.6)] z-2 w-[64px] h-[64px] group-hover:hidden'></div>
              <Image
                key={index}
                width={64}
                height={64}
                className={`rounded-lg w-full h-full object-cover`}
                src={image}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
      </div>
      <div className='hidden lg:flex'>
        <div className='flex flex-col justify-between lg:h-[400px] items-center'>
        <p className='text-white text-[20px] md:text-[20px] w-full px-2 md:w-[520px] font-[Open Sans] font-thin'>
          The AI Art gallery was founded in 2022 with a mission to demonstrate the creative power of AI art tools like Midjourney and DALL•e. 
          The gallery includes a wide variety of art styles (modern, cinematic, contemporary, etc. . .), AI generated branding material, and AI
          genered marketing material. 
        </p>
        <p className='text-white text-[16px] w-full px-2 md:w-[520px] font-[Open Sans] font-thin'>
          <a href='mailto:ai.gpt.gallery@gmail.com?subject=Hello!'>Contact us here</a>
        </p>
      </div>   
      </div> 
      <p className='text-white text-[16px] w-full px-2 md:w-[520px] font-[Open Sans] font-thin text-center flex lg:hidden'>
        <a href='mailto:ai.gpt.gallery@gmail.com?subject=Hello!'>Contact us here</a>
      </p>
    </div>
}
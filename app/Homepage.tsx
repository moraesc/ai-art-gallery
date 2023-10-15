import React from 'react';
import Image from 'next/image';
import { SAMPLE_IMAGES } from './constants';

export const Homepage = () => {
  return (
    <div className='relative flex flex-col justify-center h-[100%] items-center'>
       <div className='flex flex-col'>
        <p className='relative justify-center margin-auto text-white text-[32px] md:text-[46px] font-thin font-[Open Sans] w-[480px] text-center'>AI Art Gallery</p>
        <p className='relative justify-center margin-auto text-white text-[14px] font-thin font-[Open Sans] w-[480px] text-center'>A collection of art generated by Midjourney and DALL•E</p>
      </div>
      <div className='grid grid-cols-8 gap-2 mt-8'>
          {SAMPLE_IMAGES.map((image, index) => (
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
      <p className="shimmer mt-4 text-[20px]"><a href='/gallery'>Enter Gallery</a></p>
    </div>
  )
}
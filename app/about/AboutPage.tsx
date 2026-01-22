import React from 'react';

export const AboutPage = () => {
    return (
      <div className='relative flex flex-col lg:flex-row justify-center items-center mt-24 md:mt-48'>
        <div className='flex flex-col justify-between items-center'>
          <h1 className='text-white text-[32px] md:text-[48px] font-[Open Sans] font-bold mb-8'>About the AI Art Gallery</h1>
          <p className='text-white text-[18px] md:text-[20px] w-full px-2 md:w-[520px] font-[Open Sans] font-thin'>
            The AI Art Gallery was established in 2022 with the objective of showcasing the creative potential of AI art tools such as Midjourney and DALL•E.
          </p>
          <p className='text-white text-[18px] md:text-[20px] w-full px-2 md:w-[520px] font-[Open Sans] font-thin mt-8'>
            The gallery features a diverse range of art styles, including modern, abstract, realism, digital, surrealism, and more. Additionally, it showcases AI-generated branding and marketing materials.
          </p>
          <p className='shimmer text-[14px] md:text-[16px] w-full px-2 md:w-[520px] font-[Open Sans] font-thin mt-12 text-[#c8fdff]'>
            <a href='mailto:ai.gpt.gallery@gmail.com?subject=Hello!'>Contact us here</a>
          </p>
        </div>
      </div>
    )
}
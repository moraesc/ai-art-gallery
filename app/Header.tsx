import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
      <div>
        {/* Tablet */}
        <div className='items-center justify-between font-thin hidden md:flex'>
          <div className='flex gap-8 justify-start'>
            <a href='/gallery'>
              <p className='text-[16px] py-8 text-white cursor-pointer'>GALLERY</p>
            </a>
            <a href='/about'>
              <p className='text-[16px] py-8 text-white cursor-pointer'>ABOUT</p>
            </a>
          </div>
          <div className='margin-auto justify-center'>
            <a href='/'>
              < p className='text-[24px] py-8 text-white mr-14'>AI ART GALLERY</p>
            </a>
          </div>
          <div className='flex gap-6 items-center'>
            <div className='text-[16px] py-8 text-white cursor-pointer'>
              <a href='https://www.instagram.com/ai.gpt.gallery/' target='_blank'>
                <Image width={22} height={22} src='/static/images/instagram.png' alt='instagram logo' />
              </a>
            </div>
            <div className='text-[16px] py-8 text-white cursor-pointer'>
              <a href='https://www.tiktok.com/@ai.gpt.gallery/' target='_blank'>
                <Image width={38} height={38} src='/static/images/tiktok.png' alt='tiktok logo' />
              </a>
            </div>
          </div>
      </div>

        {/* Mobile */}
        <div className='flex items-center justify-between font-thin block md:hidden'>
          <div className='flex flex-col'>
            <div>
              <a href='/'>
                < p className='text-[20px] pt-8 text-white mr-14'>AI ART GALLERY</p>
              </a>
            </div>
            <div className='flex gap-8 justify-start mt-4'>
              <a href='/gallery'>
                <p className='text-[12px] text-white cursor-pointer'>GALLERY</p>
              </a>
              <a href='/about'>
                <p className='text-[12px] text-white cursor-pointer'>ABOUT</p>
              </a>
            </div>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='text-[16px] py-8 text-white cursor-pointer'>
              <a href='https://www.instagram.com/ai.gpt.gallery/' target='_blank'>
                <Image width={18} height={18} src='/static/images/instagram.png' alt='instagram logo' />
              </a>
            </div>
            <div className='text-[16px] py-8 text-white cursor-pointer'>
              <a href='https://www.tiktok.com/@ai.gpt.gallery/' target='_blank'>
                <Image width={32} height={32} src='/static/images/tiktok.png' alt='tiktok logo' />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}
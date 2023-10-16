import React from 'react';
import Image from 'next/image';
import { IMAGES } from '../constants';
import { Header } from '../Header';

export default function Gallery() {
    return (
      <>
        <Header />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 bg-black my-8">
          {IMAGES.map((image, index) => (
            <div className='flex' key={index}>
              <Image
                key={index}
                width={200}
                height={200}
                className={`rounded-lg w-full h-full object-cover`}
                src={image}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </>
    );
  };
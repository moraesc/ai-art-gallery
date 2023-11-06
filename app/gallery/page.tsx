'use client'

import React, {useState} from 'react';
import Image from 'next/image';
import { IMAGES } from '../constants';
import { Header } from '../Header';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

export default function Gallery() {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
    return (
      <>
        <Header />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 bg-black my-8">
            {IMAGES.map((image, index) => (
              <div className='flex' key={index} onClick={() => setImageUrl(image)}>
                <Dialog.Root>
                <Dialog.Trigger>
                  <Image
                    key={index}
                    width={200}
                    height={200}
                    className={`rounded-lg w-full h-full object-cover`}
                    src={image}
                    alt={`Image ${index + 1}`}
                  />
                </Dialog.Trigger>
                <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                  <Dialog.Close asChild>
                    <button className="IconButton" aria-label="Close">
                      <Cross2Icon />
                    </button>
                  </Dialog.Close>
                  {imageUrl && <Image
                    key={index}
                    width={200}
                    height={200}
                    className={`rounded-lg w-full h-full object-cover`}
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                  />}
                </Dialog.Content>
              </Dialog.Portal>
              </Dialog.Root>
              </div>
            ))}
        </div>
      </>
    );
  };
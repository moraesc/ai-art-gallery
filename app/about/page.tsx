import React from 'react';
import { Header } from '../Header';
import { AboutPage } from './AboutPage';

export default function About() {
    return (
      <div className='relative bg-black px-8 h-[100%]'>
        <Header />        
        <AboutPage />
      </div>
    );
  };
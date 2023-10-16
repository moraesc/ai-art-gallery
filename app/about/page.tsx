import React from 'react';
import { Header } from '../Header';
import { AboutPage } from './AboutPage';

export default function About() {
    return (
      <div className='relative bg-black h-[100vh]'>
        <Header />        
        <AboutPage />
      </div>
    );
  };
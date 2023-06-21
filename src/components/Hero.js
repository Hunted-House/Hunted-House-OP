import React from 'react';
import Logo from './Logo.js';
import Icon from './Icon.js';

export default function Hero() {
  

  return (
    <div id='home' className='bg-primary h-screen flex'>
      <div className='flex flex-col lg:flex-row items-center justify-center lg:place-content-around w-screen p-4 lg:p-24 '>
        <div className='pb-24 lg:pb-0  lg:w-96'>
          <Logo color='white' />
        </div>
        <p className='text-l lg:text-xl text-center lg:w-1/3 '>
          In samenwerking met gemeente Den Haag proberen wij mens en vleermuis samen te brengen met behulp van immersive technology.</p>
      </div>
    </div>
  );
}

import React from 'react';
import { NavLinkItem } from '../components/styled';
import { RightArrow } from '../components/icons';

const Home = () => {
  return (


    <div className='max-w-7xl mx-auto w-full'>
      <header className='flex items-center justify-between my-4'>
        {/* LOGO */}
        <div className='flex items-center space-x-2'>
          <img src="./branding-assets/CW-Logo-Medium-50x50_3.svg" alt="Calendar Widgets Logo" className='h-14 w-14' />
          <h1 className='p-0 m-0 leading-none'>Calendar Widgets</h1>
        </div>

        <nav className='flex items-center'>
          <NavLinkItem>
            {'Documentation'}
          </NavLinkItem>
          <NavLinkItem>
            {'Tutorials'}
          </NavLinkItem>
          <button className='px-8 py-2 border-1 flex items-center bg-transparent use-primary-color text-base'>
            {'Language'}
            <RightArrow />
          </button>
        </nav>
      </header>

      <p>this is some text that uses Barlow</p>
    </div>

  )
}

export default Home;
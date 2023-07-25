import React from 'react';
import Link from 'next/link';

export default function PageHeader() {
  return (
    <div className='flex w-full justify-between h-[48px] line-clamp-1 bg-opacity-0 py-5 h-auto'>
      <div className='text-lg font-medium hover:text-[#3273dc]'>Sunj blog</div>
      <div className='flex '>
        <Link
          href='/'
          className='text-lg mx-4 font-medium hover:text-[#3273dc]'
        >
          Home
        </Link>
        <Link
          href='/about'
          className='text-lg mx-4 font-medium hover:text-[#3273dc]'
        >
          About
        </Link>
        <Link
          href='/articles'
          className='text-lg mx-4 font-medium hover:text-[#3273dc]'
        >
          Articles
        </Link>
        <Link
          href='/categories'
          className='text-lg mx-4 font-medium last-child:mx-0 hover:text-[#3273dc]'
        >
          Categories
        </Link>
      </div>
    </div>
  );
}

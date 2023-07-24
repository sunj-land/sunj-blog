import React from 'react';
import PageHeader from './page-header';
import PageFooter from './page-footer';
import PageContent from './page-content';
import NavBar from '../navbar/navbar';

export default function PageLayout({ children }) {
  return (
    <div className='w-screen white '>
      <div className='w-full mx-auto relative min-h-screen xl:w-[1280px] px-8 pb-[100px]'>
        <PageHeader></PageHeader>
        <PageContent>{children}</PageContent>
        <PageFooter className='absolute bottom-0'></PageFooter>
      </div>
    </div>
  );
}

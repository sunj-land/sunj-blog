'use client';
import { MDXRemote } from 'next-mdx-remote';
import MDXNav from './mdx-nav';
import MDXContent from './mdx-content';

export default function MDXPreview({ source, components = {}, content }) {
  return (
    <div className='relative w-full'>
      {/* <MDXRemote {...source} /> */}
      <div className='sticky top-4 w-[250px] right-0 hidden float-right md:block '>
        <MDXNav content={content}></MDXNav>
      </div>
      <div className='w-full pl-10 pr-[300px] border-box'>
        <MDXContent source={source}></MDXContent>
      </div>
    </div>
  );
}

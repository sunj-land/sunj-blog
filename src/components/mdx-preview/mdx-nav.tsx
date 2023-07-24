import React from 'react';
import MarkdownNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

export default function MdxNav({ content }) {
  return (
    <>
      <MarkdownNav
        className='article-menu'
        source={content}
        headingTopOffset={80}
      />
    </>
  );
}

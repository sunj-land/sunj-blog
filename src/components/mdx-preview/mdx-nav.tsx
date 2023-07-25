import React from 'react';
import MarkdownNav from 'markdown-navbar';

export default function MdxNav({ content }) {
  return (
    <>
      <MarkdownNav
        className='article-menu'
        source={content}
        headingTopOffset={80}
        ordered={false}
      />
    </>
  );
}

import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import * as antComponents from 'antd';
import * as customComponents from '@/components/md-components';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  coy,
  dark,
  light,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';

const codeComponents = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        {...props}
        children={String(children).replace(/\n$/, '')}
        style={coy}
        language={match[1]}
        PreTag='div'
      />
    ) : (
      <code {...props} className={className}>
        {children}
      </code>
    );
  },
};

const mdUsedComponents = {
  ...codeComponents,
  ...antComponents,
  ...customComponents,
};

export default function MDXContent({ source }) {
  console.log('source=========: ', source);
  return (
    <div>
      <MDXRemote {...source} components={mdUsedComponents} />
    </div>
  );
}

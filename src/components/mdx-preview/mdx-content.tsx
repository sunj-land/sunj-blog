import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import * as antComponents from 'antd';
import * as customComponents from '@/components/md-components';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

const codeComponents = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        {...props}
        children={String(children).replace(/\n$/, '')}
        style={atomDark}
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
  return (
    <div>
      <MDXRemote {...source} components={mdUsedComponents} />
    </div>
  );
}

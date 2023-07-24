import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import MDXNav from './mdx-nav';

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

export default function MDXPreview({ source, components = {}, content }) {
  return (
    <div className='wrapper'>
      <MDXRemote {...source} components={mdUsedComponents} />
      <MDXNav content={content}></MDXNav>
    </div>
  );
}

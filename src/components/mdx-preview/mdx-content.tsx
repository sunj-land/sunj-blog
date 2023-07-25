import React, { useState } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import * as antComponents from 'antd';
import * as customComponents from '@/components/md-components';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import coy from 'react-syntax-highlighter/dist/cjs/styles/prism/coy';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

const CodeBlock = ({ node, inline, className, children, ...props }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const match = /language-(\w+)/.exec(className || '');

  const handleCodeCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  if (!(!inline && match)) {
    return (
      <code {...props} className={className}>
        {children}
      </code>
    );
  }

  return (
    <div>
      <button onClick={handleCodeCollapse}>
        {isCollapsed ? '展开' : '收起'}
      </button>
      {!isCollapsed && (
        <CopyToClipboard text={String(children)}>
          <button className='float-right'>复制</button>
        </CopyToClipboard>
      )}
      {!isCollapsed && (
        <SyntaxHighlighter
          {...props}
          children={String(children).replace(/\n$/, '')}
          style={atomDark}
          language={match[1]}
          PreTag='div'
        >
          {children}
        </SyntaxHighlighter>
      )}
    </div>
  );
};

const codeComponents = {
  p({ children }) {
    return <p className='text-grary-400 leading-[24px]'>{children}</p>;
  },
  code(props) {
    return <CodeBlock {...props}></CodeBlock>;
  },
};

const mdUsedComponents = {
  ...codeComponents,
  ...antComponents,
  ...customComponents,
};

export default function MDXContent({ source }) {
  console.log('source: ', source.frontmatter);
  return (
    <div className='markdown-body'>
      <MDXRemote {...source} components={mdUsedComponents} />
    </div>
  );
}

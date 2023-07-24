import React from 'react';

export default function PostIntroduce({ className = '' }) {
  return (
    <div className={`card ${className}`}>
      {/* <img
        className="w-full h-"
        src='https://sunj-md.oss-cn-hangzhou.aliyuncs.com/img.6.jpg'
        alt=''
      /> */}
      <div>
        <div className='tag'>hexo</div>
        <div className='tag'>hexo</div>
        <div className='tag'>hexo</div>
      </div>
      <div className='h-8 mt-4 text-lg font-semibold hover:text-blue-400'>
        标题部分
      </div>
      <div className='text-[14px] text-[#7a7a7a]'>日期部分</div>
      <div className='mt-4'>
        Installation This post uses hexo-renderer-markdown-it plugin as markdown
        processor, so please install it to achieve the effect. npm un
        hexo-renderer-marked --save npm i hexo-renderer-markdown-it --save npm i
        markdown-it-emoji --save npm i markdown-it-mark --save npm i
        markdown-it-deflist --save npm i markdown-it-container --save
        ConfigurationAdd following..
      </div>
    </div>
  );
}

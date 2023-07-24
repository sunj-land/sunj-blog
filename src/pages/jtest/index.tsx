import { addCount, getCount, count } from './a';
import { useState } from 'react';

export default function TestPage({ source, components = {} }) {
  let [, forceUpdate] = useState();

  function onClick() {
    addCount();
    forceUpdate({});
    console.log(getCount());
  }

  return (
    <div className='wrapper'>
      <div>测试页面部分</div>
      <div>{count}</div>
      <div onClick={onClick}>add</div>
    </div>
  );
}

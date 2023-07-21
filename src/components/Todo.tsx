'use client';
import React, { useState } from 'react';
import { Button } from 'antd';
console.log('Button: ', Button);

export default function Todo({ text = 'default' }) {
  let [count, setCount] = useState(0);

  function handleClick() {
    console.log('click', text);
  }
  return (
    <div className='text-lg border-red-400 border-spacing-2 h-30'>
      <div>text:{text}</div>
      <Button type='primary' onClick={handleClick}>
        del
      </Button>

      <div>count---{count}</div>
      <Button onClick={() => setCount(count++)}>add</Button>
      <Button onClick={() => setCount(count--)}>reduce</Button>
    </div>
  );
}

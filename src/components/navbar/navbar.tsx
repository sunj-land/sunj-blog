import React, { useState } from 'react';
import Link from 'next/link';

const items = [
  {
    label: 'Navigation One',
    key: 'mail',
  },
  {
    label: 'Navigation Two',
    key: 'app',
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
  },
  {
    label: 'Navigation Three - link',
    key: 'alipay',
  },
];
const headerStyle = {
  background: 'transparent',
};
export default function NavBar() {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className='w-[1120px] lg:w-full flex'>
      {items.map((item) => (
        <div
          className='px-10 mx-10 text-red-400'
          key={item.key}
          onClick={(item) => onClick(item)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

import React, { useState } from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Layout } from 'antd';
import Link from 'next/link';
import { useRouter } from '';

const items: MenuProps['items'] = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
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

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
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
    // <Layout.Header className='flex items-center' style={headerStyle}>
    //   <Menu
    //     onClick={onClick}
    //     selectedKeys={[current]}
    //     mode='horizontal'
    //     items={items}
    //     className='w-full h-full'
    //   />
    // </Layout.Header>
  );
}

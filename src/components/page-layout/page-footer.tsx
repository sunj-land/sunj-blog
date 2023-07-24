import React from 'react';

export default function LayoutFooter({ className = '' }) {
  return (
    <div
      className={`flex w-full justify-center h-[64px] leading-[64px] ${className}`}
    >
      <div>Copyright © 2016-2023 Sunj</div>
    </div>
  );
}

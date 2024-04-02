'use client';
import { cn } from '@/tools/utils/cn';
import React, { FC } from 'react';

interface IButton {
  children: React.ReactNode;
  className?: string;
}

export const Button: FC<IButton> = ({ className, children }) => {
  return (
    <button
      onClick={() => console.log('clicked')}
      className={cn(
        'gradient group min-w-[120px] max-w-[354px] rounded-lg px-[20px] py-[10px] text-center font-bold text-[#fff] before:rounded-lg hover:transition hover:duration-300 hover:ease-in-out',
        className,
        {},
      )}
    >
      <span className="relative z-[3]">{children}</span>
    </button>
  );
};

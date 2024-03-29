'use client';
import { cn } from '@/tools/utils/cn';
import React, { FC } from 'react';

interface IButton {
  children: React.ReactNode;
  className?: Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;
}

export const Button: FC<IButton> = ({ className, children }) => {
  return (
    <button
      onClick={() => console.log('clicked')}
      className={cn(
        'from-gradient-1 via-gradient-2 to-gradient-3 group relative min-w-[120px] max-w-[354px] rounded-lg bg-gradient-to-l  from-10% via-[37.36%] to-[80%] px-[20px] py-[10px] text-center font-bold text-[#fff] hover:to-80% hover:last:opacity-100',
        className,
        {},
      )}
    >
      <div className="relative z-10">{children}</div>
      <div className="from-gradient-3 to-gradient-3 absolute left-0 top-0 h-[100%] w-[100%] min-w-[120px] max-w-[354px] rounded-lg bg-gradient-to-l opacity-0 duration-500 group-hover:opacity-100"></div>
    </button>
  );
};

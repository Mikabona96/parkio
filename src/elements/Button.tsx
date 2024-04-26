'use client';
import { cn } from '@/tools/utils/cn';
import React, { FC } from 'react';

interface IButton {
	children: React.ReactNode;
	className?: string;
	disabled?: boolean;
}

export const Button: FC<IButton> = ({ className, children, disabled }) => {
	return (
		<button
			disabled={disabled}
			className={cn(
				'group relative min-w-[120px] max-w-[354px] rounded-lg px-[20px] py-[10px] text-center font-bold text-[#fff] transition-all duration-500 before:absolute  before:left-0 before:top-0 before:h-full before:w-full before:rounded-lg before:opacity-0 before:transition-all before:duration-500 before:content-[""] hover:before:opacity-100',
				{
					'cursor-not-allowed bg-gradient-to-r from-gray-500 via-gray-500 to-gray-500 hover:before:bg-gradient-to-r hover:before:from-gray-500 hover:before:to-gray-500':
						disabled,
					'bg-gradient-to-r from-gradient-3 via-gradient-2 to-gradient-1 before:bg-gradient-to-r before:from-gradient-3 before:via-gradient-3 before:to-gradient-3':
						!disabled,
				},
				className,
				{},
			)}
		>
			<span className="relative z-[3]">{children}</span>
		</button>
	);
};

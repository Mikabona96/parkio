import React, { FC } from 'react';
import Image from 'next/image';
import { cn } from '@/tools/utils/cn';

interface IProps {
	question: string;
	answer: string;
	isOpen: boolean;
	onClick: () => void;
}

export const Accordion: FC<IProps> = ({
	question,
	answer,
	isOpen,
	onClick,
}) => {
	return (
		<div
			onClick={onClick}
			className={cn(
				'bg-gray-100 flex h-[72px] w-full cursor-pointer flex-col gap-6 overflow-hidden rounded-md px-4 py-6 transition-all duration-300',
				{
					'h-[140px]': isOpen,
				},
			)}
		>
			<div className="flex items-center justify-between">
				<p className="text-gray-500">{question}</p>{' '}
				<Image
					className={cn('cursor-pointer transition-all duration-300', {
						'-rotate-180': isOpen,
					})}
					width={24}
					height={24}
					alt="chevron.svg"
					src={'/chevron.svg'}
				/>
			</div>
			<p
				className={cn(
					'h-1 overflow-hidden text-base text-gray-700 transition-all duration-300',
					{
						'h-12': isOpen,
					},
				)}
			>
				{answer}
			</p>
		</div>
	);
};

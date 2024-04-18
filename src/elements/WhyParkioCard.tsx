'use client';
import { cn } from '@/tools/utils/cn';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { FC, useState } from 'react';

interface ICardProps {
	card: {
		title: string;
		desc: string;
		img: string;
	};
	idx: number;
}

export const WhyParkioCard: FC<ICardProps> = ({ card, idx }) => {
	const [isOpen, setIsOpen] = useState(false);
	const t = useTranslations('Home');
	const params = useParams();
	return (
		<div
			className={clsx(
				'flex h-[274px] max-w-[527px] flex-col rounded-lg bg-[#fff] px-8 py-6 transition-all duration-500 hover:bg-background',
				{
					'h-[384px]': isOpen,
				},
			)}
		>
			<Image
				src={card.img}
				width={0}
				height={0}
				className="h-[30px] w-[30px]"
				alt={`s-2-icon-${idx + 1}.svg`}
			/>
			<div className="mt-6 flex flex-col gap-4">
				<h4 className="font-bold text-gray-900 sm:text-2xl xl:text-[32px]">
					{card.title}
				</h4>
				<p
					className={clsx(
						'scroll text-base font-normal text-gray-700 transition-all duration-500',
						{
							'h-12 overflow-hidden text-ellipsis break-all': !isOpen,
							'h-[174px] overflow-y-scroll': isOpen,
							'mr-1': isOpen,
						},
					)}
				>
					{card.desc}
				</p>
			</div>
			<button
				className="line ml-auto mt-auto flex cursor-pointer items-center gap-2"
				onClick={() => setIsOpen(!isOpen)}
			>
				<p
					className={cn(
						'text-gradient h-6 w-[90px] cursor-pointer overflow-hidden break-all text-base font-bold leading-6 transition-all duration-300 ease-in-out',
						{
							'w-[42px]': isOpen && params.locale !== 'sv-SE',
							'w-[70px]': !isOpen && params.locale === 'sv-SE',
							'w-[60px]': isOpen && params.locale === 'sv-SE',
						},
					)}
				>
					{isOpen ? t('s-2-card-close') : t('s-2-card-learn-more')}
				</p>
				<Image
					src={'/chevron_gradient.svg'}
					width={0}
					height={0}
					className={clsx('mt-1 h-6 w-6 transition duration-300 ease-in-out', {
						'-rotate-[180deg]': isOpen,
					})}
					alt={`chevron_gradient.svg`}
				/>
			</button>
		</div>
	);
};

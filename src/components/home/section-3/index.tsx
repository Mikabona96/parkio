'use client';
import { Button } from '@/elements';
import { cn } from '@/tools/utils/cn';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';
import { setInterval } from 'timers/promises';

export const ThirdSection = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const t = useTranslations('Home');

	const slidesDescription = [
		t('s-3-slide-1'),
		t('s-3-slide-2'),
		t('s-3-slide-3'),
		t('s-3-slide-4'),
	];

	return (
		<div className="flex flex-col items-center py-[120px]">
			<h3 className="text-xl font-normal text-gray-700">{t('s-3-title')}</h3>
			<h4 className="text-[32px] font-bold text-gray-900">
				{t('s-3-subtitle')}
			</h4>
			<div className="flex w-[400px] justify-between">
				<button
					className="cursor-pointer rounded border bg-gradient-1 px-2 py-2"
					onClick={() => {
						if (activeSlide === 3) {
							setActiveSlide(0);
						} else {
							setActiveSlide(activeSlide + 1);
						}
					}}
				>
					Next Step
				</button>
				<button
					className="cursor-pointer rounded border bg-gradient-1 px-2 py-2"
					onClick={() => {
						if (activeSlide === 0) {
							setActiveSlide(3);
						} else {
							setActiveSlide(activeSlide - 1);
						}
					}}
				>
					Prev Step
				</button>
			</div>
			<div className="mt-12 flex h-[560px] items-center gap-16 overflow-hidden">
				<div className="relative flex h-[560px] w-[534px] justify-center bg-[url('/gradient_circle_background.png')]">
					<Image
						className={cn(
							'absolute left-[50%] h-[600px] w-[308px] -translate-x-[50%] animate-appearence',
							{
								'animate-appearence': activeSlide === 0,
								'z-[22]': activeSlide === 0,
								'z-[11]': activeSlide !== 0,
								'animate-vanish': activeSlide === 1 || activeSlide === 3,
							},
						)}
						width={534}
						height={602}
						src={`/slide-1.png`}
						alt={`slide-1.png`}
					/>
					<Image
						className={cn(
							'absolute left-[50%] h-[600px] w-[308px] -translate-x-[50%] animate-appearence',
							{
								'animate-appearence': activeSlide === 1,
								'z-[22]': activeSlide === 1,
								'z-[11]': activeSlide !== 1,
								'animate-vanish': activeSlide === 2 || activeSlide === 0,
							},
						)}
						width={534}
						height={602}
						src={`/slide-2.png`}
						alt={`slide-2.png`}
					/>
					<Image
						className={cn(
							'absolute left-[50%] h-[600px] w-[308px] -translate-x-[50%] animate-appearence',
							{
								'animate-appearence': activeSlide === 2,
								'z-[22]': activeSlide === 2,
								'z-[11]': activeSlide !== 2,
								'animate-vanish': activeSlide === 3 || activeSlide === 1,
							},
						)}
						width={534}
						height={602}
						src={`/slide-3.png`}
						alt={`slide-3.png`}
					/>
					<Image
						className={cn(
							'absolute left-[50%] h-[600px] w-[308px] -translate-x-[50%] animate-appearence',
							{
								'animate-appearence': activeSlide === 3,
								'z-[22]': activeSlide === 3,
								'z-[11]': activeSlide !== 3,
								'animate-vanish': activeSlide === 0 || activeSlide === 2,
							},
						)}
						width={534}
						height={602}
						src={`/slide-4.png`}
						alt={`slide-4.png`}
					/>
				</div>
				<div
					className={clsx(
						'relative flex h-[348px] w-[388px] flex-col justify-between border-l-2 border-l-gray-200 text-left duration-300 ease-in-out before:absolute before:-left-[12px] before:top-0 before:block before:h-[40px] before:w-[20px] before:transition before:duration-[.7s] before:ease-in-out before:content-[url("/slider.png")]',
						{
							'before:translate-y-[87px]': activeSlide === 1,
							'before:translate-y-[174px]': activeSlide === 2,
							'before:translate-y-[261px]': activeSlide === 3,
						},
					)}
				>
					{slidesDescription.map((slideDescr, idx) => {
						return (
							<div
								onClick={() => setActiveSlide(idx)}
								key={idx}
								className={clsx(
									'relative flex h-[87px] cursor-pointer items-center text-xl font-normal text-gray-700',
									{
										'text-gray-300': idx !== activeSlide,
									},
								)}
							>
								<p className="ml-6">{slideDescr}</p>
							</div>
						);
					})}
				</div>
			</div>
			<Button className="mt-12">Learn more</Button>
		</div>
	);
};

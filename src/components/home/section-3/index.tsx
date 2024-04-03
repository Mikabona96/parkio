'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import clsx from 'clsx';

import { setBodyOverflow } from '@/tools/helpers/setBodyOverflow';
import {
	useIntersectionObserver,
	useTouchEvents,
	useWheelEvent,
} from '@/tools/hooks';
import { cn } from '@/tools/utils/cn';
import { Button } from '@/elements';

export const ThirdSection = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const t = useTranslations('Home');

	//* IntersectionObserver
	const { ref } = useIntersectionObserver(
		{
			rootMargin: '0px',
			threshold: 0,
		},
		() => {
			//$ prevent touch/wheel scrolling
			document.body.style.overflow = 'hidden';

			//+ scroll to top of the section
			const section = document.querySelector('#section-3') as HTMLElement;
			window.scrollTo({
				top: section.offsetTop - 60,
				behavior: 'smooth',
			});
		},
	);

	const slidesDescription = [
		t('s-3-slide-1'),
		t('s-3-slide-2'),
		t('s-3-slide-3'),
		t('s-3-slide-4'),
	];

	const nextSlideHandler = () => {
		if (activeSlide === 3) {
			setBodyOverflow('');
			return;
		}
		setActiveSlide((prev) => prev + 1);
	};
	const prevSlideHandler = () => {
		if (activeSlide === 0) {
			setBodyOverflow('');
			return;
		}
		setActiveSlide((prev) => prev - 1);
	};

	useWheelEvent([nextSlideHandler, prevSlideHandler]);

	useTouchEvents([prevSlideHandler, nextSlideHandler]);

	return (
		<section ref={ref} id="section-3" className="flex flex-col items-center">
			<h3 className="text-xl font-normal text-gray-700">{t('s-3-title')}</h3>
			<h4 className="text-[32px] font-bold text-gray-900">
				{t('s-3-subtitle')}
			</h4>
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
		</section>
	);
};

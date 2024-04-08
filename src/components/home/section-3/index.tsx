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
	const [navSlideDirection, setNavSlideDirection] = useState<
		undefined | 'down' | 'up'
	>(undefined);
	const t = useTranslations('Home');

	//* IntersectionObserver
	const { ref, isIntersected } = useIntersectionObserver<HTMLDivElement>({
		options: {
			rootMargin: '0px',
			threshold: 0.3,
			isIntersectedDelay: 500,
		},
		intersectedCallback: () => {
			//$ prevent touch/wheel scrolling
			document.body.style.overflow = 'hidden';

			//+ scroll to top of the section
			const section = document.querySelector('#section-3') as HTMLElement;
			window.scrollTo({
				top: section.offsetTop - 60,
				behavior: 'smooth',
			});
		},
	});

	const slidesDescription = [
		t('s-3-slide-1'),
		t('s-3-slide-2'),
		t('s-3-slide-3'),
		t('s-3-slide-4'),
	];

	const slides = [
		{
			src: '/slide-1.png',
			alt: 'slide-1.png',
		},
		{
			src: '/slide-2.png',
			alt: 'slide-2.png',
		},
		{
			src: '/slide-3.png',
			alt: 'slide-3.png',
		},
		{
			src: '/slide-4.png',
			alt: 'slide-4.png',
		},
	];

	const nextSlideHandler = () => {
		if (isIntersected) {
			if (activeSlide === 3) {
				setBodyOverflow('');
				return;
			}
			setActiveSlide((prev) => prev + 1);
			setNavSlideDirection('down');
		}
	};
	const prevSlideHandler = () => {
		if (isIntersected) {
			if (activeSlide === 0) {
				setBodyOverflow('');
				return;
			}
			setActiveSlide((prev) => prev - 1);
			setNavSlideDirection('up');
		}
	};

	useWheelEvent([nextSlideHandler, prevSlideHandler]);

	useTouchEvents([prevSlideHandler, nextSlideHandler]);

	return (
		<section id="section-3" className="flex flex-col items-center">
			<h3 className="text-xl font-normal text-gray-700">{t('s-3-title')}</h3>
			<h4 className="text-[32px] font-bold text-gray-900">
				{t('s-3-subtitle')}
			</h4>
			<div
				ref={ref}
				className="mt-12 flex h-[560px] items-center gap-16 overflow-hidden"
			>
				<div className="relative -z-[2] flex h-[560px] w-[534px] justify-center bg-[url('/gradient_circle_background.png')]">
					{slides.map(({ alt, src }, idx) => (
						<Image
							key={idx}
							className={cn(
								'absolute left-[50%] -z-[1] hidden h-[600px] w-[308px] -translate-x-[50%]',
								`${activeSlide === idx && 'z-[999] block animate-appearence'}`,
								`${activeSlide - 1 === idx && navSlideDirection === 'down' && 'z-[33] block animate-vanish'}`, //+ prevSlide scroll down
								`${activeSlide + 1 === idx && navSlideDirection === 'up' && 'z-[33] block animate-vanish'}`, //+ prevSlide scroll up
							)}
							width={534}
							height={602}
							src={src}
							alt={alt}
						/>
					))}
				</div>
				<div
					className={clsx(
						'relative flex h-[348px] w-[388px] flex-col justify-between border-l-2 border-l-gray-200 text-left duration-500 ease-in-out before:absolute before:-left-[12px] before:top-0 before:block before:h-[40px] before:w-[20px] before:transition before:duration-[.7s] before:ease-in-out before:content-[url("/slider.png")]',
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
								onClick={() => {
									if (idx > activeSlide) {
										setNavSlideDirection('down');
									} else {
										setNavSlideDirection('up');
									}
									setActiveSlide(idx);
								}}
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

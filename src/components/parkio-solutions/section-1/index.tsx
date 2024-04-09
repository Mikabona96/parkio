'use client';
import {
	useIntersectionObserver,
	useTouchEvents,
	useWheelEvent,
} from '@/tools/hooks';
import { cn } from '@/tools/utils/cn';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';

export const FirstSection = () => {
	const [toggleCircleAnimation, setToggleCircleAnimation] = useState<
		boolean | null
	>(null);
	const [isAnimating, setIsAnimating] = useState(false);
	const [expandCards, setExpandCards] = useState<null | boolean>(null);
	const t = useTranslations('Parkio-Solutions');
	const { isIntersected, ref } = useIntersectionObserver<HTMLDivElement>({
		options: {
			rootMargin: '0px',
			threshold: 1,
			isIntersectedDelay: 0,
		},
	});

	const scrollHandlerDown = () => {
		console.log('isIntersected: ', isIntersected, 'down');
		if (isAnimating || toggleCircleAnimation) return;
		if (isIntersected && !toggleCircleAnimation) {
			setIsAnimating(true);
			setExpandCards(true);
			setTimeout(() => {
				setToggleCircleAnimation(true);
				setIsAnimating(false);
			}, 1000);
		}
	};
	const scrollHandlerUp = () => {
		console.log('isIntersected: ', isIntersected, 'up');
		if (isAnimating || !toggleCircleAnimation) return;
		if (isIntersected && toggleCircleAnimation) {
			setIsAnimating(true);
			setToggleCircleAnimation(false);
			setTimeout(() => {
				setExpandCards(false);
				setIsAnimating(false);
			}, 1000);
		}
	};
	useWheelEvent([scrollHandlerDown, scrollHandlerUp], 0);

	return (
		<section className="relative flex h-[200vh] w-full flex-col items-center">
			<div className="relative flex min-h-full w-full flex-col items-center">
				<div
					ref={ref}
					className="sticky top-[77px] mb-24 flex h-[830px] w-full flex-col items-center"
				>
					<div className="mt-20 flex h-[89px] flex-col items-center gap-4">
						<h1 className=" text-[32px] text-gray-900">
							{t('Parkio-Solutions')}
						</h1>
						<h3 className=" text-gray-700">{t('Discover-the-power')}</h3>
					</div>
					<div className="relative mt-12 h-full w-full">
						<div
							className={cn(
								'absolute left-[70%] top-[50%] z-30 flex w-full max-w-[620px] -translate-x-[50%] translate-y-[-50%] flex-col gap-4 text-4xl',
								{
									'animate-textShown': toggleCircleAnimation,
									'opacity-0': !toggleCircleAnimation,
								},
							)}
						>
							<Image
								alt="circle.svg"
								src={'/circle.svg'}
								width={28}
								height={28}
							/>
							<h4 className="text-xl font-bold">
								{t('Short-Term-Parking-Title')}
							</h4>
							<p className="text-lg font-normal">
								{t('Short-Term-Parking-Description')}
							</p>
						</div>
						<div className="flex h-[662px] w-full justify-center overflow-hidden">
							<div
								className={cn(
									'h-[588px] w-[588px] rounded-full bg-background transition-all duration-150',
									{ 'animate-circleExpand': toggleCircleAnimation },
									{ 'animate-circleCollapse': toggleCircleAnimation === false },
								)}
							></div>
							{/* //$ ========== circle copy to overflow image ========= */}
							<div
								className={cn(
									'absolute top-0 h-[588px] w-[588px] rounded-full transition-all duration-1000',
									{
										'overflow-hidden': !toggleCircleAnimation,
									},
								)}
							>
								<Image
									width={280}
									height={608}
									style={{ width: 'auto', height: 'auto' }}
									className={cn(
										'absolute left-[50%] top-[240px] h-[608px] w-[320px] translate-x-[-50%]',
										{
											'animate-phoneImageXl': toggleCircleAnimation,
											'animate-phoneImageReverseXl':
												!toggleCircleAnimation &&
												toggleCircleAnimation !== null,
										},
									)}
									src={'/slide-1.png'}
									alt="slide-1.png"
								/>
							</div>
							{/* //$ ========== circle copy to overflow image ========= */}
						</div>
						{/* //+ ========== cards ========= */}
						<div
							className={cn(
								'absolute left-[26%] top-[6px] h-[171px] w-[283px] rounded-2xl bg-[#FFD177] transition-all duration-1000',
								{
									'animate-firstCardXl': expandCards,
									'animate-firstCardReverseXl':
										!expandCards && expandCards !== null,
								},
							)}
						></div>
						<div
							className={cn(
								'absolute right-[503px] top-[41px] h-[76px] w-[208px] rounded-2xl bg-[#F4F7FA] transition-all duration-1000',
								{
									'animate-secondCardXl': expandCards,
									'animate-secondCardReverseXl':
										!expandCards && expandCards !== null,
								},
							)}
						></div>
						<div
							className={cn(
								'absolute right-[307px] top-[150px] h-[139px] w-[237px] rounded-2xl bg-[#232527] transition-all duration-1000',
								{
									'animate-thirdCardXl': expandCards,
									'animate-thirdCardReverseXl':
										!expandCards && expandCards !== null,
								},
							)}
						></div>
						<div
							className={cn(
								'absolute right-[297px] top-[354px] h-[133px] w-[213px] rounded-2xl bg-[#D18FE9] transition-all duration-1000',
								{
									'animate-fourthCardXl': expandCards,
									'animate-fourthCardReverseXl':
										!expandCards && expandCards !== null,
								},
							)}
						></div>
						<div
							className={cn(
								'absolute bottom-[0px] right-[547px] h-[76px] w-[197px] rounded-2xl bg-[#232527] transition-all duration-1000',
								{
									'animate-fifthCardXl': expandCards,
									'animate-fifthCardReverseXl':
										!expandCards && expandCards !== null,
								},
							)}
						></div>
						<div
							className={cn(
								'absolute bottom-[57px] left-[357px] h-[76px] w-[254px] rounded-2xl bg-[#F4F7FA] transition-all duration-1000',
								{
									'animate-sixthCardXl': expandCards,
									'animate-sixthCardReverseXl':
										!expandCards && expandCards !== null,
								},
							)}
						></div>
						<div
							className={cn(
								'absolute left-[297px] top-[232px] h-[180px] w-[203px] rounded-2xl bg-[#837EF4] transition-all duration-1000',
								{
									'animate-seventhCardXl': expandCards,
									'animate-seventhCardReverseXl':
										!expandCards && expandCards !== null,
								},
							)}
						></div>
						{/* //+ ========== cards ========= */}
					</div>
				</div>
			</div>
		</section>
	);
};

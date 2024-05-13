'use client';
import { cn } from '@/tools/utils/cn';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

export const FirstSection = () => {
	const t = useTranslations('Parkio-Solutions');
	const ref = useRef<HTMLElement>(null);
	const assetsContainer = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let canReverseanimating = false;
		window.addEventListener('scroll', () => {
			let st = window.scrollY || document.documentElement.scrollTop;
			if (ref.current?.clientHeight && st > ref.current?.clientHeight / 4) {
				assetsContainer?.current?.classList.remove('not-animating');
				assetsContainer?.current?.classList.add('animating');

				canReverseanimating = true;
			} else {
				if (canReverseanimating) {
					assetsContainer?.current?.classList.remove('animating');
					assetsContainer?.current?.classList.add('not-animating');
				}
				canReverseanimating = false;
			}
		});
	}, []);

	return (
		<section
			ref={ref}
			className="relative flex h-[200vh] w-full flex-col items-center"
		>
			<div className="relative flex min-h-full w-full flex-col items-center">
				<div className="sticky top-[77px] mb-24 flex h-[830px] w-full flex-col items-center">
					<div className="mt-20 flex h-[89px] flex-col items-center gap-4">
						<h1 className=" text-[32px] text-gray-900">
							{t('Parkio-Solutions')}
						</h1>
						<h3 className=" text-gray-700">{t('Discover-the-power')}</h3>
					</div>
					<div
						ref={assetsContainer}
						className="group relative mt-12 h-full w-full sm:scale-[0.5] lg:scale-100"
					>
						<div
							className={cn(
								'group-[.not-animating]:animate-textHidden absolute left-[70%] top-[50%] z-30 flex w-full max-w-[620px] -translate-x-[50%] translate-y-[-50%] flex-col gap-4 text-4xl opacity-0 transition-opacity duration-1000 group-[.animating]:animate-textShown',
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
									'h-[588px] w-[588px] rounded-full bg-background transition-all duration-150 group-[.animating]:animate-circleExpand group-[.not-animating]:animate-circleCollapse',
								)}
							></div>
							{/* //$ ========== circle copy to overflow image ========= */}
							<div
								className={cn(
									'absolute top-0 h-[588px] w-[588px] overflow-y-hidden rounded-full transition-all duration-1000 group-[.animating]:overflow-y-visible',
								)}
							>
								<Image
									width={280}
									height={608}
									style={{ width: 'auto', height: 'auto' }}
									className={cn(
										'absolute left-[50%] top-[240px] h-[608px] w-[320px] translate-x-[-50%] group-[.animating]:animate-phoneImageXl group-[.not-animating]:animate-phoneImageReverseXl',
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
								'absolute left-[26%] top-[6px] h-[171px] w-[283px] rounded-2xl bg-[#FFD177] transition-all duration-1000 group-[.animating]:animate-firstCardXl group-[.not-animating]:animate-firstCardReverseXl',
							)}
						></div>
						<div
							className={cn(
								'absolute right-[503px] top-[41px] h-[76px] w-[208px] rounded-2xl bg-[#F4F7FA] transition-all duration-1000 group-[.animating]:animate-secondCardXl group-[.not-animating]:animate-secondCardReverseXl',
							)}
						></div>
						<div
							className={cn(
								'absolute right-[307px] top-[150px] h-[139px] w-[237px] rounded-2xl bg-[#232527] transition-all duration-1000 group-[.animating]:animate-thirdCardXl group-[.not-animating]:animate-thirdCardReverseXl',
							)}
						></div>
						<div
							className={cn(
								'absolute right-[297px] top-[354px] h-[133px] w-[213px] rounded-2xl bg-[#D18FE9] transition-all duration-1000 group-[.animating]:animate-fourthCardXl group-[.not-animating]:animate-fourthCardReverseXl',
							)}
						></div>
						<div
							className={cn(
								'absolute bottom-[0px] right-[547px] h-[76px] w-[197px] rounded-2xl bg-[#232527] transition-all duration-1000 group-[.animating]:animate-fifthCardXl group-[.not-animating]:animate-fifthCardReverseXl',
							)}
						></div>
						<div
							className={cn(
								'absolute bottom-[57px] left-[357px] h-[76px] w-[254px] rounded-2xl bg-[#F4F7FA] transition-all duration-1000 group-[.animating]:animate-sixthCardXl group-[.not-animating]:animate-sixthCardReverseXl',
							)}
						></div>
						<div
							className={cn(
								'absolute left-[297px] top-[232px] h-[180px] w-[203px] rounded-2xl bg-[#837EF4] transition-all duration-1000 group-[.animating]:animate-seventhCardXl group-[.not-animating]:animate-seventhCardReverseXl',
							)}
						></div>
						{/* //+ ========== cards ========= */}
					</div>
				</div>
			</div>
		</section>
	);
};

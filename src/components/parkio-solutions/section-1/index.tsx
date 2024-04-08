'use client';
import {
	useIntersectionObserver,
	useTouchEvents,
	useWheelEvent,
} from '@/tools/hooks';
import { cn } from '@/tools/utils/cn';
import Image from 'next/image';
import React, { useState } from 'react';

export const FirstSection = () => {
	const [toggleCircleAnimation, setToggleCircleAnimation] = useState<
		boolean | null
	>(null);
	const [isAnimating, setIsAnimating] = useState(false);

	const { isIntersected, ref } = useIntersectionObserver<HTMLDivElement>({
		options: {
			rootMargin: '0px',
			threshold: 0,
			isIntersectedDelay: 0,
		},
	});

	const scrollHandlerDown = () => {
		console.log('isIntersected: ', isIntersected, 'down');
		if (isAnimating || toggleCircleAnimation) return;
		if (isIntersected && !toggleCircleAnimation) {
			setIsAnimating(true);
			setToggleCircleAnimation(true);
		}
	};
	const scrollHandlerUp = () => {
		console.log('isIntersected: ', isIntersected, 'up');
		if (isAnimating || !toggleCircleAnimation) return;
		if (isIntersected && toggleCircleAnimation) {
			setIsAnimating(true);
			setToggleCircleAnimation(false);
		}
	};
	useWheelEvent([scrollHandlerDown, scrollHandlerUp], 0);

	return (
		<section className="flex h-[350vh] w-full flex-col items-center bg-gray-500">
			<div className="relative flex min-h-full w-full flex-col items-center">
				<div className="mt-20 flex h-[89px] flex-col items-center gap-4">
					<h1 className=" text-[32px] text-gray-900">Parkio Solutions</h1>
					<h3 className=" text-gray-700">
						Discover the power of PARKIO — your all-in-one solution for seamless
						and convenient parking experiences
					</h3>
				</div>
				<div
					ref={ref}
					onAnimationEnd={() => {
						setIsAnimating(false);
						console.log('animationEnd');
					}}
					className="sticky top-[77px] mb-12 flex h-[626px]  w-full flex-col items-center overflow-hidden bg-gradient-2"
				>
					<div className="relative h-full w-full">
						<div
							className={cn(
								'absolute left-[29%] top-0 h-[588px] w-[588px] rounded-full bg-background transition-all duration-150',
								{ 'animate-circleExpand': toggleCircleAnimation },
								{ 'animate-circleCollapse': toggleCircleAnimation === false },
							)}
						></div>
						{/* //$ ========== circle copy ========= */}
						<div
							className={cn(
								'absolute left-[29%] top-0 h-[588px] w-[588px] rounded-full',
								{
									'overflow-hidden': !toggleCircleAnimation,
								},
							)}
						>
							<Image
								width={280}
								height={608}
								className="absolute left-[50%] top-[222px] h-[608px] w-[280px] translate-x-[-50%]"
								src={'/slide-1.png'}
								alt="slide-1.png"
							/>
						</div>
						{/* //$ ========== circle copy ========= */}
					</div>
				</div>
			</div>
		</section>
	);
};

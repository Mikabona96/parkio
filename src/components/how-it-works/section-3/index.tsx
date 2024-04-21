import { AppStoreButton, GooglePlayButton } from '@/elements';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export const ThirdSection = () => {
	const t = useTranslations('How-it-works');
	return (
		<section className="relative flex h-[492px] w-full items-center justify-center overflow-hidden bg-[#FEF0E2] sm:px-6 lg:px-12 xl:px-0">
			<div className="flex flex-col items-center gap-4">
				<h3 className="text-[32px] font-bold text-gray-900 sm:text-center md:text-start">
					{t('get-parkio-title-start')}
					{' PARK'}
					<span className='relative before:absolute before:-top-[26px] before:left-[50%] before:h-[16px] before:w-[16px] before:-translate-x-[50%] before:content-[url("/circle.svg")]'>
						I
					</span>
					{'O '}
					{t('get-parkio-title-end')}
				</h3>
				<div className="z-20 flex gap-4">
					<AppStoreButton variant="black" />
					<GooglePlayButton variant="black" />
				</div>
			</div>
			<Image
				className="absolute left-[-252px] top-[50%] h-[383px] w-[383px] translate-y-[-50%]"
				width={383}
				height={383}
				alt="circles.png"
				src={'/circles.png'}
			/>
			<Image
				className="absolute bottom-[50%] right-[-152px] h-[564px] w-[564px]"
				width={564}
				height={564}
				alt="circles.png"
				src={'/circles.png'}
			/>
		</section>
	);
};

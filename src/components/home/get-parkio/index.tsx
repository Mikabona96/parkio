import { AppStoreButton, GooglePlayButton } from '@/elements';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const GetParkio = () => {
	const t = useTranslations('Home');
	return (
		<div className="relative w-full overflow-hidden bg-background sm:h-[642px] sm:px-6 lg:h-[492px] lg:px-0">
			<div className="z-20 flex flex-col gap-6 sm:mt-6 sm:items-center sm:text-center lg:ml-[90px] lg:mt-[194px] lg:items-start lg:text-start xl:ml-[264px]">
				<h3 className="text-[32px] font-bold text-gray-900">
					{t('get-parkio-title-start')}
					{' PARK'}
					<span className='relative before:absolute before:-top-[26px] before:left-[50%] before:h-[16px] before:w-[16px] before:-translate-x-[50%] before:content-[url("/circle.svg")]'>
						I
					</span>
					{'O '}
					{t('get-parkio-title-end')}
				</h3>
				<div className="flex gap-4">
					<Link href={'#'}>
						<AppStoreButton variant={'black'} />
					</Link>
					<Link href={'#'}>
						<GooglePlayButton variant="black" />
					</Link>
				</div>
			</div>
			<Image
				className={
					'absolute z-[2] h-[600px] w-[308px] sm:left-[50%] sm:top-[16rem] sm:translate-x-[-50%] lg:left-[unset] lg:right-[9px] lg:top-20 lg:translate-x-0 xl:right-[269px]'
				}
				width={534}
				height={602}
				src={`/slide-1.png`}
				alt={`slide-1.png`}
			/>
			<Image
				className={
					'absolute -right-[152px] top-[-288px] z-[1] h-[564px] w-[612px] sm:hidden lg:block'
				}
				width={612}
				height={564}
				src={`/circles.png`}
				alt={`circles.png`}
			/>
		</div>
	);
};

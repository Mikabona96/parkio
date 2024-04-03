import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const GetParkio = () => {
	const t = useTranslations('Home');
	return (
		<div className="bg-background relative h-[492px] w-full overflow-hidden">
			<div className="ml-[264px] mt-[194px] flex flex-col gap-6">
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
						<Image
							width={0}
							height={0}
							className="h-[44px] w-[133px]"
							src={'/app-store.svg'}
							alt="app-store.svg"
						/>
					</Link>
					<Link href={'#'}>
						<Image
							width={0}
							height={0}
							className="h-[44px] w-[133px]"
							src={'/google-play.svg'}
							alt="google-play.svg"
						/>
					</Link>
				</div>
			</div>
			<Image
				className={'absolute right-[269px] top-20 z-[2] h-[600px] w-[308px]'}
				width={534}
				height={602}
				src={`/slide-1.png`}
				alt={`slide-1.png`}
			/>
			<Image
				className={
					'absolute -right-[152px] top-[-288px] z-[1] h-[564px] w-[612px]'
				}
				width={612}
				height={564}
				src={`/circles.png`}
				alt={`circles.png`}
			/>
		</div>
	);
};

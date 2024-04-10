import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export const FirstSection = () => {
	const t = useTranslations('About-us');
	return (
		<section className="mt-20 flex w-full items-center justify-center">
			<div className="flex flex-col items-center gap-12">
				<div className="flex w-full max-w-[740px] flex-col gap-4 text-center">
					<h1 className="text-[32px] font-bold text-gray-900">
						{t('title')} {' PARK'}
						<span className='relative before:absolute before:-top-[26px] before:left-[50%] before:h-[16px] before:w-[16px] before:-translate-x-[50%] before:content-[url("/circle.svg")]'>
							I
						</span>
						{'O '}
					</h1>
					<p>{t('description')}</p>
				</div>
				<Image
					className="!h-[510px] !w-[545px]"
					width={545}
					style={{ width: 'auto', height: 'auto' }}
					height={510}
					src={'/about-parkio.png'}
					alt="about-parkio.png"
				/>
			</div>
		</section>
	);
};

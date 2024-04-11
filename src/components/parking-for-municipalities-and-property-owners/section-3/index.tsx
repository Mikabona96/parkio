import { Button } from '@/elements';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export const ThirdSection = () => {
	const t = useTranslations('PFMAPO');
	return (
		<section className="relative flex h-[552px] items-center overflow-hidden">
			<Image
				className="absolute -left-10 top-[50%] h-[552px] w-[552px] translate-y-[-50%]"
				width={552}
				height={552}
				src={'/parking-municipalities-2.png'}
				alt="parking-municipalities-2.png"
			/>
			<div className="ml-auto flex w-full max-w-[730px] flex-col">
				<h3 className="text-[32px] font-bold text-gray-900">
					{t('s-3-title')}
				</h3>
				<p className="mt-4">{t('s-3-description')}</p>
				<Button className="mt-12 w-fit">{t('button')}</Button>
			</div>
		</section>
	);
};

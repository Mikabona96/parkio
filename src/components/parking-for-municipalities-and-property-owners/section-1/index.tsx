import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export const FirstSection = () => {
	const t = useTranslations('PFMAPO');
	return (
		<section className="flex flex-col items-center gap-12">
			<div className="flex w-full max-w-[740px] flex-col gap-4 text-center">
				<h1 className="text-[32px] font-bold text-gray-900">{t('title')}</h1>
				<p>{t('subtitle')}</p>
			</div>
			<Image
				className="h-[464px] w-[1200px]"
				width={1200}
				height={464}
				priority
				alt="parking-municipalities-1.png"
				src={'/parking-municipalities-1.png'}
			/>
		</section>
	);
};

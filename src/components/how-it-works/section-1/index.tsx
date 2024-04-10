import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export const FirstSection = () => {
	const t = useTranslations('How-it-works');
	return (
		<section className="mt-[6.8rem] px-[120px]">
			<div className="relative flex h-[243px] flex-col items-center justify-center rounded-2xl bg-[#FEF0E2]">
				<div className="text-center">
					<h1 className="text-[32px] font-bold text-gray-900">
						{t('Effortless-Parking')}
					</h1>
					<p className="mt-4">{t('Discover-how-to-use')}</p>
				</div>
				<Image
					className="absolute bottom-0 h-[95px] w-full"
					height={0}
					width={0}
					style={{ width: 'auto', height: 'auto' }}
					alt="line.svg"
					src={'/line.svg'}
				/>
			</div>
		</section>
	);
};

import { useTranslations } from 'next-intl';
import React from 'react';

export const ThirdSection = () => {
	const t = useTranslations('Account-profile');

	return (
		<section className="flex flex-col">
			<div className="flex flex-col">
				<h3 className="text-[20px] text-gray-900">{t('s-3-title')}</h3>
				<p className="mt-4 whitespace-pre-line">{t('s-3-description')}</p>
			</div>
			<button className="ml-auto mt-6 w-fit rounded-lg bg-[#FFA1A3] px-5 py-3 font-bold text-[#fff] transition-all active:bg-[#ff898b]">
				{t('s-3-button')}
			</button>
		</section>
	);
};

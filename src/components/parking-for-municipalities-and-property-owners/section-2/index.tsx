import { WhyParkioCard } from '@/elements';
import { useTranslations } from 'next-intl';
import React from 'react';

export const SecondSection = () => {
	const t = useTranslations('PFMAPO');
	const cards = [
		{
			title: t('s-2-card-1-title'),
			desc: t('s-2-card-1-description'),
			img: '/PFMAPO-card-1.svg',
		},
		{
			title: t('s-2-card-2-title'),
			desc: t('s-2-card-2-description'),
			img: '/PFMAPO-card-2.svg',
		},
		{
			title: t('s-2-card-3-title'),
			desc: t('s-2-card-3-description'),
			img: '/PFMAPO-card-3.svg',
		},
		{
			title: t('s-2-card-4-title'),
			desc: t('s-2-card-4-description'),
			img: '/PFMAPO-card-4.svg',
		},
	];
	return (
		<section className="flex flex-col items-center justify-center gap-12 rounded-lg bg-gray-100 px-12 py-12">
			<h3 className="text-[32px] font-bold text-gray-900">{t('s-2-title')}</h3>
			<div className="grid grid-cols-2 gap-8">
				{cards.map((card, idx) => (
					<WhyParkioCard card={card} idx={idx} key={idx} />
				))}
			</div>
		</section>
	);
};

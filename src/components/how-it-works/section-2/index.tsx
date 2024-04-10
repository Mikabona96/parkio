import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export const SecondSection = () => {
	const t = useTranslations('How-it-works');
	const cards = [
		{
			title: t('card-1-title'),
			description: t('card-1-description'),
			img: '/how-it-works-card-1.png',
		},
		{
			title: t('card-2-title'),
			description: t('card-2-description'),
			img: '/how-it-works-card-2.png',
		},
		{
			title: t('card-3-title'),
			description: t('card-3-description'),
			img: '/how-it-works-card-3.png',
		},
		{
			title: t('card-4-title'),
			description: t('card-4-description'),
			img: '/how-it-works-card-4.png',
		},
	];
	return (
		<section className="flex flex-col gap-[120px]">
			{cards.map((card, idx) => (
				<div
					key={idx}
					className={`flex ${idx % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'} items-center gap-[120px]`}
				>
					<Image
						className="h-[460px] w-[486px]"
						width={486}
						height={460}
						alt={card.img}
						src={card.img}
					/>
					<div className="flex w-full max-w-[594px] flex-col gap-4">
						<h3 className="text-[32px] font-bold text-gray-900">
							{card.title}
						</h3>
						<p className="">{card.description}</p>
					</div>
				</div>
			))}
		</section>
	);
};

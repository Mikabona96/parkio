'use client';
import { Button } from '@/elements';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

export const SecondSection = () => {
	const [selectedRadio, setSelectedRadio] = useState(0);
	const t = useTranslations('Account-profile');
	const cards = [
		{
			title: t('card-1-title'),
			description: t('card-1-description'),
		},
		{
			title: t('card-2-title'),
			description: t('card-2-description'),
		},
		{
			title: t('card-3-title'),
			description: t('card-3-description'),
		},
		{
			title: t('card-4-title'),
			description: t('card-4-description'),
		},
	];
	return (
		<section className="flex w-full flex-col">
			<h3 className="text-[20px] text-gray-700">{t('s-2-title')}</h3>
			<p className="mt-4">{t('s-2-subtitle')}</p>
			<div className="mt-6 grid-cols-2 gap-6 sm:flex sm:flex-col lg:grid">
				{cards.map((card, idx) => (
					<div
						key={idx}
						className="flex cursor-pointer items-start gap-2"
						onClick={() => setSelectedRadio(idx)}
					>
						<label className="relative mt-1 flex h-4 w-4 items-center justify-center rounded-[50%] border border-gray-500 before:absolute before:left-[50%] before:top-[50%] before:h-2 before:w-2 before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-[50%] before:bg-gradient-to-bl before:from-gradient-1 before:to-gradient-3 before:opacity-0 has-[:checked]:border-gradient-1 before:has-[:checked]:opacity-100">
							<input
								className="h-6 w-5 cursor-pointer opacity-0"
								checked={selectedRadio === idx}
								type="radio"
								name="radio"
								onChange={() => setSelectedRadio(idx)}
							/>
						</label>
						<div className="flex flex-col gap-3">
							<h4 className="text-[16px] text-gray-900">{card.title}</h4>
							<p className="text-[14px]">{card.description}</p>
						</div>
					</div>
				))}
			</div>
			<Button className="ml-auto mt-6 w-fit">{t('s-2-button')}</Button>
		</section>
	);
};

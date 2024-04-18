'use client';
import { Accordion, Button } from '@/elements';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

export const FourthSection = () => {
	const t = useTranslations('Home');
	const [openIndex, setOpenIndex] = useState<null | number>(null);
	const cards = [
		{
			question: t('s-4-card-1-question'),
			answer: t('s-4-card-1-answer'),
		},
		{
			question: t('s-4-card-1-question'),
			answer: t('s-4-card-1-answer'),
		},
		{
			question: t('s-4-card-1-question'),
			answer: t('s-4-card-1-answer'),
		},
		{
			question: t('s-4-card-1-question'),
			answer: t('s-4-card-1-answer'),
		},
		{
			question: t('s-4-card-1-question'),
			answer: t('s-4-card-1-answer'),
		},
		{
			question: t('s-4-card-1-question'),
			answer: t('s-4-card-1-answer'),
		},
		{
			question: t('s-4-card-1-question'),
			answer: t('s-4-card-1-answer'),
		},
	];

	const handleClick = (index: number) => {
		setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<section className="flex select-none flex-col items-center sm:px-6 lg:px-0">
			<h3 className="text-xl font-normal text-gray-700">{t('s-4-title')}</h3>
			<h4 className="text-[32px] font-bold text-gray-900 sm:text-center lg:text-start">
				{t('s-4-subtitle')}
			</h4>
			<div className="my-12 flex w-full max-w-[790px] flex-col items-center gap-6">
				{cards.map((card, idx) => (
					<Accordion
						key={idx}
						onClick={() => handleClick(idx)}
						isOpen={idx === openIndex}
						{...card}
					/>
				))}
			</div>
			<Button>{t('s-4-button')}</Button>
		</section>
	);
};

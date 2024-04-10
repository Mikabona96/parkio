'use client';
import { Accordion } from '@/elements';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

export const FirstSection = () => {
	const t = useTranslations('FAQ');
	const [currentItem, setCurrentItem] = useState(0);
	const [openIndex, setOpenIndex] = useState<null | number>(null);

	const menuItems = [
		{
			title: t('Getting-started'),
		},
		{
			title: t('Account-management'),
		},
		{
			title: t('Parking-options'),
		},
		{
			title: t('Technical-issues'),
		},
		{
			title: t('Security-and-privacy'),
		},
		{
			title: t('Business-accounts'),
		},
		{
			title: t('Reminders-and-notifications'),
		},
		{
			title: t('Parking-session-management'),
		},
		{
			title: t('Contact-and-support'),
		},
	];
	const cards = [
		{
			question: t('s-1-card-1-question'),
			answer: t('s-1-card-1-answer'),
		},
		{
			question: t('s-1-card-1-question'),
			answer: t('s-1-card-1-answer'),
		},
		{
			question: t('s-1-card-1-question'),
			answer: t('s-1-card-1-answer'),
		},
		{
			question: t('s-1-card-1-question'),
			answer: t('s-1-card-1-answer'),
		},
		{
			question: t('s-1-card-1-question'),
			answer: t('s-1-card-1-answer'),
		},
		{
			question: t('s-1-card-1-question'),
			answer: t('s-1-card-1-answer'),
		},
		{
			question: t('s-1-card-1-question'),
			answer: t('s-1-card-1-answer'),
		},
	];

	const handleClick = (index: number) => {
		setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<section className="px-[120px]">
			<h1 className="text-[32px] font-bold text-gray-900">
				Frequently Asked Questions
			</h1>
			<div className="mt-12 flex gap-6">
				<ul className="w-full max-w-[282px] list-none">
					{menuItems.map((item, idx) => (
						<li
							onClick={() => setCurrentItem(idx)}
							key={idx}
							className={`relative flex cursor-pointer items-center p-4 transition-all hover:text-gradient-3 ${idx === currentItem && 'text-gradient-3 before:absolute before:left-0 before:top-[50%] before:h-6 before:w-1 before:translate-y-[-50%] before:rounded-lg before:bg-gradient-3 before:content-[""]'}`}
						>
							{item.title}
						</li>
					))}
				</ul>
				<div className="flex w-full max-w-[894px] flex-col items-center gap-6">
					{cards.map((card, idx) => (
						<Accordion
							key={idx}
							onClick={() => handleClick(idx)}
							isOpen={idx === openIndex}
							{...card}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

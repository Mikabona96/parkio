'use client';
import { Accordion, ChevronIcon } from '@/elements';
import { cn } from '@/tools/utils/cn';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

export const FirstSection = () => {
	const t = useTranslations('FAQ');
	const [openIndex, setOpenIndex] = useState<null | number>(null);
	const [dropdownOpen, setDropDownOpen] = useState(false);
	const searchParams = useSearchParams();
	const currentItem = searchParams.get('item') || 'getting-started';

	const menuItems = [
		{
			title: t('Getting-started'),
			q: 'getting-started',
		},
		{
			title: t('Account-management'),
			q: 'account-management',
		},
		{
			title: t('Parking-options'),
			q: 'parking-options',
		},
		{
			title: t('Technical-issues'),
			q: 'technical-issues',
		},
		{
			title: t('Security-and-privacy'),
			q: 'security-and-privacy',
		},
		{
			title: t('Business-accounts'),
			q: 'business-accounts',
		},
		{
			title: t('Reminders-and-notifications'),
			q: 'reminders-and-notifications',
		},
		{
			title: t('Parking-session-management'),
			q: 'parking-session-management',
		},
		{
			title: t('Contact-and-support'),
			q: 'contact-and-support',
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
		<section className="sm:px-6 lg:px-12 xl:px-[120px]">
			<h1 className="text-[32px] font-bold text-gray-900">
				Frequently Asked Questions
			</h1>
			<div className="mt-12 flex gap-6 sm:flex-col sm:items-center md:flex-row md:items-start">
				<div
					className={cn(
						'flex sm:h-14 sm:gap-4 sm:overflow-hidden md:h-auto md:gap-0 md:overflow-auto',
						{
							'sm:h-auto': dropdownOpen,
						},
					)}
				>
					<ul className="w-full max-w-[282px] list-none">
						{menuItems.map((item, idx) => (
							<Link
								onClick={() => setDropDownOpen(false)}
								className={cn('md:block', {
									'sm:hidden': !dropdownOpen && currentItem !== item.q,
								})}
								href={`?item=${item.q}`}
								key={idx}
							>
								<li
									className={`relative flex cursor-pointer items-center p-4 transition-all hover:text-gradient-3 ${item.q === currentItem && 'text-gradient-3 before:absolute before:left-0 before:top-[50%] before:h-6 before:w-1 before:translate-y-[-50%] before:rounded-lg before:bg-gradient-3 before:content-[""]'}`}
								>
									{item.title}
								</li>
							</Link>
						))}
					</ul>
					<span onClick={() => setDropDownOpen(!dropdownOpen)} className="mt-4">
						<ChevronIcon
							className={cn('rotate-0 transition-all md:hidden', {
								'-rotate-180': dropdownOpen,
							})}
						/>
					</span>
				</div>
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
